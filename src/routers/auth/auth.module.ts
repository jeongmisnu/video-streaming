import { UniqueNum } from '@app/common/entities/uniqueNum.entity';
import { User } from '@app/common/entities/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([User, UniqueNum]), JwtModule],
  providers: [AuthService],
  exports: [AuthModule],
})
export class AuthModule {}
