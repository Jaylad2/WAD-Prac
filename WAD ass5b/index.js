const dbConnect = require('./mongodb');
const express = require('express');
const app = express();
app.use(express.json());


//get API
app.get('/getData', async (req, res) => {
    const result = await dbConnect();
    const data = await result.find().toArray();
    res.send(data);
});

//post API
app.post('/postData', async (req, res) => {
    const result = await dbConnect();
    const data = await result.insertOne(req.body);
    res.send("data inserted successfully");
});

//put API
app.put('/updateData/:name', async (req, res) => {
    const result = await dbConnect();
    const data = await result.updateOne({ name: req.params.name }, { $set: req.body });
    res.send("data updated successfully");
});

//delete API
app.delete('/deleteData/:name', async (req, res) => {
    const result = await dbConnect();
    const data = await result.deleteOne({ name: req.params.name });
    res.send("data deleted successfully");
});

app.listen(3000);