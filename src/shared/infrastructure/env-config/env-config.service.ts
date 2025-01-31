import { Injectable } from '@nestjs/common';
import { EnvConfigServiceProps } from './env-config.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvConfigService implements EnvConfigServiceProps {
  constructor(private readonly configService: ConfigService) {}
  getAppPort(): number {
    const appPort = Number(this.configService.get<number>('PORT'));
    return appPort;
  }
  getNodeEnv(): string {
    const nodeEnv = String(this.configService.get<string>('NODE_ENV'));
    return nodeEnv;
  }
}
