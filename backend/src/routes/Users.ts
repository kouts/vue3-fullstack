import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ParamsDictionary } from 'express-serve-static-core';
import { paramMissingError } from '@shared/constants';
import { db } from '../db/db';

// Init shared
const router = Router();

/******************************************************************************
 *                      Get All Actors - "GET /api/users"
 ******************************************************************************/

router.get('/', async (req: Request, res: Response) => {
  const [users, metadata] = await db.query("SELECT * FROM user");
  return res.status(StatusCodes.OK).json(users);  
});


/******************************************************************************
 *                       Add One - "POST /api/users/add"
 ******************************************************************************/

router.post('/add', async (req: Request, res: Response) => {
  const { user } = req.body;
  if (!user) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: paramMissingError,
    });
  }
  console.log(user);
  // const [users, metadata] = await db.query("");
  // return res.status(StatusCodes.CREATED).end();
});


/******************************************************************************
 *                       Update - "PUT /api/users/update"
 ******************************************************************************/

router.put('/update', async (req: Request, res: Response) => {
  const { user } = req.body;
  if (!user) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: paramMissingError,
    });
  }
  user.id = Number(user.id);
  console.log(user);
  // const [users, metadata] = await db.query("");
  // return res.status(StatusCodes.OK).end();
});


/******************************************************************************
 *                    Delete - "DELETE /api/users/delete/:id"
 ******************************************************************************/

router.delete('/delete/:id', async (req: Request, res: Response) => {
  const { id } = req.params as ParamsDictionary;
  console.log(id);
  // const [users, metadata] = await db.query("");
  // return res.status(StatusCodes.OK).end();
});


/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
