import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(session({
    secret: 'HJKEHRFJKWHEJKFHJKWHKFHKJKLEDHFJKAJDJDK',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60000,

    }
  }))
  await app.listen(4000);
}
bootstrap();
