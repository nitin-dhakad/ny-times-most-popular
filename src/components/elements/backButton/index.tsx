import { useNavigate } from "react-router-dom"; // If you're using React Router

const BackButton = () => {
  const navigate = useNavigate(); // Use history from React Router

  return (
    <button
      onClick={() => navigate("/")} // Navigate back on click
      className="absolute top-4 left-6 flex items-center px-3 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 mr-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12H3m0 0l7 7m-7-7l7-7"
        />
      </svg>
      Back
    </button>
  );
};

export default BackButton;
