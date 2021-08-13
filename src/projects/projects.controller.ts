import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Project } from './shared/project';
import { ProjectsService } from './shared/projects.service';

@Controller('projects')
export class ProjectsController {

    constructor(private projectService: ProjectsService){}

    @Get()
    async getAll() : Promise<Project[]> {
        return this.projectService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: number) : Promise<Project> {
        return this.projectService.getById(id);
    }    

    @Post()
    async create(@Body() project: Project) : Promise<Project> {
        return this.projectService.create(project);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() project: Project): Promise<Project> {
        project.id = id;
        return this.projectService.update(project);
    }

    @Delete(':id')
    async delete(@Param('id') id: number){
        this.projectService.delete(id);    
    }

}
