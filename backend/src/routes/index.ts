import { Router } from 'express';
import UserRouter from './Users';
import ItemRouter from './Items';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/users', UserRouter);
router.use('/items', ItemRouter);

// Export the base-router
export default router;
