import { Character } from "./model/Character";

export class CharacterBusiness {

    // 1. b)

    validateCharacter = (input: Character): boolean => {
        if (
            !input.name ||
            input.life === undefined ||
            input.power === undefined ||
            input.defense === undefined ||
            input.life <= 0 ||
            input.power <= 0 ||
            input.defense <= 0) {
            return false;
        }
        return true;
    }

    // 3. a)

    performAttack = (attacker: Character, defender: Character) => {
        if (!this.validateCharacter(attacker) || !this.validateCharacter(defender)) {
            throw new Error("Invalid character");
        }

        if (attacker.power > defender.defense) {
            defender.life -= attacker.power - defender.defense;
        }
    }

    //3. b)

    performAttack2 = (
        attacker: Character,
        defender: Character,
        validator: (input: Character) => boolean
    ) => {
        if (!validator(attacker) || !validator(defender)) {
            throw new Error("Invalid character");
        }

        if (attacker.power > defender.defense) {
            defender.life -= attacker.power - defender.defense;
        }
    }

    // 3.c) Enquanto na primeira eu preciso chamar uma função dentro de outra, inviabilizando um teste unitário,
    // na segunda eu recebo o mock dessa função por parâmetro, tornando possível a testagem;

    // 4.a) Devemos criar um mock da função validateCharacter, já que ela originalmente seria chamada dentro de performAttack
    // e posteriormente passada como parâmetro;



}