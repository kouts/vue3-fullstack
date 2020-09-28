import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ParamsDictionary } from 'express-serve-static-core';
import { paramMissingError } from '@shared/constants';
import { db } from '../db/db';
import { QueryTypes } from 'sequelize';

const router = Router();

type User = {
  id: number;
  first_name: string;
  last_name: string;
  birthday: string;
  company: string;
  email: string;
  address: string;
  created_at: string;
  updated_at: string;
}

router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params as ParamsDictionary;
  const users: User[] = await db.query("SELECT * FROM user WHERE id = :id LIMIT 1", {
    type: QueryTypes.SELECT,
    replacements: {id: id}
  });
  return res.status(StatusCodes.OK).json(users[0]);
});

router.get('/', async (req: Request, res: Response) => {
  const users: User[] = await db.query("SELECT * FROM user", { type: QueryTypes.SELECT });
  // console.log(users[0].first_name);
  return res.status(StatusCodes.OK).json(users);
});

router.post('/', async (req: Request, res: Response) => {
  const user = req.body;
  if (!user) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: paramMissingError,
    });
  }
  const [result, metadata] = await db.query(`
    INSERT INTO
      user
    VALUES
      (:id, :first_name, :last_name, :birthday, :company, :email, :address, :created_at, :updated_at)
    `, 
  {
    replacements: user,
    type: QueryTypes.INSERT
  });
  return res.status(StatusCodes.CREATED).end();
});


router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params as ParamsDictionary;
  const user = req.body;
  if (!user) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: paramMissingError,
    });
  }
  const [result, metadata] = await db.query(`
    UPDATE
      user
    SET
      first_name = :first_name,
      last_name = :last_name,
      birthday = :birthday,
      company = :company,
      email = :email,
      address = :address,
      created_at = :created_at,
      updated_at = :updated_at
    WHERE
      id = :id
    `, 
  {
    replacements: user,
    type: QueryTypes.UPDATE
  });
  return res.status(StatusCodes.CREATED).end();
});

router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params as ParamsDictionary;
  await db.query("DELETE FROM user WHERE id = :id", {
    type: QueryTypes.DELETE,
    replacements: {id: id}
  });
  return res.status(StatusCodes.OK).end();
});

export default router;
