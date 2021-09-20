import { UserRepository } from "../business/user/UserRepository";
import { User } from "../model/User";
import { SQLBaseData } from "./SQLBaseData";

export class SQLUserDatabase extends SQLBaseData implements UserRepository{
    private static TABLE_NAME = "labook_users"

    create = async(
        newUser: User
    ):Promise<void> => {
        await this.getConnection().insert({
            id: newUser.getId(),
            name: newUser.getName(),
            email: newUser.getEmail(),
            password: newUser.getPassword()
        }).into(SQLUserDatabase.TABLE_NAME);
    };

    findUserByEmail = async( 
        email: string
    ):Promise<User> => {
        const result = await this.getConnection()
            .select()
            .from(SQLUserDatabase.TABLE_NAME)
            .where({ email });

        return User.toUserModel(result[0]);
    };
};