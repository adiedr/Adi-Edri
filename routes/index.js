import { db } from '../db.js';
import { getWeather } from '../services/weatherService.js';
import { Router } from 'express';
export const indexRouter = Router();

/* GET home page. */
indexRouter.get('/', async function(req, res, next) {
  db.query('SELECT * FROM users', async (err, queryResult, fields) => {
    if (err) next();
    console.log(queryResult);
    const weatherData1 = await getWeather(50.0467656, 20.0048731);
    const weatherData2 = await getWeather(32.6878053, 35.4204202);
    res.render('index', { title: 'Express' });
  });
});
