import { SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { User } from "../shared/user";


export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);