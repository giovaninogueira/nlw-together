import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticaterequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({ email, password }: IAuthenticaterequest): Promise<string> {
        const usersRepositories = getCustomRepository(UserRepositories);
        const user = await usersRepositories.findOne({
            email,
        });

        if (!user) {
            throw new Error('Email/password incorrect');
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error('Email/password incorrect');
        }

        const token = sign({
            email: user.email
        }, '12e0a9b5d7a8a534208dfa04ea4e9d47', {
            subject: user.id,
            expiresIn: "1d"
        });
        return token;
    }
}

export {
    AuthenticateUserService
};