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

const handleAllUsers = (app, User) => {
    app.route('/api/user/list')
        .get((req, resp) => {
            User.find({}, (err, data) => {
                if (err) {
                    resp.json({ message: 'Unable to connect to users' });
                } else {
                    resp.json(data);
                }
            })
        })
}


module.exports = {
    handleUserByID, handleAllUsers
};