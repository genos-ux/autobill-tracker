import { Router } from "express";
import userRouter from "./user.routes.js";
import authRouter from "./auth.routes.js";
import subscriptionRouter from "./subscription.routes.js";
import workflowRouter from "./workflow.routes.js";

const router = Router();

router.use('/auth',authRouter);
router.use('/users',userRouter);
router.use('/subscriptions',subscriptionRouter);
router.use('/workflows', workflowRouter);


export default router;