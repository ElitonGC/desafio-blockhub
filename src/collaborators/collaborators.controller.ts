import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { CollaboratorsService } from './collaborators.service';
import { Collaborator } from './dto/collaborator';

@ApiBearerAuth()
@ApiTags('collaborator')
@Controller('collaborators')
export class CollaboratorsController {
    constructor(private collaboratorService: CollaboratorsService){}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAll(): Promise<Collaborator[]>{
        return this.collaboratorService.getAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getByID(@Param('id') id: string): Promise<Collaborator>{
        return this.collaboratorService.getByID(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() Collaborator: Collaborator): Promise<Collaborator>{
        return this.collaboratorService.create(Collaborator);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async update(@Param('id') id: string, @Body() Collaborator: Collaborator): Promise<Collaborator>{
        return this.collaboratorService.update(id, Collaborator);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: string){
        return this.collaboratorService.delete(id);
    }
}
