import { Router } from "express";
import { authorize } from "../middlewares/auth.middleware.js";
import { createSubscription, getAllUsersSubscriptions, getUserSubscriptions } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get('/', authorize, getAllUsersSubscriptions);

subscriptionRouter.get('/:id', (req,res) => res.send({title: 'GET subscriptions details'}));

subscriptionRouter.post('/', authorize, createSubscription);

subscriptionRouter.put('/:id', (req,res) => res.send({title: 'UPDATE subscription'}));

subscriptionRouter.delete('/:id', (req,res) => res.send({title: 'DELETE subscription'}));

subscriptionRouter.get('/user/:id',authorize, getUserSubscriptions);

subscriptionRouter.put('/:id/cancel', (req,res) => res.send({title: 'CANCEL subscription'}));

subscriptionRouter.put('/upcoming-renewals', (req,res) => res.send({title: 'GET upcoming renewals'}));


export default subscriptionRouter;