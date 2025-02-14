import { IsNotEmpty, IsNumber, IsUrl } from "class-validator";


export class shortLink{
    @IsNotEmpty()
    @IsUrl()
    url:string

    @IsNotEmpty()
    @IsNumber()
    userId:number
}