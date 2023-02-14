import { Router } from "express";
import {getDocumento} from '../controllers/documentos.controller.js'

const router = Router()

router.get('/documentos/:id' , getDocumento)

export default router