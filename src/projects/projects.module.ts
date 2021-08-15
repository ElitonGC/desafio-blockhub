import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsController } from './projects.controller';
import { ProjectSchema } from './schemas/project.schema';
import { ProjectsService } from './projects.service';
import { Project } from './dto/project';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Project.name, schema: ProjectSchema}])
    ],
    controllers: [ProjectsController],
    providers: [ProjectsService]
})
export class ProjectsModule {}
