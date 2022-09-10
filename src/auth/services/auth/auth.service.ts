import { Injectable } from '@nestjs/common';
import { compareHashs, encryptPassword } from '../../../utils/bcrypt';
import { UserTypeOrmService } from '../../../usertypeorm/services/services.service';


@Injectable()
export class AuthService {

    constructor(private readonly userService: UserTypeOrmService) { }
    async validateUser(username: string, password: string) {
        const userDB = await this.userService.findByUsername(username)
        if (userDB) {
            console.log(password)
            const matchPass = compareHashs(password, userDB.password)
            if (matchPass) {

                console.log('user Authorized')
                return userDB;
            }else{
                console.log('password not match')
            }
        }
        console.log('user UnAuthorized')
        return null
    }
}
