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

function create_guitar_string(
  startingNote: string,
  stringLength: number
): string[] {
  let res: string[] = [startingNote];

  for (let i = 0; i < stringLength - 1; i++) {
    let last_note: string = res[res.length - 1];
    let next_note = note_mapping.get(last_note);
    if (next_note) {
      res.push(next_note);
    }
  }

  return res;
}

const strings = ["E", "A", "D", "G", "B", "E"];

const FretBoard = function () {
  return (
    <div className="guitar">
      <table className="table table-dark table-bordered equal-width-table">
        <style>{`.equal-width-table td {width: 1%;}`}</style>
        {strings.map(function (val, index) {
          return (
            <thead>
              <tr key={index}>
                {create_guitar_string(val, 12).map(function (fret_val) {
                  return <td className="text-center">{fret_val}</td>;
                })}
              </tr>
            </thead>
          );
        })}
      </table>
    </div>
  );
};

export default FretBoard;
