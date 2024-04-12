function TableRow({ coin }) {
  return (
    <tr  className="table-row">
      <td>{coin.name}</td>
      <td>{coin.symbol}</td>
      <td>{coin.current_price}</td>
    </tr>
  );
}

export default TableRow;
