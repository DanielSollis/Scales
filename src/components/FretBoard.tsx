import Table from "react-bootstrap/Table";

const note_mapping = new Map<string, string>([
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
    const nextNote = note_mapping.get(lastNote);
    if (nextNote) {
      res.push(nextNote);
    }
  }

  return res;
}

const strings = ["E", "A", "D", "G", "B", "E"];
const stringLength = 12;

const FretBoard = function () {
  return (
    <Table bordered variant="dark">
      {strings.map(function (string) {
        return (
          <thead>
            <tr>
              {guitarString(string, stringLength).map(function (fret) {
                return (
                  <td className="text-center" width="1%">
                    {fret}
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
