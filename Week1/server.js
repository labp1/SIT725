const express = require('express');
const app = express();
const PORT = 3000;

// use middleware: parse request objects as json
app.use(express.json())

// Listen to port
app.listen(PORT, () => {
    console.log(`it's listening on port http://localhost:${PORT}`);
});


// GET sum of 2 numbers
app.get('/add/:num1/:num2', (req, res) => {
    const { num1, num2 } = req.params
    const num1_int = parseInt(num1)
    const num2_int = parseInt(num2)

    res.status(200).send({
        result: num1_int + num2_int
    })
})

// POST
app.post('/add', (req, res) => {
    const {num1, num2} = req.body

    if (!isNaN(num1) && !isNaN(num2)) {
        
        res.status(200).send({
            result: num1 + num2
        })
    }

    res.status(400).send({message : 'You must input an integer!'})
    
})