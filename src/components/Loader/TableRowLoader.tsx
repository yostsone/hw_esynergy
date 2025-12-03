import Loader from './Loader';

interface TableLoadingRowProps {
  className?: string;
}

/**
 * Loader to show loading effect inside the table and keep valid HTML structure
 * @param className
 * @constructor
 */
export default function TableRowLoader({ className = "" }: TableLoadingRowProps) {
  return (
      <tr>
        <td className={`px-6 py-4 text-center ${className}`}>
          <Loader />
        </td>
      </tr>
  );
}