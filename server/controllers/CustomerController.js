const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

exports.getAllCustomers = async (req, res) => {
  try {
    const customers = [
      {
        id: "1",
        name: "João da Silva",
        cpf: "123.456.789-00",
        email: "joao@example.com",
        number: "+5511987654321",
        state: { code: "SP" },
        city: "São Paulo",
        nhood: "Centro",
      },
      {
        id: "2",
        name: "Maria Oliveira",
        cpf: "987.654.321-00",
        email: "maria@example.com",
        number: "+5511888888888",
        state: { code: "RJ" },
        city: "Rio de Janeiro",
        nhood: "Copacabana",
      },
      {
        id: "3",
        name: "Pedro Santos",
        cpf: "456.789.123-00",
        email: "pedro@example.com",
        number: "+5521999999999",
        state: { code: "MG" },
        city: "Belo Horizonte",
        nhood: "Savassi",
      },
      {
        id: "4",
        name: "Ana Costa",
        cpf: "654.321.987-00",
        email: "ana@example.com",
        number: "+5531888888888",
        state: { code: "BA" },
        city: "Salvador",
        nhood: "Barra",
      },
      {
        id: "5",
        name: "Lucas Pereira",
        cpf: "789.123.456-00",
        email: "lucas@example.com",
        number: "+5541999999999",
        state: { code: "PR" },
        city: "Curitiba",
        nhood: "Batel",
      },
      {
        id: "6",
        name: "Juliana Lima",
        cpf: "321.654.987-00",
        email: "juliana@example.com",
        number: "+5561999999999",
        state: { code: "DF" },
        city: "Brasília",
        nhood: "Asa Sul",
      },
      {
        id: "7",
        name: "Carlos Almeida",
        cpf: "123.789.456-00",
        email: "carlos@example.com",
        number: "+5571999999999",
        state: { code: "CE" },
        city: "Fortaleza",
        nhood: "Meireles",
      },
      {
        id: "8",
        name: "Fernanda Costa",
        cpf: "987.321.654-00",
        email: "fernanda@example.com",
        number: "+5581999999999",
        state: { code: "PE" },
        city: "Recife",
        nhood: "Boa Viagem",
      },
      {
        id: "9",
        name: "Rafael Silva",
        cpf: "456.123.789-00",
        email: "rafael@example.com",
        number: "+5591999999999",
        state: { code: "RS" },
        city: "Porto Alegre",
        nhood: "Moinhos de Vento",
      },
      {
        id: "10",
        name: "Camila Souza",
        cpf: "654.987.321-00",
        email: "camila@example.com",
        number: "+5507999999999",
        state: { code: "GO" },
        city: "Goiânia",
        nhood: "Setor Bueno",
      },
    ]

    res.json(customers)
  } catch (error) {
    console.error("Error fetching customers:", error)
    res.status(500).json({ error: "Internal server error (5001)" })
  }
}
