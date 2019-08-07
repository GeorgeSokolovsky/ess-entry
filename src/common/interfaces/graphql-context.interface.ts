import { User } from '../schema/graphql.schema';

export interface GraphQLContext {
  user: User;
}
