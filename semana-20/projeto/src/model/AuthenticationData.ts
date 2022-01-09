import { USER_ROLES } from "./user";

export interface AuthenticationData {
    id: string | undefined,
    // role: USER_ROLES
}

export interface Token {
    token: string
}