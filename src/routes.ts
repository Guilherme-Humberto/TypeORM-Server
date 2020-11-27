import { Router } from 'express'
import controller from './controllers/UserController'

const routes = Router()

routes.get("/list", controller.index)
routes.get("/getById/:id", controller.indexById)
routes.post("/create", controller.store)

export { routes }