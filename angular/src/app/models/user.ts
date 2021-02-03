export interface User {
    email:string;
    password:string;
}
interface Token {
    token: string
}

export interface TokenPaylaod {
    id: number
    username: string
    password: string
}