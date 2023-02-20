const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
// mongoose username = deepak_kumar
// mongoose password = deepak123
const Note = require("./models/note");
mongoose.connect("mongodb+srv://deepak_kumar:deepak123@cluster0.h2ftqll.mongodb.net/notesdb").then(() =>{
    app.get("/", (req,res) =>{
        res.write("This is Deepak Kumar");
        res.end();
    });

    const noteRouter = require("./routes/Notes");
    app.use("/notes", noteRouter);
});




app.listen(8000, ()=>{
    console.log("Deepak kumar server is runing");
})
