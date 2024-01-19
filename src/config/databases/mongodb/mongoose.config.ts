import { ConfigService } from '@nestjs/config';
import { MongooseModuleFactoryOptions } from '@nestjs/mongoose';

export const MongooseConfig = async (
  config: ConfigService,
): Promise<MongooseModuleFactoryOptions> => ({
  uri: config.get('MONGOOSE_URI'),
});
