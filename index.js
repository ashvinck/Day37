import express from "express";
import { MongoClient } from "mongodb";
const app = express();

const PORT = 4000;


const MONGO_URL = "mongodb://127.0.0.1"; //to connect to compass

async function createConnection() {
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    console.log("Mongo is connected!")
    return client;
}

const client = await createConnection();

app.use(express.json());

app.get("/", function (request, response) {
    response.send("🙋‍♂️, 🌏 🎊✨🤩");
});

// To get All Products
app.get("/products", async function (request, response) {
    const product = await client
        .db("Day37")
        .collection("products")
        .find({}, { product_name: 1, product_material: 1, _id: 0 })
        .toArray()
    response.send(product);
});


app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
