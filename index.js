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

//Retrieve item by id
app.get('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
        
    if (!item) {
        res.status(404).send('Item with that id dont exist');
        return;
    }
    res.send(item);
});

//Delete item by id
app.delete('/items/:id', (req, res) => {
    const item = items.find( i=> i.id === parseInt(req.params.id));
    if (!item) {
        res.status(404).send('Item with that id dont exist');
        return;
    }
    const index = items.indexOf(item);
    items.splice(index,1);   
    res.send(items);
});

//UPDATE item name by id
app.put('/items/:id', (req, res) => {
    const item = items.find( i=> i.id === parseInt(req.params.id));
    if (!item) {
        res.status(404).send('Item with that id dont exist');
        return;
    }   
    item.name = req.body.name;
    res.send(items);
});