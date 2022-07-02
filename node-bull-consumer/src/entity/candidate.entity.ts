import { PrimaryColumn, Column, Entity, OneToMany, JoinColumn } from 'typeorm';
import { Vote } from './vote.entity';
@Entity()
export class Candidate {
    
    @PrimaryColumn()
    partyNumber: number;

    @Column()
    name: string;

    @Column()
    photo: string;

    @OneToMany(() => Vote, (vote) => vote.partyNumber, { cascade: true })
    @JoinColumn({ name: 'partyNumber'})
    votes: Vote[]
}