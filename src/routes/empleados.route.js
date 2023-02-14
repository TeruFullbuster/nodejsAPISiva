import { Router } from 'express';
import {getEmpleados,createEmpleados,putEmpleados,deleteEmpleados,getEmpleado,inicioSession} from '../controllers/empleados.controller.js'
const router = Router()

 router.get('/empleados' , getEmpleados)

 router.get('/empleado/:id' , getEmpleado)
 
 router.post('/empleados' , createEmpleados)
 
 router.put('/empleados/:id' , putEmpleados)
 
 router.delete('/empleados/:id' , deleteEmpleados)

 router.post('/empleados/inicioSession' , inicioSession)

export default router