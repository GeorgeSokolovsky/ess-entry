import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from '../common/services';
import { Optional, UserToken } from '../common/types';
import { RegisterUserDto, SignInUserDto } from './dto';
import { User } from '../common/schema/graphql.schema';

@Resolver('User')
export class UsersResolvers {
  constructor(private readonly usersService: UsersService) {}

  @Query('user')
  async findUserInfo(@Args('id') id: string): Promise<Optional<User>> {
    return await this.usersService.findUserById(id);
  }

  @Query('verify')
  async verifyUserToken(@Args('token') token: string): Promise<User> {
    return await this.usersService.verifyToken(token);
  }

  @Mutation()
  async registerUser(
    @Args('registerUserInput') registerUserDto: RegisterUserDto,
  ): Promise<User> {
    return await this.usersService.registerUser(registerUserDto);
  }

  @Mutation()
  async signIn(
    @Args('signInUserInput') signInUserDto: SignInUserDto,
  ): Promise<UserToken> {
    return await this.usersService.signIn(signInUserDto);
  }
}
