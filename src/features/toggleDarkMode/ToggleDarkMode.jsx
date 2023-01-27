import "./toggleDarkMode.css";
import { useDispatch } from "react-redux";
import { toggleDarkMode } from "./toggleDarkModeSlice";
import { toast } from "react-toastify";
import { useState } from "react";

export default function ToggleDarkMode() {
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleDarkMode());
  };

  const [darkModeClicked, setDarkModeClicked] = useState(false);

  function darkModeInfo() {
    if (!darkModeClicked) {
      toast.info("This button is not for dark mode, btw.");
      setDarkModeClicked(true);
    }
  }

  return (
    <div>
      <input type="checkbox" id="darkMode" onChange={toggle} />
      <label htmlFor="darkMode" className="label" onClick={darkModeInfo} >
        <span>🌙</span>
        <span>☀️</span>
        <div className="ball"></div>
      </label>
    </div>
  );
}
