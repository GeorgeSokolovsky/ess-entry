import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { Optional } from '../common/types';
import { RegisterUserDto } from './dto';
import { User } from '../common/schema/graphql.schema';

@Resolver('User')
export class UsersResolvers {
  constructor(private readonly usersService: UsersService) {}

  @Query('user')
  async findUserInfo(@Args('id') id: string): Promise<Optional<User>> {
    return await this.usersService.findUserById(id);
  }

  @Mutation()
  async registerUser(
    @Args('registerUserInput') registerUserDto: RegisterUserDto,
  ): Promise<User> {
    return await this.usersService.registerUser(registerUserDto);
  }
}
