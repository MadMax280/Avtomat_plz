import { Repository } from 'typeorm';
import { Doctor } from './entities/doctor.entity';
export declare class DoctorService {
    private doctorRepository;
    constructor(doctorRepository: Repository<Doctor>);
    findAll(): Promise<Doctor[]>;
    findOne(id: number): Promise<Doctor>;
}
