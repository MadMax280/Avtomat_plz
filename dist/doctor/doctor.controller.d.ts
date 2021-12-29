import { DoctorService } from './doctor.service';
export declare class DoctorController {
    private readonly doctorService;
    constructor(doctorService: DoctorService);
    findAll(): Promise<import("./entities/doctor.entity").Doctor[]>;
    findOne(id: string): Promise<import("./entities/doctor.entity").Doctor>;
}
