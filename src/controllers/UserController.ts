import { getRepository } from "typeorm";
import { User } from "../entity/User";
import { Request, Response } from "express";

export default {
  async index(req: Request, res: Response): Promise<Response> {
    const users = await getRepository(User).find();
    return res.json(users);
  },

  async store(req: Request, res: Response): Promise<Response> {
    try {
      const users = getRepository(User);
      const response = await users.save(req.body);
      return res.status(201).json(response);
    } catch (error) {
      return res.send({ erro: error.message });
    }
  },

  async indexById(req: Request, res: Response): Promise<Response> {
    try {
        const { id } = req.params
        const user = getRepository(User)
        const response = await user.findOne(id)
        return res.json(response)
    }
    catch (err) {
        return res.send({ error: err.message })
    }
  },

  async updade(req: Request, res: Response): Promise<Response> {
    try {
        const { id } = req.params
        const user = getRepository(User)
        const response = await user.update(id, req.body)

        // Trás a quantidade de itens afetados
        if(response.affected === 1) {
            const userUpdate = getRepository(User)
            const responseUpdate = await userUpdate.findOne(id)
        }
        return res.json(response)
    }
    catch (err) {
        return res.send({ error: err.message })
    }
  },
};
