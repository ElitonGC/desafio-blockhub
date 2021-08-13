import { Injectable } from '@nestjs/common';
import { takeLast } from 'rxjs';
import { Project } from './project';

@Injectable()
export class ProjectsService {
    projects: Project[] = [
        {id: 1, name: 'Teste 1', description: 'descrição 1', beginDate: new Date('01-01-2020'), endDate: new Date('12-31-2020'), active: false},
        {id: 2, name: 'Teste 2', description: 'descrição 2', beginDate: new Date('01-02-2020'), endDate: new Date('12-31-2020'), active: false},
        {id: 3, name: 'Teste 3', description: 'descrição 3', beginDate: new Date('01-03-2020'), endDate: new Date('12-31-2020'), active: false},
    ];

    getAll(){
        return this.projects;
    }

    getById(id: number){
        const project = this.projects.find((value) => value.id == id);
        return project;
    }

    create(project: Project){
        let lastId = 0;
        if(this.projects.length > 0){
            lastId = this.projects[this.projects.length - 1].id;
        }
        project.id = lastId + 1;
        this.projects.push(project);

        return project;
    }

    update(project: Project){
        const projectArray = this.getById(project.id);
        if(projectArray){
            projectArray.name = project.name;
            projectArray.description = project.description;
            projectArray.beginDate = project.beginDate;
            projectArray.endDate = project.endDate;
            projectArray.active = project.active;
        }

        return projectArray;
    }

    delete(id: number){
        const index = this.projects.findIndex((value) => value.id == id);
        this.projects.splice(index, 1);
    }

}
