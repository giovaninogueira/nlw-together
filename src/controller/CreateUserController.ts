import { Request, Response } from "express";
import { CreateUserService } from "../service/CreateUserService";

class CreateUserController {

    async handle(request: Request, response: Response, next) {
        const {
            name,
            email,
            admin
        } = request.body;

        try {
            const createUserService = new CreateUserService();
            const user = await createUserService.execute({
                name, email, admin
            });
            return response.json(user);
        } catch (e) {
            return next(e);
        }
    
    }
}

export { CreateUserController };