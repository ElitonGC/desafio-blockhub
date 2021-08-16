import { Injectable, PreconditionFailedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Relationship } from './dto/relationship';

@Injectable()
export class RelationshipService {
    constructor(@InjectModel(Relationship.name) private readonly relationshipModel: Model<Relationship>){}

    async getAll(){
        return await this.relationshipModel.find().exec();
    }

    async getById(id: string){
        return await this.relationshipModel.findById(id).exec();
    }

    async create(relationship: Relationship){
        const createRelationship = new this.relationshipModel(relationship);
        const conflictVerify =  await this.conflictVerify(createRelationship, "");
        if(conflictVerify || createRelationship.endDate < createRelationship.beginDate){
            throw new PreconditionFailedException();
        }
        return await createRelationship.save();
    }

    async update(id: string, relationship: Relationship){
        const updatedRelationship = await this.relationshipModel.findById(id);
        updatedRelationship.beginDate = relationship.beginDate;
        updatedRelationship.endDate = relationship.endDate;
        const conflictVerify =  await this.conflictVerify(updatedRelationship, id);
        if(conflictVerify || updatedRelationship.endDate < updatedRelationship.beginDate){
            throw new PreconditionFailedException();
        }
        await this.relationshipModel.updateOne({_id: id}, relationship).exec();
        return this.relationshipModel.findById(id);
    }

    async delete(id: string){
        return await this.relationshipModel.deleteOne({_id: id}).exec();
    }

    async conflictVerify(relationship: Relationship, updatedId: string){
        const conflict = await this.relationshipModel.find({
            idProject: relationship.idProject, 
            idCollaborator: relationship.idCollaborator
        }).exec();
        if(conflict){
            for (let index = 0; index < conflict.length; index++) {
                const element = conflict[index];
                if(element.id !== updatedId){
                    if((relationship.beginDate >= element.beginDate && relationship.beginDate <= element.endDate) ||
                       (relationship.endDate >= element.beginDate && relationship.endDate <= element.endDate) ||
                       (relationship.beginDate <= element.beginDate && relationship.endDate >= element.endDate)){
                        return true;
                    }
                }
            }
        }

        return false;
    }

}
