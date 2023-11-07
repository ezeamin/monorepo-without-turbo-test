'use client';

import { TextInput } from 'ui';
import { useZodForm } from 'hooks';
import { exampleSchema } from 'form-schemas/schemas/new_folder_each_app/exampleSchema';

const Form = (): JSX.Element => {
  const { control } = useZodForm(exampleSchema);

  return (
    <form>
      <TextInput
        control={control}
        dti='prueba'
        label='Texto'
        name='resolution'
      />
    </form>
  );
};
export default Form;
