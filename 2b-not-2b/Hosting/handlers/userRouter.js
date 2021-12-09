const helper = require('./helpers.js');

//get user by id
handleUserByID = (app, User) => {
    app.get('/api/user/:id', (req, resp) => {
            User.find({}, helper.ensureAuthenticated, "id details picture membership email password_bcrypt" ,(err, data) => {
                if (data) {
                    resp.json(data);
                } else {
                    resp.json({ message: 'User not found :(' });
                }
            })
        });
}

module.exports = {
    handleUserByID
};