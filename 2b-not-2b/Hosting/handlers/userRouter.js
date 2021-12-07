//get user by id
handleUserByID = (app, User) => {
    app.route('/api/user/:id')
        .get((req, resp) => {
            User.find({ id: req.params.id }, (err, data) => {
                if (err) {
                    resp.json({ message: 'User not found :(' });
                } else {
                    resp.json(data);
                }
            })
        });
}

module.exports = {
    handleUserByID
};