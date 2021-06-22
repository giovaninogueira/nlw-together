import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories"


interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class CreateUserService {
    async execute({ name, email, admin }: IUserRequest) {
        const userRepository = getCustomRepository(UserRepositories);

        const userAlreadyExists = await userRepository.findOne({
            email: email
        });

        if (!email) {
            throw new Error('Email incorrect');
        }

        if (userAlreadyExists) {
            throw new Error('User alredy exists');
        }

        const user = userRepository.create({
            name,
            email,
            admin
        });

        await userRepository.save(user);
        return user;
    }
}

export { CreateUserService }