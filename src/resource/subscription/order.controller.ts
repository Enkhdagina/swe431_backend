import { Body, Controller, Delete, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrderService } from './order.service';
import { OrderDto } from './order.dto';
import { AuthGuard } from 'src/guard/auth.guard';


@Controller('order')
@ApiTags("Order")
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
