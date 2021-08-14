import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CollaboratorsService } from './collaborators.service';
import { Collaborator } from './dto/collaborator';

@Controller('collaborators')
export class CollaboratorsController {
    constructor(private collaboratorService: CollaboratorsService){}

    @Get()
    async getAll(): Promise<Collaborator[]>{
        return this.collaboratorService.getAll();
    }

    @Get(':id')
    async getByID(@Param('id') id: string): Promise<Collaborator>{
        return this.collaboratorService.getByID(id);
    }

    @Post()
    async create(@Body() Collaborator: Collaborator): Promise<Collaborator>{
        return this.collaboratorService.create(Collaborator);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() Collaborator: Collaborator): Promise<Collaborator>{
        return this.collaboratorService.update(id, Collaborator);
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        return this.collaboratorService.delete(id);
    }
}
