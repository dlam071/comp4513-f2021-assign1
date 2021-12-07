//return all plays 
const handleAllPlays = (app, Play) => {
    app.route('/api/list')
        .get((req, resp) => {
            Play.find({},"-playText", (err, data) => {
                if (err) {
                    resp.json({ message: 'Unable to connect to plays' });
                } else {
                    resp.json(data);
                }
            })
        })
}

module.exports = {
    handleAllPlays
};