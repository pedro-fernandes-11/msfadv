import React from "react"
import Table from "react-bootstrap/Table"
import { Link } from "react-router-dom"

const formatAddress = (state, city, nhood) => {
  return nhood + ", " + city + " - " + state
}

function MainCustomerTable({ data }) {
  const fields = [
    { dataField: "id", label: "id", visible: false },
    { dataField: "name", label: "Nome", visible: true },
    { dataField: "cpf", label: "CPF", visible: true },
    { dataField: "email", label: "Email", visible: true },
    { dataField: "number", label: "Whatsapp", visible: true },
    { dataField: "address", label: "Endereço", visible: true },
  ]

  console.log(data)

  return (
    <Table responsive>
      <thead>
        <tr>
          {fields.map((field) => {
            if (field.visible) {
              return <th>{field.label}</th>
            }
          })}
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((item) => (
            <tr key={item.id}>
              <td>
                <Link to={"/customer/" + item.id}>{item.name}</Link>
              </td>
              <td>{item.cpf}</td>
              <td>{item.email}</td>
              <td>{item.number}</td>
              <td>{formatAddress(item.state.code, item.city, item.nhood)}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  )
}

export default MainCustomerTable
