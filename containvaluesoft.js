
// Contain Product material value is Soft
app.get("/products", async function (request, response) {
    const product = await client
        .db("Day37")
        .collection("products")
        .find({ product_material: "Soft" })
        .toArray()
    response.send(product);
});
