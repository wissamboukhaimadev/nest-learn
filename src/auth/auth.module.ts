import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../typeorm';
import { UserTypeOrmService } from '../usertypeorm/services/services.service';
import { AppService } from '../app.service';
import { AuthController } from './auth.controller';
import { AuthService } from './services/auth/auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './utils/LocalStrategy';

@Module({
  imports:[TypeOrmModule.forFeature([User]),PassportModule],
  controllers: [AuthController],
  providers:[AppService, AuthService,UserTypeOrmService,LocalStrategy]
})
export class AuthModule {}
