import { Document } from 'mongoose';
import { Relationship } from "../dto/relationship";
import { SchemaFactory } from "@nestjs/mongoose";


export type RelationtshipDocument = Relationship & Document;

export const RelationshipSchema = SchemaFactory.createForClass(Relationship);
