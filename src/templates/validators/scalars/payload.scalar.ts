import { Scalar } from '@nestjs/graphql';
import { ASTNode, Kind } from 'graphql';
import { isString, isNumber } from 'lodash';
import { CustomScalar } from '../../../common/interfaces';
import { Payload } from '../types';

@Scalar('Payload')
export class PayloadScalar implements CustomScalar<Payload, Payload> {
  readonly description = 'Represents payload for validator at event template';

  serialize(value: Payload): Payload {
    return value;
  }

  parseValue(value: any): Payload {
    return isString(value) || isNumber(value) ? value : null;
  }

  parseLiteral(ast: ASTNode): Payload {
    switch (ast.kind) {
      case Kind.STRING:
        return ast.value;
      case Kind.INT:
        return parseInt(ast.value, 10);
      case Kind.FLOAT:
        return parseFloat(ast.value);
      default:
        return null;
    }
  }
}
