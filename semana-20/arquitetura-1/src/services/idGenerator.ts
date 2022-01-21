import { v4 } from "uuid"

export class IdGenerator {

    generatedId = (): string => v4();

}