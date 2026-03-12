const express = require("express")
const cors = require("cors")
require("dotenv").config()

const categoryRoute = require("./routes/category")
const impactRoute = require("./routes/impact")

const app = express()

app.use(cors())
app.use(express.json())

// Home route
app.get("/", (req, res) => {
  res.send("Rayeva AI System Running")
})

// Health check route
app.get("/health", (req, res) => {
  res.json({
    status: "API running",
    service: "Rayeva AI System",
    time: new Date()
  })
})

// AI Routes
app.use("/ai/category", categoryRoute)
app.use("/ai/impact", impactRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log("Server running on port", PORT)
})