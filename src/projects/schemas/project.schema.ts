import { SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Project } from '../shared/project';

export type ProjectDocument = Project & Document;

export const ProjectSchema = SchemaFactory.createForClass(Project);