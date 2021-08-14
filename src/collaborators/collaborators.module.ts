import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CollaboratorSchema } from './schemas/collaborator.schema';
import { CollaboratorsService } from './collaborators.service';
import { CollaboratorsController } from './collaborators.controller';


@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Collaborator', schema: CollaboratorSchema}])
    ],
    controllers: [CollaboratorsController],
    providers: [CollaboratorsService]
})
export class CollaboratorsModule {}
