import { Link } from 'react-router-dom';
import { useDocuments } from '../../hooks/useDocuments';
import { isoToReadableDate } from '../../utils/formatHelpers';
import TableRowLoader from '../Loader/TableRowLoader';

export default function DocumentTableRows() {
  const { data = [], loading, error } = useDocuments();

  if (error)  {
    return (
        <tbody>
        <tr>
          <td className="px-6 py-4 text-center">
            { error.message }
          </td>
        </tr>
        </tbody>
    )
  }
  if (loading)  {
    return (
      <tbody>
        <TableRowLoader className="col-span-5" />
      </tbody>
    )
  }

  if (!data || !data.length) {
    return (
      <tbody>
        <tr>
          <td className="px-6 py-4 text-center">
            No documents found.
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody>
      {data.map((document) => (
        <tr key={document.id} className="odd:bg-neutral-200 even:bg-neutral-secondary-soft border-b border-default">
          <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
            {document.id}
          </th>
          <td className="px-6 py-4">
            {document.document_name}
          </td>
          <td className="px-6 py-4">
            {isoToReadableDate(document.created_at)}
          </td>
          <td className="px-6 py-4">
            {document.field_count}
          </td>
          <td className="px-6 py-4">
            <Link to={`/document/${document.id}`} className="font-medium text-fg-brand hover:underline">
              Document preview
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  )
}