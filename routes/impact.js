const express = require("express")
const router = express.Router()

const generateAIResponse = require("../services/openaiService")
const createImpactPrompt = require("../prompts/impactPrompt")

router.post("/", async (req,res)=>{

try{

const {productName,quantity} = req.body

const prompt = createImpactPrompt(productName,quantity)

const aiResponse = await generateAIResponse(prompt)

res.json({
 success:true,
 data: JSON.parse(aiResponse)
})

}catch(error){

res.status(500).json({
 error:"Impact generation failed"
})

}

})

module.exports = router