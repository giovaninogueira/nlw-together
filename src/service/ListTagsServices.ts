import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsReposutories";
import { classToPlain } from "class-transformer";

class ListTagsService {
    async execute() {
        const tagsRepositories = getCustomRepository(TagsRepositories);
        let tags = await tagsRepositories.find();
        return classToPlain(tags);
    }
}

export { ListTagsService };