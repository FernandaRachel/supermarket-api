const prod = {
    status: {
        code,
        message
    },
    content: [{
        name: { type: String, required: true },
        price: { type: Number, required: true },
        priceSelled,
        discount: { type: Number, required: true },
        weight: { type: Number, required: true },
        measureUnity: { type: String, required: true },
        url: { data: Buffer, contentType: String },
        totalQuantity,
        group: [
            name
        ]

    }]
}