import { Repository } from 'typeorm';
import { CreateRecordDto } from './dto/create-record.dto';
import { Record } from './entities/record.entity';
export declare class RecordService {
    private recordRepository;
    constructor(recordRepository: Repository<Record>);
    create(createRecordDto: CreateRecordDto): Promise<Record>;
    findAll(): Promise<void>;
}
