import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Project } from './dto/project';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {

    constructor(private projectService: ProjectsService){}

    @Get()
    async getAll() : Promise<Project[]> {
        return this.projectService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string) : Promise<Project> {
        return this.projectService.getById(id);
    }    

    @Post()
    async create(@Body() project: Project) : Promise<Project> {
        return this.projectService.create(project);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() project: Project): Promise<Project> {
        return this.projectService.update(id, project);
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        this.projectService.delete(id);    
    }

}
