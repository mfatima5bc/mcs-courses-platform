import { Module } from '@nestjs/common';
import { HttpModule } from './http/http.module';
import { DatabaseModule } from './database/database.module';
import { MessagingModule } from './messaging/messaging.module';

@Module({
  imports: [HttpModule, DatabaseModule, MessagingModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
