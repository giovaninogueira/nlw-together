import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsReposutories";

class CreateTagService {
    async execute(name: string) {
        const tagsRepositories = getCustomRepository(TagsRepositories);
        
        if (!name) {
            throw new Error('Incorrect name!');
        }

        // select * from tags where name = $name
        const tagAlreadyExists = await tagsRepositories.findOne({
            name
        });

        if (tagAlreadyExists) {
            throw new Error('Tag exists!');
        }

        const tag = tagsRepositories.create({
            name
        });

        return await tagsRepositories.save(tag);
    }
}

export { CreateTagService };