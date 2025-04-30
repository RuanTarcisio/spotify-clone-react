import { Router } from "express";

const router = Router();

router.get("/", (req, res)=>{
    res.send("User route teste")
});

export default router;
