import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project } from "./dto/project";


@Injectable()
export class ProjectsService {
    
    constructor(@InjectModel('Project') private readonly projectModel: Model<Project>){}

    async getAll(){
        return await this.projectModel.find().exec();
    }

    async getById(id: string){
        return await this.projectModel.findById(id).exec();
    }

    async create(project: Project){
        const createdProject = new this.projectModel(project);
        return await createdProject.save();
    }

    async update(id: string, project: Project){
        await this.projectModel.updateOne({_id: id}, project).exec();
        return this.projectModel.findById(id);
    }

    async delete(id: string){
        return await this.projectModel.deleteOne({_id: id}).exec();
    }

}
