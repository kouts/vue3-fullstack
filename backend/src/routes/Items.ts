import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { paramMissingError } from '@shared/constants';

// Init shared
const router = Router();

/******************************************************************************
 *                      Get All Users - "GET /api/items/all"
 ******************************************************************************/

router.get('/all', async (req: Request, res: Response) => {
  const items = [
    {
      name: 'List item 1',
      desc: 'Description 1'
    },
    {
      name: 'List item 2',
      desc: 'Description 2'
    },    
  ]
  return res.status(StatusCodes.OK).json({ items });
});

export default router;