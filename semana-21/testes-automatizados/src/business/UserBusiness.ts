import { User } from "../model/user"

export class UserBusiness {

    verifyBalance = (user: User, value: number): User | undefined => {
        if (user.balance >= value) {
            return {
                ...user,
                balance: user.balance - value
            }
        }
        return undefined
    }
}

