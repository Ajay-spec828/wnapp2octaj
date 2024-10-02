const express=require("express");
const cors=require("cors");
const {MongoClient}=require("mongodb");

const app=express();
app.use(cors());
app.use(express.json());

app.post("/save",(req,res)=>{
    const url="mongodb+srv://ajpandey2580:jxctYrPe21IYD98S@cluster0.ivass.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const client=new MongoClient(url);
    const db=client.db("wnoct24");
    const coll=db.collection("student");
    const doc={"name":req.body.name, "choice":req.body.choice};
    coll.insertOne(doc)
    .then(result=>res.send(result))
    .catch(error=>res.send(error));

});

app.listen(9000,()=>{console.log("ready @ 9000");});
