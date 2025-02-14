import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class loginDto{
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email:string

    @IsString()
    @IsNotEmpty()
    password:string

}

export class registerDto{
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email:string

    @IsString()
    @IsNotEmpty()
    password:string

    @IsString()
    @IsNotEmpty()
    userName:string
}