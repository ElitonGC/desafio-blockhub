import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { Relationship } from './dto/relationship';
import { RelationshipService } from './relationship.service';

@ApiBearerAuth()
@ApiTags('relationship')
@Controller('relationship')
export class RelationshipController {
    constructor(private relationshipService: RelationshipService){}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAll() : Promise<Relationship[]> {
        return this.relationshipService.getAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getById(@Param('id') id: string) : Promise<Relationship> {
        return this.relationshipService.getById(id);
    }    

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() relationship: Relationship) : Promise<Relationship> {
        return this.relationshipService.create(relationship);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async update(@Param('id') id: string, @Body() relationship: Relationship): Promise<Relationship> {
        return this.relationshipService.update(id, relationship);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: string){
        this.relationshipService.delete(id);    
    }
}
