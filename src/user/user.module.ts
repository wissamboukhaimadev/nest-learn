import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UserController } from './user.controller';
import { ServicesService } from './services/services.service';
import { ValidateCustomer } from '../middleware/validate-customer.middleware';

@Module({
  controllers: [UserController],
  providers: [ServicesService]
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidateCustomer).forRoutes({
      path: '/user',
      method: RequestMethod.GET,
    })
  }
}
