import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import useSingleDocument from '../../hooks/useSingleDocument';
import InputRender from '../Inputs/InputRender';
import Loader from '../Loader/Loader';

export default function DocumentPreview() {
  const { id = '' } = useParams<{ id?: string }>();

  const { data, loading, error } = useSingleDocument(id);

  if (loading) {
    return <Loader />
  }
  if (error) {
    return <div className="text-red-500"> Error: {error.message} </div>
  }

  const { documentName, fields } = data || {};

  const sortedFields = useMemo(() => {
    if (!fields || fields.length === 0) return [];
    return [...fields].sort((a, b) => a.field_seq - b.field_seq);
  }, [fields]);

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4"> { documentName} </h1>
      <form>
       <InputRender sortedFields={sortedFields}/>
      </form>
    </section>
  )
}