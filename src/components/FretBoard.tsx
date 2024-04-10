import Table from "react-bootstrap/Table";

const noteMapping = new Map<string, string>([
  ["E", "F"],
  ["F", "F#"],
  ["F#", "G"],
  ["G", "G#"],
  ["G#", "A"],
  ["A", "A#"],
  ["A#", "B"],
  ["B", "C"],
  ["C", "C#"],
  ["C#", "D"],
  ["D", "D#"],
  ["D#", "E"],
]);

function guitarString(startingNote: string, stringLength: number): string[] {
  let res: string[] = [startingNote];

  for (let i = 0; i < stringLength - 1; i++) {
    const lastNote = res[res.length - 1];
    const nextNote = noteMapping.get(lastNote);
    if (nextNote) {
      res.push(nextNote);
    }
  }

  return res;
}

const strings = ["E", "A", "D", "G", "B", "E"];
const stringLength = 12;

const scales = [
  new Set(["A", "B", "C", "D", "E", "F", "G"]),
  new Set(["D", "E", "F", "G", "A", "A#", "C"]),
  new Set(["E", "F♯", "G", "A", "B", "C", "D"]),
];

interface props {
  scaleIndex: number;
}

const FretBoard = function (props: props) {
  return (
    <Table bordered variant="dark">
      {strings.map(function (string) {
        return (
          <thead>
            <tr>
              {guitarString(string, stringLength).map(function (note) {
                return (
                  <td className="text-center" width="1%">
                    {scales[props.scaleIndex].has(note) ? note : " "}
                  </td>
                );
              })}
            </tr>
          </thead>
        );
      })}
    </Table>
  );
};

export default FretBoard;
