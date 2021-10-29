const RecTable = ({ content }) => {
  return (
    <table
      style={{
        border: "1px solid black",
        borderCollapse: "collapse",
        textAlign: "center",
        tableLayout: "fixed",
        minwidth: "100%",
      }}
    >
      <thead>
        <tr>
          <th style={{ padding: "5px" }} colSpan="3">
            Recommendations
          </th>
        </tr>
        <tr
          style={{
            border: "1px solid black",
          }}
        >
          <th style={{ border: "1px solid black" }}>Symbol</th>
          <th style={{ border: "1px solid black" }}>Buy</th>
          <th style={{ border: "1px solid black" }}>Sell</th>
        </tr>
      </thead>
      <tbody>
        {content.map((rowData) => (
          <tr style={{ border: "1px solid black" }}>
            {rowData.map((cellData) => (
              <td style={{ border: "1px solid black", padding: "10px" }}>
                {" "}
                {cellData}{" "}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default RecTable;
