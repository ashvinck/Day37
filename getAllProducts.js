// To get All information about the product
app.get("/products", async function (request, response) {
    const product = await client
        .db("Day37")
        .collection("products")
        .find({})
        .toArray()
    response.send(product);
});
