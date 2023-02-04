import express from "express";
import mongoose from "mongoose";
import cards from './src/cards';
import Cors from 'cors';

const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://ajayad07:Kavddaad07@cluster0.kh2swai.mongodb.net/tinderdb?retryWrites=true&w=majority';

app.use(express.json());
app.use(Cors());

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.get("/", (req,res) => res.status(200).send("Hello"));

app.post("/cards", (req, res) => {
    const dbcards = req.body;

    cards.create(dbcards, (err,data) => {
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data)
        }
    })
})

app.get("/cards", (req, res) => {

    cards.find((err,data) => {
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data)
        }
    })
})

app.listen(port, () => console.log(`On localhost: ${port}`));