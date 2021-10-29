const MarketTable = ({ categories, content }) => {
  return (
    <table
      style={{
        border: "1px solid black",
        borderCollapse: "collapse",
        textAlign: "center",
        tableLayout: "fixed",
        width: "100%",
        minWidth: "490px",
      }}
    >
      <thead>
        <tr style={{ backgroundColor: "#6002ee", color: "#FAFAFA" }}>
          <th style={{ padding: "5px" }} colSpan={categories.length * 2 + 1}>
            Market Prices
          </th>
        </tr>
        <tr>
          <th
            style={{
              border: "1px solid black",
            }}
            rowspan="2"
          >
            Market
          </th>
          {categories.map((category) => (
            <th style={{ border: "1px solid black" }} colspan="2">
              {category}($)
            </th>
          ))}
        </tr>
        <tr
          style={{
            border: "1px solid black",
          }}
        >
          {categories.map(() => [
            <th style={{ border: "1px solid black" }}>Buy</th>,
            <th style={{ border: "1px solid black" }}>Sell</th>,
          ])}
        </tr>
      </thead>
      <tbody>
        {content.map((rowData) => (
          <tr style={{ border: "1px solid black" }}>
            {rowData.map((cellData) => (
              <td
                style={{
                  border: "1px solid black",
                  padding: "10px",
                }}
              >
                {cellData}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default MarketTable;
