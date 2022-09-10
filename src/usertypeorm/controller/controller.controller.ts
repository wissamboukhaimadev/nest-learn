import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserTypeOrmDto } from '../dtos/createUser.dto';
import { UserTypeOrmService } from '../services/services.service';

@Controller('users')
export class ControllerController {

    constructor( private userTypeOrm:UserTypeOrmService){}

    @Get('')
    getAllUsers(){
        return this.userTypeOrm.getAllUsers()
    }

    @UsePipes(ValidationPipe)
    @Post('create')
    createUser( @Body() createUser:CreateUserTypeOrmDto ){
        return this.userTypeOrm.createUser(createUser)
    }

}
