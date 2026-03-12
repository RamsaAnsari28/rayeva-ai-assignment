const express = require("express")
const router = express.Router()
const Joi = require("joi")

const fs = require("fs")
const path = require("path")

const generateAIResponse = require("../services/openaiService")
const createCategoryPrompt = require("../prompts/categoryPrompt")

// database file
const dbFile = path.join(__dirname, "../database/data.json")

// validation schema
const schema = Joi.object({
  productName: Joi.string().required(),
  description: Joi.string().required()
})

router.post("/", async (req, res) => {

  try {

    // validate request
    const { error } = schema.validate(req.body)

    if (error) {
      return res.status(400).json({
        error: "Invalid input",
        message: error.details[0].message
      })
    }

    const { productName, description } = req.body

    // create AI prompt
    const prompt = createCategoryPrompt(productName, description)

    // call AI service
    const aiResponse = await generateAIResponse(prompt)

    const data = JSON.parse(aiResponse)

    // read existing database
    let db = []

    try {
      db = JSON.parse(fs.readFileSync(dbFile))
    } catch (err) {
      db = []
    }

    // add new entry
    db.push({
      id: Date.now(),
      productName,
      description,
      ai_category: data,
      createdAt: new Date()
    })

    // save database
    fs.writeFileSync(dbFile, JSON.stringify(db, null, 2))

    res.json({
      success: true,
      data: data
    })

  } catch (error) {

    res.status(500).json({
      error: "AI generation failed"
    })

  }

})

module.exports = router