import { Request, response, Response } from "express";
import { ListTagsService } from "../service/ListTagsServices";

class ListTagsController {
    async handle(req: Request, resp: Response) {
        const listTagsService = new ListTagsService();
        const tags = await listTagsService.execute();
        return resp.json(tags);
    }
}

export { ListTagsController };