import { useState } from "react";
type DynamicField = {
  id: number;
  name: string;
  title: string;
  type: number;
  fields: [];
  options?: string[];
};
const initialFields = [{ id: 0, title: '', name: '', type: 0, options: [], fields: [] }];
export default function DocumentCreate() {
  const [fields, setFields] = useState<DynamicField[]>(initialFields);

  function addField(type: number) {
   // to do: implement adding dynamic fields
  }

  return (
      <div>
        <form>
          <input type="text" placeholder="Document Title" className="border border-gray-300 rounded p-2 mb-4 w-full" />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
          <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded">Add more</button>
        </form>
      </div>
  )
}