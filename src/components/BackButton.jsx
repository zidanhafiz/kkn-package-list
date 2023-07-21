import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <div>
      <Link to="/" className="text-base font-semibold flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          viewBox="0 -960 960 960"
          width="20"
        >
          <path d="m274-450 248 248-42 42-320-320 320-320 42 42-248 248h526v60H274Z" />
        </svg>
        Go Back
      </Link>
    </div>
  );
};

export default BackButton;
