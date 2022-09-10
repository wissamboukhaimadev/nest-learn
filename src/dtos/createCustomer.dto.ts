import {  IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateCustomer{
    @IsNumber()
    id:number
    @IsEmail()
    email:string
    @IsString()
    name:string
    @IsNotEmpty()
    @IsString()
    password:string


}