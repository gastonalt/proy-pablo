
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

let cosa = {
    name: 'cosa',
    length: '2cm'
}

app.use(cors());

app.get('/', (req, res)=>{
    res.json(cosa)
})

app.listen(port, () => {
    console.log(`App corriendo en: ${port}`);
});