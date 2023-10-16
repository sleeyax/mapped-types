import { Type } from './types/common';

export interface MappedType<T> extends Type<T> {
  new (): T;
}
