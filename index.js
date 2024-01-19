const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
//middleware
app.use(cors());
app.use(express.json());
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

//post for new user###
app.post('/users', (req, res) =>{
    console.log('req.body');
    const newUser = req.body;
    newUser.id = users.length + 1; 
    users.push(newUser);
    res.send(newUser);
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});