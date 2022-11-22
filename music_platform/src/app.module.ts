/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
@Module({
  controllers: [AppController]
})
export class AppModule {
}
