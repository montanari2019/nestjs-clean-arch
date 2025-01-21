import { Module } from '@nestjs/common';
import { EnvConfigService } from './env-config.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [EnvConfigService],
  imports: [ConfigModule]
})
export class EnvConfigModule {}
