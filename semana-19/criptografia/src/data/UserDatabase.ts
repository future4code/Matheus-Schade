import knex from 'knex'
import dotenv from 'dotenv'
import { authenticationData } from '../types'
import * as jwt from "jsonwebtoken";

dotenv.config()

const userTableName = "User"
const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA,
        multipleStatements: true
    }
})

export const createNewUser = async (id: string, email: string, password: string, role: string) => {
    await connection(userTableName)
        .insert({
            id,
            email,
            password,
            role
        })
};

export const getUserByEmail = async (email: string): Promise<any> => {
    const result = await connection
        .select("*")
        .from(userTableName)
        .where({ email });

    return result[0];
}

const expiresIn = "100min";

export const getData = (token: string): authenticationData => {
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET as string) as any;
        const result = {
            id: payload.id,
            role: payload.role
        };
        return result;
    } catch (error) {
        console.log(error)
        return null
    }

};

export const getUserById = async (id: string): Promise<any> => {
    try {
        const result = await connection
            .select("*")
            .from(userTableName)
            .where({ id });

        return result[0];
    } catch (error) {
        console.log(error)
        return null
    }
}

export const deleteUserById = async (id: string): Promise<any> => {
    try {
        await connection(userTableName).delete().where({ id })

    } catch (error) {
        console.log(error)
        return null
    }
}


