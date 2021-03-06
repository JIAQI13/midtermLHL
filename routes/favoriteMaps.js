/*
 * All routes for maps are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();

module.exports = (db) => {

  //read all favourite maps
  router.get("/:id", (req, res) => {
    // console.log(req.body);
    console.log(typeof req.params.id);
    let query = `
              SELECT Distinct maps.name
              FROM maps
              join favourite_maps on maps.id=favourite_maps.map_id
              WHERE favourite_maps.user_id=${req.params.id}
              ;`;
    console.log(query);
    db.query(query)
    .then(data => {

        const favouriteMaps = data.rows;
        res.json({ favouriteMaps });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  //add map to fav maps
  router.post('/', (req, res) => {
    const userId = req.body.user_id;
    const mapId = req.body.map_id;
    const query = `INSERT INTO favourite_maps (user_id, map_id) VALUES ('${userId}', '${mapId}');`;
    console.log(query);
    //const values = [userId, map_id];
    db.query(query)
      .then(data => {
        res.send('data send');
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  //delete fav map
  router.delete("/", (req, res) => {
    const userId = req.body.user_id;
    const mapId = req.body.map_id;
    let query = `DELETE FROM favourite_maps WHERE map_id = '${mapId}' and user_id='${userId}';`;
    console.log(query);
    db.query(query)
      .then(data => {
        res.send('data deleted');
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  return router;

};
