import { Router, request, response, Request, Response} from 'express'
import { getHints } from './controller/HintsController';
import { saveHint } from './controller/HintsController';
import { getHint } from './controller/HintsController';
import { updateHint } from './controller/HintsController';
import { deleteHint } from './controller/HintsController';
import { finishedHint } from './controller/HintsController';
const routes = Router()
 
routes.get('/home', (request: Request, response: Response) => {
    return response.json({ message: 'Hello Turma 007!' })
})
routes.get('/hints', getHints)
routes.post('/hints', saveHint)
routes.get('/hints/:id', getHint)
routes.put('/hints/:id', updateHint)
routes.delete('/hints/:id', deleteHint)
routes.patch('/hints/:id', finishedHint)
export default routes