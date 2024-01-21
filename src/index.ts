import { OpenAI } from 'openai'
import dotenv from 'dotenv'

dotenv.config()

console.log('1234 env', process.env.OPENAI_KEY)
// const openai = new OpenAI({
//   apiKey: ''
// })
