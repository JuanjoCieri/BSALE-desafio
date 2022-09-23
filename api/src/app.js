import express from "express"
import cors from "cors"
import {pool} from "./db.js"
// import routes from './routes/index.js'
// import {routes} from './routes/index.js'

const app = express()

app.use(cors())

app.get("/categories", async (req, res) => {
    const [products] = await pool.query('SELECT * FROM category')
    res.json(products)
})

app.get("/categories/:id", async (req, res) => {
    const {id} = req.params
    const [products] = await pool.query(`SELECT * FROM product WHERE category = ${id}`)
    res.json(products)
})

// app.use('/', routes);

app.listen(3000)

console.log("Server listening")