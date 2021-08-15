import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './dto/user';
import { UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>){}

    async getAll(){
        return await this.userModel.find().exec();
    }
    
    async getByID(id: string){
        return await this.userModel.findById(id).exec();
    }

    async getByUserName(userName: string){
        return await this.userModel.findOne({userName}).exec();
    }

    async create(user: User){
        const createdUser = new this.userModel(user);
        return await createdUser.save();
    }

    async update(id: string, user: User){
        await this.userModel.updateOne({_id: id}, user).exec();
        return this.userModel.findById(id);
    }

    async delete(id: string){
        return await this.userModel.deleteOne({_id: id}).exec();
    }

}