import { ASTNode } from 'graphql';

export interface CustomScalar<T, C> {
  description: string;

  parseValue(value: any): T;
  parseLiteral(ast: ASTNode): T;
  serialize(value: T): C;
}
