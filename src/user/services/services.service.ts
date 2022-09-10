import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializeCreateCustomer, User } from './types/User';

@Injectable()
export class ServicesService {
    private users: User[] = [
        {
            username: "wissam",
            password: "wissam",
        },
        {
            username: "jkjdk",
            password: "asdjjs",
        },
        {
            username: "lklsklkd",
            password: "kskldk",
        },
        {
            username: "aksldkk",
            password: "kslkdkk",
        },
    ]

    getAllUser() {
        return this.users.map(user => plainToClass(SerializeCreateCustomer, user))
    }
    getSingleUser(username:string){
        return this.users.find(user=>user.username===username)
    }
}
