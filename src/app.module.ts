import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TYPEORM_MAIN, NODE_ENV } from '@environments';
import { CacheService } from './config';
import { Doctor } from './doctor/entities/doctor.entity';
import { DoctorModule } from './doctor/doctor.module';
import { RecordModule } from './record/record.module';
import { Record } from './record/entities/record.entity';

@Module({
  imports: [
    CacheModule.registerAsync({
      useClass: CacheService,
    }),
    TypeOrmModule.forRoot({
      ...TYPEORM_MAIN,
      synchronize: NODE_ENV === 'production' ? false : true,
      entities: [Doctor, Record],
    }),
    DoctorModule,
    RecordModule,
  ],
  // controllers: [AppController],
})
export class AppModule {}
