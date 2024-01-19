import { ConfigService } from '@nestjs/config';

export class S3EasyUse {
  constructor(private readonly config: ConfigService) {}
}
