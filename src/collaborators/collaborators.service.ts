import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Collaborator } from './dto/collaborator';

@Injectable()
export class CollaboratorsService {
    
    constructor(@InjectModel('Collaborator') private readonly collaboratorModel: Model<Collaborator>){}

    async getAll(){
        return await this.collaboratorModel.find().exec();
    }

    async getByID(id: string){
        return await this.collaboratorModel.findById(id).exec();
    }

    async create(collaborator: Collaborator){
        const createdCollaborator = new this.collaboratorModel(collaborator);
        return createdCollaborator.save();
    }

    async update(id: String, collaborator: Collaborator){
        await this.collaboratorModel.updateOne({_id:id}, collaborator).exec();
        return this.collaboratorModel.findById(id);
    }

    async delete(id: string){
        return this.collaboratorModel.deleteOne({_id:id}).exec();
    }
}
