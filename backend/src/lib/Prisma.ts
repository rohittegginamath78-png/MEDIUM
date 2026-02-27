import { PrismaClient } from "@prisma/client/edge"
import { withAccelerate } from "@prisma/extension-accelerate"

let prisma: ReturnType<typeof createPrisma> | undefined



function createPrisma(databaseUrl: string) {
  return new PrismaClient({
    accelerateUrl: databaseUrl,
  }).$extends(withAccelerate())
}

export function getPrisma(databaseUrl: string) {
  if (!prisma) {
    prisma = createPrisma(databaseUrl)
  }
  return prisma
}