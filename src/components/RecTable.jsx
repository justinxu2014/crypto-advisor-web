import styled from "styled-components";

const RecTable = ({ content }) => {
  return (
    <TableContainer>
      <thead>
        <TitleRow>
          <th colSpan="3">Recommendations</th>
        </TitleRow>
        <tr>
          <th>Symbol</th>
          <th>Buy</th>
          <th>Sell</th>
        </tr>
      </thead>
      <tbody>
        {content.map((rowData) => (
          <tr>
            {rowData.map((cellData) => (
              <td> {cellData} </td>
            ))}
          </tr>
        ))}
      </tbody>
    </TableContainer>
  );
};
export default RecTable;

const TableContainer = styled.table({
  border: "1px solid black",
  borderCollapse: "collapse",
  textAlign: "center",
  tableLayout: "fixed",
  minWidth: "240px",
  width: "100%",

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
