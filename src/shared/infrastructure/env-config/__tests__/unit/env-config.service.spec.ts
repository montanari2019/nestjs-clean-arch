import { Test, TestingModule } from '@nestjs/testing';
import { EnvConfigService } from '../../env-config.service';
import { EnvConfigModule } from '../../env-config.module';

describe('EnvConfigService unit testes', () => {
  let systemUnderTest: EnvConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EnvConfigModule.forRoot()],
      providers: [EnvConfigService],
    }).compile();

    systemUnderTest = module.get<EnvConfigService>(EnvConfigService);
  });

  it('should be defined', () => {
    expect(systemUnderTest).toBeDefined();
  });

  it('should return the variable PORT', () => {
    expect(systemUnderTest.getAppPort()).toBe(2106);
  });
  it('should return the variable NODE_ENV', () => {
    expect(systemUnderTest.getNodeEnv()).toBe('test');
  });
});
