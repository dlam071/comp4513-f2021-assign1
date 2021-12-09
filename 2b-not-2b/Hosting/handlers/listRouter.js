//return all plays
const handleAllPlays = (app, Play) => {
  app.route("/api/list").get((req, resp) => {
    Play.find({}, "-playText", (err, data) => {
      if (err) {
        resp.json({ message: "Unable to connect to plays" });
      } else {
        resp.json(data);
      }
    });
  });
};

//get play by id
handlePlayByID = (app, Play) => {
  app.route("/api/play/:id").get((req, resp) => {
    Play.find({ id: req.params.id }, "-playText", (err, data) => {
      if (err) {
        resp.json({ message: "Play not found :(" });
      } else {
        resp.json(data);
      }
    });
  });
};

module.exports = {
  handleAllPlays,
  handlePlayByID,
};
