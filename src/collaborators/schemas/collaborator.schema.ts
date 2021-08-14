import { SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Collaborator } from "../dto/collaborator";

export type CollaboratorDocument = Collaborator & Document;

export const CollaboratorSchema = SchemaFactory.createForClass(Collaborator);