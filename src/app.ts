// src/app.ts
import { configureDocs, getVersion } from './lib/configure-docs'
import createApp from './lib/create-app'
import health from './routes/health/health.index'
import tasksRouter from './routes/tasks/tasks.index'

const app = createApp()

// Configure OpenAPI and Scalar docs
configureDocs(app)

// Routes
const routes = [
  health,
  tasksRouter,
]

routes.forEach((route) => {
  app.route(`api/${getVersion()}`, route)
})

export { app }