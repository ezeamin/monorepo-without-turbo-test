'use client';

import { TextInput, DateInput } from 'ui';
import { useZodForm } from 'hooks';
import { exampleSchema } from 'form-schemas/schemas/new_folder_each_app/exampleSchema';

import { DTI, DTI_LIST } from 'dti';

const Form = (): JSX.Element => {
  const { control } = useZodForm(exampleSchema);

  return (
    <form>
      <TextInput
        control={control}
        dti={DTI(DTI_LIST.FORM.RESOLUTION)}
        label='Texto'
        name='resolution'
      />
      <DateInput control={control} dti={DTI(DTI_LIST.FORM.DATE)} label='Fecha' name='date' />
    </form>
  );
};
export default Form;
