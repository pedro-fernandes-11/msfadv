const express = require("express")
const path = require("path")
const cors = require("cors")
require("dotenv").config()

const customerRoutes = require("./routes/customerRoutes")

const app = express()

app.use(
  process.env.ISPRODUCTION == 0
    ? cors({
        origin: process.env.FRONT_END_URL + ":" + process.env.FRONT_END_PORT,
      })
    : express.static(path.join(__dirname, "/../client/build"))
)

app.use("/api/customer", customerRoutes)

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`HTTP server running on port ${PORT}`)
})
