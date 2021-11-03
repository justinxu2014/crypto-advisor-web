import TableRow from "./TableRow";
import TableHeader from "./TableHeader";

const RecTable = ({ content }) => {
  return (
    <div className="w-full">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-300 sm:rounded-lg">
            <table className="table-fixed w-full min-w-310px divide-y divide-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <TableHeader ypadding={true}>Symbol</TableHeader>
                  <TableHeader ypadding={true}>Buy</TableHeader>
                  <TableHeader ypadding={true}>Sell</TableHeader>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
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
export default RecTable;
