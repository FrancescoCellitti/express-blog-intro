const express = require('express')
const app = express()
const port = 3030
app.use(express.static('images'))

const posts = [
    {
        titolo: "Ciambellone soffice",
        contenuto: "Ricetta tradizionale per un ciambellone soffice e profumato.",
        immagine: "/images/ciambellone.jpeg",
        tags: ["dolci", "colazione", "tradizione"]
    },
    {
        titolo: "Cracker alla barbabietola",
        contenuto: "Snack salutare e colorato a base di barbabietola.",
        immagine: "/images/cracker_barbabietola.jpeg",
        tags: ["snack", "barbabietola", "salutare"]
    },
    {
        titolo: "Pane fritto dolce",
        contenuto: "Un modo goloso per riciclare il pane raffermo.",
        immagine: "/images/pane_fritto_dolce.jpeg",
        tags: ["dolci", "pane", "riciclo"]
    },
    {
        titolo: "Pasta alla barbabietola",
        contenuto: "Un primo piatto originale dal colore vivace.",
        immagine: "/images/pasta_barbabietola.jpeg",
        tags: ["primi", "barbabietola", "vegetariano"]
    },
    {
        titolo: "Torta paesana",
        contenuto: "Dolce tipico lombardo ricco di sapori autentici.",
        immagine: "/images/torta_paesana.jpeg",
        tags: ["dolci", "lombardia", "tradizione"]
    }
]

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);

})

app.get('/', (req, res) => {
    res.send(`<h1>Server del mio blog<h1>`)
})

app.get('/api/posts', (req, res) => {
    res.json(posts)
})






