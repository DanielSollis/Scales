import { useState } from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary";
}

const Button = function ({ children, color = "primary" }: Props) {
  const [alertActive, setAlertActive] = useState(-1);

  return (
    <>
      {alertActive === 1 && (
        <div
          className="alert alert-primary"
          role="alert"
          onClick={function () {
            setAlertActive(0);
          }}
        >
          Alert!
        </div>
      )}
      <button
        className={"btn btn-" + color}
        onClick={function () {
          setAlertActive(1);
          console.log(alertActive);
        }}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
