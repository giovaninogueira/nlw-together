import { Request, Response } from "express";
import { ListUserService } from "../service/ListUsersService";

class ListUserController {
    async handle(req: Request, resp: Response) {
        const listUserService = new ListUserService();
        const users = await listUserService.execute();
        return resp.json(users);
    }
}
export { ListUserController };