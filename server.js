const express = require('express');
const app = express();
const PORT = 5000;

app.get('/api/customers', (req,res) =>{
    const customers = [
        {id:1, firstName:'Jer',lastName:'Carlo'},
        {id:2, firstName:'Mary',lastName:'Swatson'},
        {id:3, firstName:'John',lastName:'Doe'},
    ]
    res.json(customers)
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))