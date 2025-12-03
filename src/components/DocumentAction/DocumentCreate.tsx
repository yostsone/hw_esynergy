import { useState, useRef } from 'react';
import type { Field } from '../../types';

const fieldInputOptions = [
  { value: 1, label: 'Input' },
  { value: 2, label: 'Select' },
  { value: 3, label: 'NumberInput' }
]

const defaultField = { id: 1, field_seq: 1, is_mandatory: 1, field_type: fieldInputOptions, field_name: '', select_values: []};

export default function DocumentCreate() {
  // const [fields, setFields] = useState<Field[] | []>([]);
  // const fieldSeqRef = useRef(1);
  // const fieldIdRef = useRef(1);
  //
  // function addField() {
  //   setFields(prevFields => [
  //       ...prevFields, {
  //         ...defaultField,
  //         field_seq: fieldSeqRef.current++,
  //         id: fieldIdRef.current++,
  //       }
  //   ])
  //  // to do: implement adding dynamic fields
  // }
  //
  // return (
  //     <div>
  //       <form>
  //         <input type="text" placeholder="Document Title" className="border border-gray-300 rounded p-2 mb-4 w-full" />
  //         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
  //           Save
  //         </button>
  //         <button
  //             type="button"
  //             className="bg-blue-500 text-white px-4 py-2 rounded"
  //             onClick={addField}
  //         >
  //           Add more
  //         </button>
  //       </form>
  //     </div>
  // )
}