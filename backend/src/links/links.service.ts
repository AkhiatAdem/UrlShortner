import { Injectable, Redirect } from '@nestjs/common';
import { shortLink } from './links.dto';
import { PrismaService } from '../prisma/prisma.service';
import { randomUUID } from 'crypto';
import { Response } from '@nestjs/common';
@Injectable()
export class LinksService {
    constructor(private prisma: PrismaService){}



    async short(dto: shortLink){
        const shortLink = randomUUID().replace(/-/g, "").slice(0,8)

        return await this.prisma.link.create(
            {data:{
                shortLink:shortLink,
                link:dto.url,
                userId:dto.userId
            }}
        )
    }
    
    async Getlink(id:string){

        const link = await this.prisma.link.findUnique(
            {
                where:{shortLink:id}
            }
        )


        if(!link){
            return "url not found"
        }

        return { url: 'https://www.google.com', statusCode: 301 };

        



    }
}
