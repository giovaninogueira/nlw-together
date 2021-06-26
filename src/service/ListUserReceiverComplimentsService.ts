import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UserRepositories } from "../repositories/UserRepositories";

class ListUserReceiverComplimentsService {
    async execute (user_id: string) {
        const comlimentsRepositories = getCustomRepository(ComplimentsRepositories);
        const compliments = await comlimentsRepositories.find({
            where: {
                user_receiver: user_id
            },
            relations: [
                'userSender',
                'userReceiver',
                'tag'
            ]
        });
        return compliments;
    }
}

export { ListUserReceiverComplimentsService };