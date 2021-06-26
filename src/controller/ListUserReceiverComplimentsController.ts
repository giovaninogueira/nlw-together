import { Request, Response } from "express";
import { ListUserReceiverComplimentsService } from "../service/ListUserReceiverComplimentsService";

class ListUserReceiverComplimentsController {
    async handle(req: Request, resp: Response) {
        const { user_id } = req;
        const listUserReceiverComplimentsService = new ListUserReceiverComplimentsService();
        const compliments = await listUserReceiverComplimentsService.execute(user_id);
        return resp.json(compliments);
    }
}

export { ListUserReceiverComplimentsController };