import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";

const scales = ["C Major", "D Minor", "E Minor"];

const ScaleDropdown = function () {
  const [scaleIndex, setScaleIndex] = useState(0);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        {scales[scaleIndex]}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {scales.map(function (val) {
          return <Dropdown.Item>{val}</Dropdown.Item>;
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ScaleDropdown;
