import { PrismaClient } from "@prisma/client"
import { parse } from "path"

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
 
const deckId = getRouterParam(event, 'deckId') || ''
const id = parseInt(deckId)

  try {
    const deck = await prisma.deck.findUnique({
      where: {
        id: id,
      },
      include: {
        cards: true,
      },
    })
    if (deck) {
      return {
        statusCode: 200,
        deck: deck,
        cards: deck.cards,
      }
    } else {
      return {
        statusCode: 404,
        deck: 'Deck not found',
      }
    }
  } catch (error) {
  return {
    statusCode: 500,
    body: error,
   }
  }
})
