import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const scales = ["C Major", "D Minor", "E Minor"];

interface props {
  scaleIndex: number;
  setScaleIndex: React.Dispatch<React.SetStateAction<number>>;
}

const ScaleDropdown = function (props: props) {
  const onSelect = function (index: number) {
    return function () {
      props.setScaleIndex(index);
    };
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="dark">
        {scales[props.scaleIndex]}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {scales.map(function (val, index) {
          return <Dropdown.Item onClick={onSelect(index)}>{val}</Dropdown.Item>;
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ScaleDropdown;
