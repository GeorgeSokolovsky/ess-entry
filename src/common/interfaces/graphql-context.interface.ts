import { User } from '@common/schema/graphql.schema';

export interface GraphQLContext {
  user: User;
}
