import { Record } from 'src/record/entities/record.entity';
export declare class Doctor {
    id: number;
    name: string;
    surName: string;
    lastName: string;
    image: string;
    description: string;
    type: string;
    record: Record[];
}
