import env from '@/env'
import { PrismaClient } from '@prisma/client'

export const db = new PrismaClient({
  datasourceUrl: env.DATABASE_URL,
})
