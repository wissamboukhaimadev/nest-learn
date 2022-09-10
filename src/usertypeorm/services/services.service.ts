import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../typeorm';
import { Repository } from 'typeorm';
import { CreateUserTypeOrmDto } from '../dtos/createUser.dto';
import {encryptPassword} from '../../utils/bcrypt';

@Injectable()
export class UserTypeOrmService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) { }

    getAllUsers() {
        return this.userRepository.find()
    }

    createUser(user: CreateUserTypeOrmDto) {
        const password = encryptPassword(user.password)
        console.log(password)
        const newUser = this.userRepository.create({ ...user, password })
        return this.userRepository.save(newUser)
    }

    findByUsername(username: string) {
        return this.userRepository.findOne({
            where: {
                username
            }
        })
    }
}
