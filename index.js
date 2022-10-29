const express = require('express');
const app = express();
app.use(express.json());
const port=3000;

const items=[]

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});

//Get list of items
app.get('/items', (req, res) => {
    var itemSize = items.length;
    console.log(`itemsize is ${itemSize}`);
    res.send(items);
});
     
//Add an item
app.post('/items', (req, res)=> {
    const item = {
    id: items.length + 1,
    name: req.body.name
    };
    items.push(item);
    res.send(item);
});

//Delete all items
app.delete('/items', (req, res) => {
    var itemSize = items.length;
    if(itemSize==0) 
    {
        res.status(404).send('No items to delete'); return;
    }
    items.length=0
    res.send('all items has been deleted');
});