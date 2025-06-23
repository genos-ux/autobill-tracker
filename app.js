import express from "express";

import { PORT } from "./config/env.js";

import router from "./routes/index.routes.js";

import connectToDatabase from "./database/mongodb.js";

const app = express();

app.use(express.json());

app.use('/api/v1/',router);


app.get('/', (req,res) => {
    res.send('Welcome to the Autobill Tracker API!');
});

app.listen(PORT, async() => {
    console.log(`Autobill Tracker API is running on http://localhost:${PORT}`)

    await connectToDatabase();
})

export default app;