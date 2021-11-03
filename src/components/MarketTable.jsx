import TableRow from "./TableRow";

const MarketTable = ({ categories, content }) => {
  return (
    <div className="w-full">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-300 sm:rounded-lg">
            <table className="table-fixed w-full min-w-310px divide-y divide-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th
                    scope="col"
                    rowspan="2"
                    className="px-6 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Market
                  </th>
                  {categories.map((category) => (
                    <th
                      colSpan="2"
                      scope="col"
                      className="px-6 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {category}
                    </th>
                  ))}
                </tr>
                <tr>
                  {categories.map(() => [
                    <th className="px-6 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Buy
                    </th>,
                    <th className="px-6 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Sell
                    </th>,
                  ])}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-300">
                {content.map((rowData) => (
                  <TableRow content={rowData} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MarketTable;
