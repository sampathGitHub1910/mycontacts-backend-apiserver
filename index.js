const express = require("express")
const errorHandler = require("./Middleware/errorHandler")
const connectDb = require("./Config/dbConnection")
const dotenv = require("dotenv").config()

connectDb()
const app = express()

const port = process.env.PORT || 5000

app.use(express.json())
app.use("/api/contacts", require("./routes/contactsRoutes"))
app.use("/api/users", require("./routes/userRoutes"))
app.use(errorHandler)

app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
})