import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ButtonBack = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate(-1);
      }}
      className="flex items-center space-x-1 text-neutral-300"
    >
      <FaArrowLeft size={18} />
      <span className="text-neutral-500 text-sm font-medium">Go Back</span>
    </button>
  );
};

export default ButtonBack;
