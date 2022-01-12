

import { UserBusiness } from "../src/business/UserBusiness"
import { User } from "../src/model/user"

describe("Exercício 2", () => {

    // a. Faça um teste com um usuário com o saldo maior do que o valor de compra;
    
    test("Letra A", () => {

        let user: User = {
            name: "Fulano de Tal",
            balance: 500
        }

        expect(new UserBusiness().verifyBalance(user, 50)).toEqual({
            name: "Fulano de Tal",
            balance: 450
        })

    })

    // c. Faça um teste com um usuário com o saldo menor do que o valor de compra;

    test("Letra A", () => {

        let user: User = {
            name: "Fulano de Tal",
            balance: 500
        }

        expect(new UserBusiness().verifyBalance(user, 1500)).toEqual(undefined)

    })

    // b. Faça um teste com um usuário com o saldo igual ao valor de compra;

    test("Letra A", () => {

        let user: User = {
            name: "Fulano de Tal",
            balance: 500
        }

        expect(new UserBusiness().verifyBalance(user, 50)).toEqual({
            name: "Fulano de Tal",
            balance: 450
        })

    })

})



