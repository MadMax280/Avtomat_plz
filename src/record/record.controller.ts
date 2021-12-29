import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { RecordService } from './record.service';

@Controller('record')
export class RecordController {
  constructor(private readonly recordService: RecordService) {}

  @Post()
  createRecord(
    @Body()
    dto: {
      name: string;
      surName: string;
      lastName: string;
      snils: string;
      doctorId: number;
      time: string;
    },
  ) {
    return this.recordService.create(dto);
  }

  @Get()
  findAll() {
    return this.recordService.findAll();
  }
}
