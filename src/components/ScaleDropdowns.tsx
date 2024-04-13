import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const scales = ["Major", "Minor", "Major Pentatonic", "Minor Pentatonic"];

const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];

interface props {
  scale: string;
  setScale: React.Dispatch<React.SetStateAction<string>>;
  root: string;
  setRoot: React.Dispatch<React.SetStateAction<string>>;
  setStringLength: React.Dispatch<React.SetStateAction<number>>;
}

const ScaleDropdown = function (props: props) {
  const onScaleSelect = function (scale: string) {
    return function () {
      props.setScale(scale);
    };
  };

  const onNoteSelect = function (root: string) {
    return function () {
      props.setRoot(root);
    };
  };

  const onStringLengthSelect = function (length: number) {
    return function () {
      props.setStringLength(length);
    };
  };

  return (
    <div style={{ paddingLeft: "10px" }}>
      <div
        style={{
          display: "flex",
          gap: "5px",
          columnGap: "5px",
          paddingBottom: "5px",
        }}
      >
        <Dropdown>
          <Dropdown.Toggle variant="secondary">{props.root}</Dropdown.Toggle>
          <Dropdown.Menu>
            {notes.map(function (note) {
              return (
                <Dropdown.Item onClick={onNoteSelect(note)}>
                  {note}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle variant="secondary">{props.scale}</Dropdown.Toggle>
          <Dropdown.Menu>
            {scales.map(function (scale) {
              return (
                <Dropdown.Item onClick={onScaleSelect(scale)}>
                  {scale}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Dropdown>
        <Dropdown.Toggle variant="secondary">String Length</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={onStringLengthSelect(12)}>Half</Dropdown.Item>
          <Dropdown.Item onClick={onStringLengthSelect(24)}>Full</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default ScaleDropdown;
