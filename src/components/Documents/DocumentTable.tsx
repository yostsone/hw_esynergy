import DocumentTableRows from './DocumentTableRows';

export default function DocumentTable() {
  return (
      <div className="relative overflow-x-auto rounded-base border border-default">
        <table className="w-full text-sm text-left rtl:text-right text-body">
          <thead className="bg-neutral-secondary-soft border-b border-default">
          <tr>
            <th scope="col" className="px-6 py-3 font-medium uppercase">
              Id
            </th>
            <th scope="col" className="px-6 py-3 font-medium uppercase">
              Document Title
            </th>
            <th scope="col" className="px-6 py-3 font-medium uppercase">
              Created Date
            </th>
            <th scope="col" className="px-6 py-3 font-medium uppercase">
              Document Size
            </th>
            <th scope="col" className="px-6 py-3 font-medium uppercase">
              Action
            </th>
          </tr>
          </thead>
          <DocumentTableRows />
        </table>
      </div>
  )
}