import { Module } from '@nestjs/common';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './shared/projects.service';

@Module({
    controllers: [ProjectsController],
    providers: [ProjectsService]
})
export class ProjectsModule {}
