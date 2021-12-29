import { Doctor } from 'src/doctor/entities/doctor.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('records')
@Index('FK_doctor_user', ['doctorId'], {})
export class Record {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ type: 'varchar', name: 'name', nullable: false })
  name: string;

  @Column({ type: 'varchar', name: 'surName', nullable: false })
  surName: string;

  @Column({ type: 'varchar', name: 'lastName', nullable: false })
  lastName: string;

  @Column({ type: 'varchar', name: 'snils', nullable: false })
  snils: string;

  @Column({ type: 'int', name: 'doctorId', nullable: false })
  doctorId: number;

  @Column({ type: 'time', name: 'time', nullable: false })
  time: Date;

  @CreateDateColumn({
    name: 'createdAt',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @ManyToOne(() => Doctor, (doctor) => doctor.record, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'doctorId', referencedColumnName: 'id' }])
  doctor: Doctor;
}
