import React, { useState, useEffect } from "react"
import axios from "axios"

import Button from "react-bootstrap/Button"

import MainCustomerTable from "../components/MainCustomerTable"

function Home() {
  const [data, setData] = useState([])
  const [isLoadingCustomers, setIsLoadingCustomers] = useState(false)

  console.log("b")

  useEffect(() => {
    const url = process.env.REACT_APP_API_URL + "customer"

    console.log(url)

    setIsLoadingCustomers(true)

    axios
      .get(url)
      .then((response) => {
        const sortedData = response.data.sort((a, b) =>
          a.name.localeCompare(b.name)
        )

        setData(sortedData)
        setIsLoadingCustomers(false)
      })
      .catch((error) => {
        console.log("Error loading customers:" + error.config)
      })
  }, [])

  return (
    <div className="customers-wrapper">
      <Button variant="outline-success">Adicionar</Button>
      <MainCustomerTable data={data} />
    </div>
  )
}

export default Home
