import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';
import { RegisterUserDto } from './dto';
import { UserModel } from './models/user.model';
import { USER_MODEL } from './models/user.model.token';
import { Optional } from '../common/types';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersRepository {
  constructor(@InjectModel(USER_MODEL) private readonly userModel: UserModel) {}

  async create(registerUserDto: RegisterUserDto): Promise<User> {
    const createdUser = new this.userModel(registerUserDto);

    return await createdUser.save();
  }

  async findOneById(id: string): Promise<Optional<User>> {
    return await this.userModel.findById(id).exec();
  }

  async findOneByLogin(login: string): Promise<Optional<User>> {
    return await this.userModel.findOne({ login }).exec();
  }

  async findUserWithPasswordByLogin(login: string): Promise<Optional<User>> {
    return this.userModel
      .findOne({ login })
      .select('password')
      .exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, updateUserDto);
  }

  async remove(id: string): Promise<User> {
    return this.userModel.findByIdAndRemove(id);
  }
}
