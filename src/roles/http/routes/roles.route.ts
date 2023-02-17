import { Role } from '@roles/entities/Role'
import { Router } from 'express'

const rolesRouter = Router()

rolesRouter.post('/', (request, response) => {
  const { name } = request.body

  return response.status(201).json(role)
})

export { rolesRouter }
