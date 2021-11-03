import TableRow from "./TableRow";
import TableHeader from "./TableRowHeader";

const MarketTable = ({ categories, content }) => {
  return (
    <div className="w-full">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-300 sm:rounded-lg">
            <table className="table-fixed w-full min-w-310px divide-y divide-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <TableHeader rowSpan="2">Market</TableHeader>
                  {categories.map((category) => (
                    <TableHeader key={category} colSpan="2">
                      {category}
                    </TableHeader>
                  ))}
                </tr>
                <tr>
                  {categories.map(() => [
                    <TableHeader key="Buy">Buy</TableHeader>,
                    <TableHeader key="Sell">Sell</TableHeader>,
                  ])}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-300">
                {content.map((rowData) => (
                  <TableRow key={rowData.name} content={rowData} />
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
