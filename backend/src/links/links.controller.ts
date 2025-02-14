import { Controller,Post,Body,Param,Get,Res, Redirect } from '@nestjs/common';
import { shortLink } from './links.dto';
import { LinksService } from './links.service';
import { Response } from '@nestjs/common';

@Controller('links')
export class LinksController {
    constructor(private linkService:LinksService){}

    @Post("short")
    async short(@Body() dto:shortLink){

        return await this.linkService.short(dto);


        

    }
    @Redirect()
    @Get("l/:id")
    async link(@Param('id') id: string){
        return this.linkService.Getlink(id);
        
    }




}
