import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import entities from './typeorm';
import { UserModule } from './user/user.module';
import { UsertypeormModule } from './usertypeorm/usertypeorm.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'wissam',
      database: 'typeormPost',
      entities,
      synchronize: true,

    }),
    UsertypeormModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
