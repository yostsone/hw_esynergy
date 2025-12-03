export type Document = {
  id: number;
  document_name: string;
  created_at: string;
  field_count: number;
}

export type Field = {
  id: number;
  field_seq: number
  is_mandatory: 1 | 0;
  field_type: 1 | 2 | 3 ;
  field_name: string
  document_id: number;
  select_values: null | selectValue[];
}

export type selectValue = {
  value: string | number | boolean;
  label: string;
}