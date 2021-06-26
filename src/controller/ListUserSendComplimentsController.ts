import { Request, Response } from "express";
import { ListUserSenderComplimentsService } from "../service/ListUserSendComplimentsService";

class ListUserSendComplimentsController {
    async handle(req: Request, resp: Response) {
        const { user_id } = req;
        const listUserSendComplimentsService = new ListUserSenderComplimentsService();
        const compliments = await listUserSendComplimentsService.execute(user_id);
        return resp.json(compliments);
    }
}

export { ListUserSendComplimentsController };