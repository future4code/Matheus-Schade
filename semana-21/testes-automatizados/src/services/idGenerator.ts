import { v4 } from "uuid"

// export const generateId = (): string => v4()



export class IdGenerator { // mesma coisa que o de cima, só que utilizando classes
    generate = () => v4()
}

// para chamar a classe acima, utilizo:::: const id = new IdGenerator().generate()