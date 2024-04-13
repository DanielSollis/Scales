import Table from "react-bootstrap/Table";

const strings = ["E", "A", "D", "G", "B", "E"].reverse();

const stringLength = 12;

const half = 1;
const whole = 2;
const scalePattern = new Map<string, number[]>([
  ["Major", [whole, whole, half, whole, whole, whole, half]],
  ["Minor", [whole, half, whole, whole, half, whole, whole]],
]);

interface props {
  root: string;
  currentScale: string;
}

const FretBoard = function (props: props) {
  const scale = scalePattern.get(props.currentScale) as number[];

  return (
    <Table bordered variant="dark">
      {strings.map(function (string) {
        return (
          <thead>
            <tr>
              {guitarString(string, stringLength).map(function (note) {
                return (
                  <td className="text-center" width="1%">
                    {scaleNotes(props.root, scale) ? note : ""}
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

function scaleNotes(root: string, scalePattern: number[]) {
  const notes = [root];
  for (let i = 0; i < scalePattern.length; i++) {
    const first = noteMapping.get(notes[notes.length - 1]);
    if (first) {
      if (scalePattern[i] === 1) {
        notes.push(first);
      } else {
        const second = noteMapping.get(first);
        if (second) {
          notes.push(second);
        }
      }
    }
  }
  return new Set(notes);
}

function guitarString(string: string, stringLength: number): string[] {
  const startingNote = noteMapping.get(string);
  if (startingNote) {
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
  let res: string[] = [];
  return res;
}

export default FretBoard;
