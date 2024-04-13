import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const scales = ["Major", "Minor", "Major Pentatonic", "Minor Pentatonic"];

const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];

interface props {
  scale: string;
  setScale: React.Dispatch<React.SetStateAction<string>>;
  root: string;
  setRoot: React.Dispatch<React.SetStateAction<string>>;
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

  return (
    <div style={{ display: "flex" }}>
      <Dropdown>
        <Dropdown.Toggle variant="secondary">{props.root}</Dropdown.Toggle>
        <Dropdown.Menu>
          {notes.map(function (note) {
            return (
              <Dropdown.Item onClick={onNoteSelect(note)}>{note}</Dropdown.Item>
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
  );
};

export default ScaleDropdown;
