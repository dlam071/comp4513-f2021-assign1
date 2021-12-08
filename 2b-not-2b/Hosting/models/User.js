const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: Number,
    details: {
        firstname: String,
        lastname: String,
        city: String,
        country: String
    },
    picture: {
        large: String,
        thumbnail: String
    },
    membership: {
        data_joined: String,
        last_update: String,
        likes: Number
    },
    email: String
});

userSchema.methods.isValidPassword = async function(formPassword) {
    const user = this;
    const has = user.password;
    const compare = await bcrypt.compare(formPassword, hash);
    return compare;
}

module.exports = mongoose.model('User', userSchema, 'users');
