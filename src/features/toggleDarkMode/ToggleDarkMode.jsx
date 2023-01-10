import "./toggleDarkMode.css";
import { useDispatch } from "react-redux";
import { toggleDarkMode } from "./toggleDarkModeSlice";
// import { toast } from "react-toastify";


export default function ToggleDarkMode() {
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleDarkMode());
  };

  // function darkModeInfo() {
  //   if (!darkModeClicked) {
  //     toast.info("This button is not for dark mode, btw.");
  //     setDarkModeClicked(true);
  //   }
  // }

  return (
    <div>
      <input type="checkbox" id="darkMode2" onChange={toggle} />
      {/* <label htmlFor="darkMode2" className="label2" onClick={darkModeInfo}> */}
      <label htmlFor="darkMode2" className="label2">
        <span>🌙</span>
        <span>☀️</span>
        <div className="ball2"></div>
      </label>
    </div>
  );
}
