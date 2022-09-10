import { ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Param, UseInterceptors } from '@nestjs/common';
import { ServicesService } from './services/services.service';
import { SerializeCreateCustomer } from './services/types/User';

@Controller('user')
export class UserController {

    constructor(private userService:ServicesService){}
    @Get('')
    getAllUsers(){
        return this.userService.getAllUser()
    }
    @UseInterceptors(ClassSerializerInterceptor)
    @Get('/:username')
    getSingleUser( @Param('username') username:string ){
        const user=this.userService.getSingleUser(username)
        if(user) return new SerializeCreateCustomer(user)
        else return new HttpException('user Not Found',HttpStatus.FORBIDDEN)
    }
}
