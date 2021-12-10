const helper = require('./helpers.js');

//get user by id
handleUserByID = (app, User) => {
    app.get('/api/user/:id', (req, resp) => {
            User.find({ id: req.params.id }, "id details picture membership email" ,(err, data) => {
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