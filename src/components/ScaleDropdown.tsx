import Dropdown from "react-bootstrap/Dropdown";

const ScaleDropdown = function () {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-2">C Major</Dropdown.Item>
        <Dropdown.Item href="#/action-1">E Minor</Dropdown.Item>
        <Dropdown.Item href="#/action-2">D Minor</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ScaleDropdown;
