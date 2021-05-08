import { Module } from '@nestjs/common';
import { DatabaseModule } from 'common/database/database.module';
import { All_VehiclesModule } from './All_Vehicles/All_vehicles.module';
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
import { VehiclesModule } from './vehicle/vehicle.module';


@Module({
  imports: [
    DatabaseModule,
    All_VehiclesModule,
  /*CarsModule,
    MotosModule,
    BussModule,
    CamionsModule,
    ClientsModule,
    CommandsModule,*/
    PiècesModule,
    UsersModule,
    AuthModule,
    VehiclesModule
    
    
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
