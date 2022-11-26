// Row id of 10
app.get("/products", async function (request, response) {
    const product = await client
        .db("Day37")
        .collection("products")
        .find({ id: "10" })
        .toArray()
    response.send(product);
});
