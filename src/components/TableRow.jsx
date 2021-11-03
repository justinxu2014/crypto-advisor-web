const TableRow = ({ content }) => {
  return (
    <tr className="divide-x divide-gray-200">
      <td className="overflow-hidden px-6 py-4 whitespace-nowrap">
        <div className="flex justify-center text-sm text-gray-800">
          {content.name}
        </div>
      </td>
      {content?.content.map((colData) => (
        <td
          className="overflow-hidden px-6 py-4 whitespace-nowrap"
          key={colData.id}
        >
          <div className="flex justify-center text-sm text-gray-800">
            {colData.data}
          </div>
        </td>
      ))}
    </tr>
  );
};
export default TableRow;
