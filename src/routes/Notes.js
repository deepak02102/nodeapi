const express = require("express");
const router = express.Router();
const Note = require('./../models/note')

router.get("/", (req,res) =>{
    res.write("This is Deepak Kumar");
    res.end();
});
router.get("/list", async (req,res) =>  {
    var notes = await Note.find();
   res.send(notes);
res.end();
});
router.get("/list/:userid", async (req,res) =>  {
    var notes = await Note.find({userid: req.params.userid});
   res.send(notes);
res.end();
});


router.post("/add", async (req,res) =>  {
    await Note.deleteOne({id : req.body.id})
   const newNotes = new Note({
    id: req.body.id,
    userid: req.body.userid,
    title:req.body.title,
    content: req.body.connect
   });
  await newNotes.save();
  const response = {meassage:"New Note Created!" + ` id : ${req.body.id}`};
   res.json(response);
    });

    router.post("/delete", async (req,res) =>{
        await Note.deleteOne({id : req.body.id});

        const response = {meassage:" Note Delete!" + ` id : ${req.body.userid}`};
        res.json(response);
    });

    module.exports = router;