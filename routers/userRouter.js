const express = require('express');
const { portfolioGet, portfolioValuesGet, portfolioPost, portfolioUpdate, portfolioValuesPost, portfolioValuesUpdate, portfolioDelete, portfolioValuesDelete } = require('../controllers/portfolioController');
const userRouter = new express.Router();

/* portfolio curd */
userRouter.get('/v1/portfolio' , portfolioGet);
userRouter.post('/v1/portfolio' , portfolioPost);
userRouter.put('/v1/portfolio' , portfolioUpdate);
userRouter.delete('/v1/portfolio' , portfolioDelete);

/* portfolio values curd */
userRouter.get('/v1/portfoliovalues' , portfolioValuesGet);
userRouter.post('/v1/portfoliovalues' , portfolioValuesPost);
userRouter.put('/v1/portfoliovalues' , portfolioValuesUpdate);
userRouter.delete('/v1/portfoliovalues' , portfolioValuesDelete);





module.exports = userRouter;