import { v4 } from "uuid"

export class generateId {

    generatedId = ():string => v4();
}