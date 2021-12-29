import { RecordService } from './record.service';
export declare class RecordController {
    private readonly recordService;
    constructor(recordService: RecordService);
    createRecord(dto: {
        name: string;
        surName: string;
        lastName: string;
        snils: string;
        doctorId: number;
        time: string;
    }): Promise<import("./entities/record.entity").Record>;
    findAll(): Promise<void>;
}
