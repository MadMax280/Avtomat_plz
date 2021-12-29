import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRecordDto } from './dto/create-record.dto';
import { Record } from './entities/record.entity';

@Injectable()
export class RecordService {
  constructor(
    @InjectRepository(Record)
    private recordRepository: Repository<Record>,
  ) {}

  async create(createRecordDto: CreateRecordDto) {
    const record = await this.recordRepository.create(createRecordDto);
    return this.recordRepository.save(record);
  }

  async findAll() {
    const record = await this.recordRepository.find();
  }
}
