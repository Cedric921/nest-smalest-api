import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { MongooseModule } from '@nestjs/mongoose';
import keys from './config/keys';

@Module({
  imports: [MongooseModule.forRoot(keys.MONGO_URI), TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
