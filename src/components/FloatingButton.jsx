import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const FloatingButton = () => {
  const { isAdmin } = useContext(AuthContext);
  const navigate = useNavigate();
  if (!isAdmin) return null;
  return (
    <button className="floating-btn" onClick={() => navigate("/upload")}>+</button>
  );
};
export default FloatingButton;
