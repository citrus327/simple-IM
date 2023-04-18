import { Link } from "react-router-dom";

const Guide = () => {
  return (
    <div>
      <div>
        <h1 className="font-bold text-lg mb-2">Links</h1>
        <ul className="space-y-3">
          <li>
            <Link
              to="/login"
              className="text-blue-600 underline underline-offset-2"
            >
              login
            </Link>
          </li>
          <li>
            <Link
              to="/chat"
              className="text-blue-600 underline underline-offset-2"
            >
              chat
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Guide };
