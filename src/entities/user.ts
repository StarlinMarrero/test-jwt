import { compareSync, genSaltSync, hashSync } from 'bcrypt';
import {BaseEntity, BeforeInsert, Column, Entity, PrimaryGeneratedColumn} from 'typeorm';


@Entity("User")
export class User extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    userName: string

    @Column()
    password: string


    @BeforeInsert()
    HashPassword(){

        const salt = genSaltSync(10);

        this.password = hashSync(this.password, salt);

    }

    ComparePassword(password: string):boolean{

        return compareSync(password, this.password);
    }

}

