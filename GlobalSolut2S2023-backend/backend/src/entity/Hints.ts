import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
@Entity()
export class Hints{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    description: string;
    @Column({
        default: false
    })
    liked: boolean;
    @CreateDateColumn()
    create_at: Date;
    @UpdateDateColumn()
    updated_at: Date;
}