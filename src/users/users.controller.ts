import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { User } from './dto/user';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService){}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAll(): Promise<User[]>{
        return this.userService.getAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getByID(@Param('id') id: string): Promise<User>{
        return this.userService.getByID(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() user: User) : Promise<User> {
        return this.userService.create(user);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async update(@Param('id') id: string, @Body() user: User): Promise<User> {
        return this.userService.update(id, user);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: string){
        this.userService.delete(id);    
    }

}
