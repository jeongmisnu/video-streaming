import { UniqueNum } from '@app/common/entities/uniqueNum.entity';
import { User } from '@app/common/entities/user.entity';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const PostgresConfig = async (
  config: ConfigService,
): Promise<TypeOrmModuleOptions> => ({
  type: 'postgres',
  host: config.get('POSTGRES_HOST'),
  port: +config.get('POSTGRES_PORT'),
  username: config.get('POSTGRES_USERNAME'),
  password: config.get('POSTGRES_PASSWORD'),
  database: config.get('POSTGRES_DATABASE'),
  entities: [User, UniqueNum],
  synchronize: true,
});
