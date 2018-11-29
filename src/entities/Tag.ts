import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Tag {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  name: string;
}