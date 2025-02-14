import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { loginDto, registerDto } from './auth.dto';
import * as argon from 'argon2'
@Injectable()
export class AuthService {
        constructor(private prisma: PrismaService){}


        async login(dto:loginDto){
            const user = await this.prisma.user.findUnique({
                where:{email:dto.email}
            })
            if(!user){
                return "user doesnt exist"
            }

            if(await argon.verify(user.hashedPwd,dto.password)){

                return `welcome ${user.userName}`

            }

            return "WRONG GET OUT";
        }

        async register(dto:registerDto){
            const user = await this.prisma.user.findUnique({
                where:{email:dto.email}
            })
            if(user){
                return "user already exists"
            }
            const hashedPwd = await argon.hash(dto.password)
            const data = {
                email:dto.email,
                userName:dto.userName,
                hashedPwd:hashedPwd
            }
            

            return await this.prisma.user.create({
                data
            })
        }

}
