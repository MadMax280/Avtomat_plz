import { Doctor } from 'src/doctor/entities/doctor.entity';
export declare class Record {
    id: number;
    name: string;
    surName: string;
    lastName: string;
    snils: string;
    doctorId: number;
    time: Date;
    createdAt: Date;
    doctor: Doctor;
}
