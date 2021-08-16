import { Injectable, PreconditionFailedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project } from "./dto/project";
import { ProjectDocument } from './schemas/project.schema';


@Injectable()
export class ProjectsService {
    
    constructor(@InjectModel(Project.name) private readonly projectModel: Model<ProjectDocument>){}

    async getAll(){
        return await this.projectModel.find().exec();
    }

    async getById(id: string){
        return await this.projectModel.findById(id).exec();
    }

    async create(project: Project){
        const createdProject = new this.projectModel(project);
        if(createdProject.endDate && createdProject.endDate < createdProject.beginDate){
            throw new PreconditionFailedException();
        }
        return await createdProject.save();
    }

    async update(id: string, project: Project){
        const updatedProject = new this.projectModel(project);
        if(updatedProject.endDate && updatedProject.endDate < updatedProject.beginDate){
            throw new PreconditionFailedException();
        }
        await this.projectModel.updateOne({_id: id}, project).exec();
        return this.projectModel.findById(id);
    }

    async delete(id: string){
        return await this.projectModel.deleteOne({_id: id}).exec();
    }

}
