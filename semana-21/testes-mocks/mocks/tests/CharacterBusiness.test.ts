import { CharacterBusiness } from "../src/CharacterBusiness"
import { Character } from "../src/model/Character"

describe("Aula 63", () => {

    test("2. a) Crie um teste que verifique o comportamento da função com um personagem com o nome vazio, isto é, '' ", () => {

        expect(new CharacterBusiness().validateCharacter({
            name: "",
            life: 1500,
            defense: 850,
            power: 400
        })).toEqual(false)

    })

    test("2. Crie um teste que verifique o comportamento da função com um personagem com a vida igual a zero ", () => {

        expect(new CharacterBusiness().validateCharacter({
            name: "Armando",
            life: 0,
            defense: 850,
            power: 400
        })).toEqual(false)

    })

    test("2. c) Crie um teste que verifique o comportamento da função com um personagem com a força igual a zero ", () => {

        expect(new CharacterBusiness().validateCharacter({
            name: "Armando",
            life: 1500,
            defense: 850,
            power: 0
        })).toEqual(false)

    })

    test("2. d) Crie um teste que verifique o comportamento da função com um personagem com a defesa igual a zero ", () => {

        expect(new CharacterBusiness().validateCharacter({
            name: "Armando",
            life: 1500,
            defense: 0,
            power: 400
        })).toEqual(false)

    })

    test("2. e. Crie um teste que verifique o comportamento da função com um personagem com a vida ou a força ou a defesa com um valor negativo", () => {

        expect(new CharacterBusiness().validateCharacter({
            name: "Armando",
            life: 1500,
            defense: 850,
            power: -400
        })).toEqual(false)

    })

    test("2.f. Crie um teste que verifique o comportamento da função com um personagem com as informações validas", () => {

        expect(new CharacterBusiness().validateCharacter({
            name: "Armando",
            life: 1500,
            defense: 50,
            power: 400
        })).toEqual(true)

    })

    test("a. Faça um teste com dois personagens com valores válidos, em que o defensor perca 200 pontos de vida. Verifique o estado final das personagens. Sobre a função mockada, verifique se ela foi chamada, o número de vezes em que ela foi chamada, quantas vezes ela retornou.", () => {
        const validatorMockTrue = jest.fn(() => {
            return true;
        });

        const attacker: Character = {
            name: "Attacker",
            life: 1500,
            defense: 200,
            power: 600,
        };

        const defender: Character = {
            name: "Defender",
            life: 1500,
            defense: 400,
            power: 800,
        };

        new CharacterBusiness().performAttack2(attacker, defender, validatorMockTrue as any);

        expect(defender.life).toEqual(1300); // perdeu 200 pontos
        expect(validatorMockTrue).toHaveBeenCalled(); // verifica se foi chamada
        expect(validatorMockTrue).toHaveBeenCalledTimes(2); // verifica o número de vezes que foi chamada // chamada para o attacker e defender
        expect(validatorMockTrue).toHaveReturnedTimes(2); // quantas vezes ela retornou // retornou true para o attacker e defender
    });

    test("b. Faça um teste com um dos personagens com alguma informação inválida. Verifique a mensagem de erro. Sobre a função mockada, verifique se ela foi chamada, o número de vezes em que ela foi chamada, o que ela retornou e quantas vezes ela retornou", () => {
        expect.assertions(4);
        const validatorMock = jest.fn(() => {
            return false;
        });

        const attacker: Character = {
            name: "Attacker",
            life: 1500,
            defense: 200,
            power: -40,
        };

        const defender: Character = {
            name: "Defender",
            life: 1500,
            defense: 400,
            power: 800,
        };

        try {
            new CharacterBusiness().performAttack2(attacker, defender, validatorMock as any);
        } catch (error) {
            console.log("ERRRRRRRROOOOOORRRRRR", error)
            expect(error.message).toBe("Invalid character");
            expect(validatorMock).toHaveBeenCalled();
            expect(validatorMock).toHaveBeenCalledTimes(1);
            expect(validatorMock).toHaveReturnedTimes(1);
        }
    });

})