const TableHeader = ({ children, ypadding, colSpan, rowSpan }) => {
  return (
    <th
      rowSpan={rowSpan || 1}
      colSpan={colSpan || 1}
      scope="col"
      className={
        ypadding
          ? "px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
          : "px-6 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
      }
    >
      {children}
    </th>
  );
};
export default TableHeader;
