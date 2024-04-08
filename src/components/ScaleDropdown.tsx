import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";

const scales = ["C Major", "D Minor", "E Minor"];

const ScaleDropdown = function () {
  const [scaleIndex, setScaleIndex] = useState(0);

  const onSelect = function (index: number) {
    return function () {
      setScaleIndex(index);
    };
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="dark">{scales[scaleIndex]}</Dropdown.Toggle>

      <Dropdown.Menu>
        {scales.map(function (val, index) {
          return <Dropdown.Item onClick={onSelect(index)}>{val}</Dropdown.Item>;
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ScaleDropdown;
