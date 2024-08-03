import express from "express";
import { createdetails, deletedetails, getdetails, getdetailsid, putdetails } from "../Controller/Library.js";

const router =express.Router();

router.post("/createdetails",createdetails);
router.get("/getdetails",getdetails);
router.get("/getdetailsid/:id",getdetailsid);
router.put("/putdetails/:id",putdetails);
router.delete("/deletedetails/:id",deletedetails);



export default router;