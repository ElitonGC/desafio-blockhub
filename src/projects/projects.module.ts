import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsController } from './projects.controller';
import { ProjectSchema } from './schemas/project.schema';
import { ProjectsService } from './projects.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Project', schema: ProjectSchema}])
    ],
    controllers: [ProjectsController],
    providers: [ProjectsService]
})
export class ProjectsModule {}
