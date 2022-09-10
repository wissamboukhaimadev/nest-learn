import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"

export class CreateUserTypeOrmDto {
    @IsNotEmpty()
    @IsString()
    username: string

    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @MinLength(8)
    password: string

    constructor(partial:Partial<CreateUserTypeOrmDto>){
        Object.assign(this, partial)
    }

}