import Table from "react-bootstrap/Table";

const strings = ["E", "A", "D", "G", "B", "E"].reverse();

const [half, whole, WholeAndHalf] = [1, 2, 3];
const scalePattern = new Map<string, number[]>([
  ["Major", [whole, whole, half, whole, whole, whole, half]],
  ["Minor", [whole, half, whole, whole, half, whole, whole]],
  ["Major Pentatonic", [whole, whole, WholeAndHalf, whole, WholeAndHalf]],
  ["Minor Pentatonic", [WholeAndHalf, whole, whole, WholeAndHalf, whole]],
]);

interface props {
  root: string;
  scale: string;
  stringLength: number;
}

const FretBoard = function (props: props) {
  const scaleSteps = scalePattern.get(props.scale) as number[];
  const fretNumbers = [...Array(props.stringLength)];

  return (
    <div>
      <Table bordered variant="dark">
        {strings.map(function (string) {
          const currentString = getNotesInString(string, props.stringLength);
          return (
            <thead>
              <tr>
                {currentString.map(function (note) {
                  const notesInScale = getNotesInScale(props.root, scaleSteps);
                  return (
                    <td
                      className="text-center light"
                      style={{
                        backgroundColor: props.root === note ? "blue" : "",
                        width: "1%",
                      }}
                    >
                      {notesInScale.has(note) ? note : ""}
                    </td>
                  );
                })}
              </tr>
            </thead>
          );
        })}
      </Table>

      <Table bordered>
        {fretNumbers.map(function (_, index) {
          return (
            <td className="text-center" width="1%">
              {index + 1}
            </td>
          );
        })}
      </Table>
    </div>
  );
};

const nextNoteMap = new Map<string, string>([
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

function getNotesInString(string: string, stringLength: number): string[] {
  const startingNote = nextNoteMap.get(string) as string;
  let res = [startingNote];

  for (let i = 0; i < stringLength - 1; i++) {
    const lastNote = res[res.length - 1];
    const nextNote = nextNoteMap.get(lastNote) as string;
    res.push(nextNote);
  }
  return res;
}

function getNotesInScale(root: string, scaleSteps: number[]) {
  const notes = [root];

  for (let i = 0; i < scaleSteps.length; i++) {
    let nextnote = notes[notes.length - 1];
    for (let step = 0; step < scaleSteps[i]; step++) {
      nextnote = nextNoteMap.get(nextnote) as string;
    }
    notes.push(nextnote);
  }
  let result = new Set(notes);
  return result;
}

export default FretBoard;
