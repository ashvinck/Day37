// Get four products which are greater than 500
app.get("/products", async function (request, response) {
    const product = await client
        .db("Day37")
        .collection("products")
        .find({ "product_price": { $gt: 500 } })
        .limit(4)
        .toArray()
    response.send(product);
});