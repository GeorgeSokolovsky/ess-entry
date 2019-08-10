import { ID } from '../../common/types';

export interface TemplatePatch {
  updatedBy: ID;
  name?: string;
  fields?: ID[];
  participants?: ID[];
}
