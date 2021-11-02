import styled from "styled-components";

const MarketTable = ({ categories, content }) => {
  return (
    <TableContainer>
      <thead>
        <TitleRow>
          <th colSpan={categories.length * 2 + 1}>Market Prices</th>
        </TitleRow>
        <tr>
          <th rowspan="2">Market</th>
          {categories.map((category) => (
            <th colspan="2">{category}($)</th>
          ))}
        </tr>
        <tr>{categories.map(() => [<th>Buy</th>, <th>Sell</th>])}</tr>
      </thead>
      <tbody>
        {content.map((rowData) => (
          <tr>
            {rowData.map((cellData) => (
              <td>{cellData}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </TableContainer>
  );
};
export default MarketTable;

const TableContainer = styled.table({
  border: "1px solid black",
  borderCollapse: "collapse",
  textAlign: "center",
  tableLayout: "fixed",
  width: "100%",
  minWidth: "490px",

  tr: {
    border: "1px solid black",
  },
  th: {
    border: "1px solid black",
  },
  td: {
    border: "1px solid black",
    padding: "10px",
  },
});
const TitleRow = styled.tr({
  backgroundColor: "#6002ee",
  color: "#FAFAFA",
  th: { padding: "5px" },
});
