const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemsSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: String,
    inStock: {type: Boolean, default: true},
    price: { type: Number, required: true },
    owner: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
    createdAt: { type: Date, default: Date.now }
});

const Items = mongoose.model('Items', ItemsSchema);

module.exports = Items;