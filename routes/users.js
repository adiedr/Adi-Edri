import { Router } from 'express';
import { db } from '../db.js';
export const userRouter = Router();

/* GET users listing. */
userRouter.get('/', function(req, res, next) {
  const userId = req.params.id;
  if (!userId) next();
  db.query(`SELECT * FROM users WHERE id = ${userId}`, async (err, queryResult, fields) => {
    if (err) next();
    res.render('index', { title: 'Express', ...queryResult });
  });
});

userRouter.delete('/', (req, res) => {});
