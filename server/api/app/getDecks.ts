import { PrismaClient } from "@prisma/client"
import { readBody } from "h3"

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const decks = await prisma.deck.findMany({
      include: {
        cards: true
      }
    })
    
    return { decks: decks, ok: true }
  } catch (e) {
    console.error(e)
    return { ok: false }
  }
})
