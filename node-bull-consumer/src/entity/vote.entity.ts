import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';
import { Candidate } from './candidate.entity';
@Entity()
export class Vote {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    partyNumber: number;

    @ManyToOne(() => Candidate)
    @JoinColumn({ name: 'partyNumber'})
    candidate: Candidate;
}