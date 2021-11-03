const TableRow = ({ content }) => {
  return (
    <tr className="divide-x divide-gray-200">
      {content?.map((colData) => (
        <td className="overflow-hidden px-6 py-4 whitespace-nowrap">
          <div class="flex justify-center text-sm text-gray-800">{colData}</div>
        </td>
      ))}
    </tr>
  );
};
export default TableRow;
