import { Module } from '@nestjs/common';
import { RelationshipService } from './relationship.service';
import { RelationshipController } from './relationship.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Relationship } from './dto/relationship';
import { RelationshipSchema } from './schema/relationship.schema';

@Module({ 
    imports: [
        MongooseModule.forFeature([{ name: Relationship.name, schema: RelationshipSchema}])
    ],
    providers: [RelationshipService],
    controllers: [RelationshipController]
})
export class RelationshipModule {}
