import { Exclude } from "class-transformer"

export interface User {
    username:string
    password:string
}

export class SerializeCreateCustomer{
    username:string
    @Exclude()
    password:string

    constructor(partial: Partial<SerializeCreateCustomer>){
        Object.assign(this, partial)
    }
}