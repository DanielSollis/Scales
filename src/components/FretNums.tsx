import Table from "react-bootstrap/Table";

interface props {
  stringLength: number;
}

const FretNums = function (props: props) {
  const numbers = [...Array(props.stringLength)];

  return (
    <Table bordered>
      {numbers.map(function (_, fretInx) {
        return (
          <td className="text-center" width="1%">
            {fretInx + 1}
          </td>
        );
      })}
    </Table>
  );
};

export default FretNums;
