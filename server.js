const express = require('express');
const fs = require('fs');
const app = express();
const port = 8080;

app.use(express.json());

app.post('./save-counter', (req, res) => {
    const counter = req.body.counter;

    fs.writeFile('counter.json', JSON.stringify({ counter }), (err) => {
        if (err) {
            res.status(500).send("Error saving counter");
            return;
        }
        res.send('Counter saved');
    });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
}); 