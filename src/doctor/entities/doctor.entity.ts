import { Record } from 'src/record/entities/record.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('doctors')
export class Doctor {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ type: 'varchar', name: 'name', nullable: true })
  name: string;

  @Column({ type: 'varchar', name: 'surName', nullable: true })
  surName: string;

  @Column({ type: 'varchar', name: 'lastName', nullable: true })
  lastName: string;

  @Column({ type: 'text', name: 'image', nullable: true })
  image: string;

  @Column({ type: 'text', name: 'description', nullable: true })
  description: string;

  @Column({ type: 'varchar', name: 'type', nullable: true })
  type: string;

  @OneToMany(() => Record, (record) => record.doctor)
  record: Record[];
}
