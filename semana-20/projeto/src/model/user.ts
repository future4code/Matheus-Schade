
export enum USER_ROLES {
   NORMAL = 'NORMAL',
   ADMIN = 'ADMIN'
}

export interface login {
   email: string
   password: string
}

export interface User extends login {
   name: string
   id?: string

}


