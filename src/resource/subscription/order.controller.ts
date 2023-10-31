import { Body, Controller, Post, UseGuards, Request, Delete, Get, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { OrderDto } from './order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    constructor(private service: OrderService) {
        
    }

    @UseGuards(AuthGuard)
    @Post()
    create(@Body() dto: OrderDto, @Request() {user}) {
        return this.service.create(dto, user['_id'])
    }

    @Get()
    findAll() {
        return this.service.findAll()

    }

    @Get(':id')
    findOne(@Param('id') id: string ) {
        return this.service.findOne(id)
    } 
    @UseGuards(AuthGuard)
    @Post('user')
    findUser(@Request() {user}) {
        return this.service.findUser(user['_id'])
    } 


    @Delete()
    deleteAll() {
        return this.service.deleteAll()
    }


    @Delete(':id')
    deleteOne(@Param('id') id:string) {
        return this.service.deleteOne(id)
    }
@UseGuards(AuthGuard)
    @Delete('user')
    deleteUser(@Request() {user}) {
        return this.service.deleteUser(user['_id'])
    }
}
