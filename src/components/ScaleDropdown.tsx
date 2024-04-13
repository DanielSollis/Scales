import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const scales = ["Major", "Minor"];

const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];

interface props {
  currentScale: string;
  setCurrentScale: React.Dispatch<React.SetStateAction<string>>;
  root: string;
  setRoot: React.Dispatch<React.SetStateAction<string>>;
}

const ScaleDropdown = function (props: props) {
  const onScaleSelect = function (scale: string) {
    return function () {
      props.setCurrentScale(scale);
    };
  };

  const onNoteSelect = function (root: string) {
    return function () {
      props.setRoot(root);
    };
  };

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="dark">{props.root}</Dropdown.Toggle>
        <Dropdown.Menu>
          {notes.map(function (note) {
            return (
              <Dropdown.Item onClick={onNoteSelect(note)}>{note}</Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle variant="dark">{props.currentScale}</Dropdown.Toggle>
        <Dropdown.Menu>
          {scales.map(function (scale, _) {
            return (
              <Dropdown.Item onClick={onScaleSelect(scale)}>
                {scale}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default ScaleDropdown;
