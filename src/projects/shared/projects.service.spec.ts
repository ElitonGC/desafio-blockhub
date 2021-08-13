import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsService } from './projects.service';

describe('ProjectsService', () => {
  let provider: ProjectsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectsService],
    }).compile();

    provider = module.get<ProjectsService>(ProjectsService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
