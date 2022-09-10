import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../typeorm';
import { ControllerController } from './controller/controller.controller';
import { UserTypeOrmService } from './services/services.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([User])
  ],
  controllers: [ControllerController],
  providers: [UserTypeOrmService]
})
export class UsertypeormModule {}
