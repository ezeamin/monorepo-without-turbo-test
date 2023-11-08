import type { FormSchemas } from 'form-schemas';
import type { Control } from 'react-hook-form';

export type AnyProp = Record<string, unknown>;

export interface DataTestId {
  dti: string | undefined;
}

export interface FormHandling<T extends FormSchemas> {
  control: Control<T>;
  name: keyof T;
}
