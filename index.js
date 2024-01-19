const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const users = [
    {id: 1, name:'sabana'},
    {id: 2, name:'sabana2'},
    {id: 3, name:'sabila'},
]

app.get('/', (req, res) =>{
    res.send('user management server running');
})
app.get('/users', (req, res) =>{
 res.send(users);
})
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});