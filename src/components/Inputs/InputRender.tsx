import type { Field } from '../../types';
import { Link } from 'react-router-dom';
import InputField from './InputField';

export default function InputRender({ sortedFields }: { sortedFields: Field[] }) {
  return (
    <>
      {sortedFields.map((field) => {
        const { field_type ,field_name, select_values = [], is_mandatory } = field;
        const inputType = field_type ?? 1;
        const required = is_mandatory === 1;

        return (
          <div key={field.field_seq} className="mb-4">
            <label className="block text-sm font-medium mb-1">
              {field_name}
              {required ? <span className="text-red-500 ml-1">*</span> : null}
            </label>
            <InputField InputFieldProps={{ type: inputType, label: field_name, options: select_values, readonly: true }} />
          </div>
        );
      })}
      <Link to={"/"} className="text-blue-500 text-sm mt-1 inline-block">
        Back
      </Link>
    </>
  );
}