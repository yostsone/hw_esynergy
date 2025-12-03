import type { selectValue} from '../../types';
// TODO reuse Field type here
type InputFieldProps =  {
  type: 1 | 2 | 3;
  label: string;
  options: null | selectValue[];
  readonly: boolean
}
export default function InputField({ InputFieldProps }: InputFieldProps) {
  const { type, label, options, readonly } = InputFieldProps;
  switch (type) {
    case 2:
      return (
        <select
            name={label}
            className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
        >
          {options.length === 0 ? (
            <option value="">—</option>
          ) : (
            options.map((opt, i) => (
              <option key={i} value={opt.value}>
                {opt.label}
              </option>
            ))
          )}
        </select>
      );
    case 3:
      return (
        <input
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            name={label}
            className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
            readOnly={readonly}
        />
      )
    default:
      // For not all other options will be text inputs
      return (
        <input
            name={label}
            className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
            readOnly={readonly}
        />
      )
  }
}