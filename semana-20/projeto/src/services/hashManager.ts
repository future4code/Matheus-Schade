import { compareSync, genSaltSync, hashSync } from "bcryptjs"

export class HashManager {

    createHash = (plainText: string): string => {
        const cost: number = 12 //parâmetro que define o tempo para execução do algoritmo // quanto mais tempo, mais seguro, porém mais lento // padrão entre 10 e 12
        const salt: string = genSaltSync(cost)
        const cypherText: string = hashSync(plainText, salt)

        console.log({ salt, cypherText })

        return cypherText
    }

    compareHash = (plainText: string, cypherText: string): boolean => {
        return compareSync(plainText, cypherText)
    }
}