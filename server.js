const express = require('express')
const app = express()
const port = 3030
app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);

})

app.get('/', (req, res) => {
    res.send(`<h1>Server del mio blog<h1>`)
})

