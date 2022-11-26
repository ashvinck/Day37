// Product material and product name only without _id field
app.get("/products", async function (request, response) {
    const product = await client
        .db("Day37")
        .collection("products")
        .find({}, { product_name: 1, product_material: 1, _id: 0 })
        .toArray()
    response.send(product);
});
