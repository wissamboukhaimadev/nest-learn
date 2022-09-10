import { Body, Controller, Get, Post, Req, Session, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";
import { AppService } from "../app.service";
import { CreateCustomer } from "../dtos/createCustomer.dto";

@Controller('auth')
export class AuthController {
    constructor(private authService:AppService) {}
    @Post('create')
    @UsePipes(ValidationPipe)
    createCustomer(@Body() createCustomer:CreateCustomer) {
        return this.authService.addUser()
    }


    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Req() req:Request){}

    @Get('')
    async getAllSessions( @Session() session:Record<string,any> ){
        console.log(session.id)
    }
}
