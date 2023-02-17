import { Router } from 'express'
import { rolesRouter } from '@roles/http/routes/roles.route'

const routes = Router()

routes.get('/', (request, response) => {
  return response.json({ message: 'Olá dev!' })
})

routes.use('/roles', rolesRouter)

export { routes }
