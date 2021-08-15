import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { Project } from './dto/project';
import { ProjectsService } from './projects.service';

@ApiBearerAuth()
@ApiTags('projects')
@Controller('projects')
export class ProjectsController {

    constructor(private projectService: ProjectsService){}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAll() : Promise<Project[]> {
        return this.projectService.getAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getById(@Param('id') id: string) : Promise<Project> {
        return this.projectService.getById(id);
    }    

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() project: Project) : Promise<Project> {
        return this.projectService.create(project);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async update(@Param('id') id: string, @Body() project: Project): Promise<Project> {
        return this.projectService.update(id, project);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: string){
        this.projectService.delete(id);    
    }

}
