import { Router } from "express";

const router = Router();

router.get("/", (req, res)=>{
    res.send("User route teste")
});


// router.use(protectRoute, requireAdmin);

// router.get("/check", checkAdmin);

// router.post("/songs", createSong);
// router.delete("/songs/:id", deleteSong);

// router.post("/albums", createAlbum);
// router.delete("/albums/:id", deleteAlbum);

export default router;
