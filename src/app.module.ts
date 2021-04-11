import { Module } from '@nestjs/common';
import { DatabaseModule } from 'common/database/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BussModule } from './bus/buss.module';
import { CamionsModule } from './camions/camions.module';


import { CarsModule } from './cars/cars.module';
import { ClientsModule } from './clients/clients.module';
import { ClientsService } from './clients/clients.service';
import { CommandsModule } from './commands/commands.module';
import { MotosModule } from './moto/moto.module';
import { PiècesModule } from './pièce/pièce.module';
import { UsersModule } from './user/user.module';


@Module({
  imports: [
    DatabaseModule,
    CarsModule,
    MotosModule,
    BussModule,
    CamionsModule,
    ClientsModule,
    CommandsModule,
    PiècesModule,
    UsersModule,
    AuthModule,
    
    
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
