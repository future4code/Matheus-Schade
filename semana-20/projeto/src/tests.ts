import { Authenticator } from "./services/authenticator"
import { HashManager } from "./services/hashManager"
import { IdGenerator } from "./services/idGenerator"

const id = new IdGenerator().generate()

const hashPass = new HashManager().createHash("123456")

const token = new Authenticator().generateToken({ id })

console.log({ id, hashPass, token })
