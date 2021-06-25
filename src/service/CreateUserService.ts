import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories"

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string;
}

class CreateUserService {
    async execute({ name, email, admin = false, password }: IUserRequest) {
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

        const passwordHash = await hash(password, 8);

        const user = userRepository.create({
            name,
            email,
            admin,
            password: passwordHash
        });

        await userRepository.save(user);
        return user;
    }
}

export { CreateUserService }