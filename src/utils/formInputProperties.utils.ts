import { InputProps } from '../types/InputProps.type';

export const inputPropsAreEquals = (prevProps: InputProps, nextProps: InputProps) => {
  return prevProps.params.updateId === nextProps.params.updateId;
}