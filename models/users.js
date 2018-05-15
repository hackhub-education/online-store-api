const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    location: String,
    phone: String,
    avatarUrl: { type: String, default: '/img/sample-avatar.png' },
    items: [{ type: Schema.Types.ObjectId, ref: 'Items' }]
});

UsersSchema.plugin(passportLocalMongoose, {
    usernameField: 'email'
});

const Users = mongoose.model('Users', UsersSchema);

module.exports = Users;