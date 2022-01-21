export enum USER_ROLES {
   GUEST = "GUEST",
   ADMIN = "ADMIN"
}

export interface authenticationData {
   id: string
   role: USER_ROLES
}

export interface user extends authenticationData {
   email: string
   password:string
}