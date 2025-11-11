import express, { Router } from "express"
import produtoRouter from "./produto"


const router = express.Router()
router.use("/produto", produtoRouter)

export default router