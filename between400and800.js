// To get product price between 400 and 800
app.get("/products", async function (request, response) {
    const product = await client
        .db("Day37")
        .collection("products")
        .find({ "product_price": { $gt: 400, $lt: 800 } })
        .toArray()
    response.send(product);
});