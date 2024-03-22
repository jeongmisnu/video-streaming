import { UniqueNum } from '@app/common/entities/uniqueNum.entity';
import { User } from '@app/common/entities/user.entity';
import { UserInfo } from '@app/common/interfaces/loginUserInfo';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(UniqueNum)
    private readonly uniqueNumRepository: Repository<UniqueNum>,
  ) {}

  async getUserInfo(token: string): Promise<UserInfo> {
    const result: UserInfo = {
      id: '',
      email: '',
      nickname: '',
      nicknameNum: 0,
    };
    const getInfo = this.jwtService.decode(token);
    const findUser: any = await this.userRepository
      .createQueryBuilder('u')
      .select([
        'u.id AS id',
        'u.email AS email',
        'un.num AS nicknameNum',
        'u.password AS password',
        'u.nickname AS nickname',
      ])
      .leftJoin(UniqueNum, 'un')
      .where('u.email=:email', { email: getInfo.email })
      .getOne();

    result.email = findUser.password;
    result.id = findUser.id;
    result.nickname = findUser.nickname;
    result.nicknameNum = findUser.nicknameNum;

    return result;
  }
}
