import { PrismaClient } from "@prisma/client"
import { readBody } from "h3"

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {

  const body = await readBody(event)
  const { frontText, backText, deckName, cardNumber } = body
  console.log(body)

  

  try {
    await prisma.card.create({
      data: {
        frontText,
        backText,
        cardNumber,
        deckName: deckName.toUpperCase() as "UFORM" , // Ensure theme is uppercase and matches the enum
      },
    })
    return { ok: true }
  } catch (e) {
    console.error(e)
    return { ok: false }
  }
 
})
