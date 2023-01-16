import "./toggleDarkMode.css";
import { useDispatch } from "react-redux";
import { toggleDarkMode } from "./toggleDarkModeSlice";
// import { toast } from "react-toastify";

export default function ToggleDarkMode() {
  const dispatch = useDispatch();
  const toggle = () => {
    // window.scroll(0,0)
    dispatch(toggleDarkMode());
  };

  // function darkModeInfo() {
  //   if (!darkModeClicked) {
  //     toast.info("This button is not for dark mode, btw.");
  //     setDarkModeClicked(true);
  //   }
  // }

  // window.onload = function () {
  //   console.log("onload");

  //   const callback = (entries, observer) => {
  //     console.log(1);
  //     // document.querySelector("#sun").style.background = "pink"

  //     // entries.forEach((entry) => {
  //     //   console.log(entry);
  //     // });
  //   };
  //   const options = {
  //     root: document.body,
  //     rootMargin: "0px",
  //     threshold: 1,
  //   };
  //   const observer = new IntersectionObserver(callback, options);

  //   const sunOrMoonPlanetCard = document.querySelector("#sun");
  //   observer.observe(sunOrMoonPlanetCard);
  // };

  return (
    <div>
      <input type="checkbox" id="darkMode" onChange={toggle} />
      <label htmlFor="darkMode" className="label">
        <span>🌙</span>
        <span>☀️</span>
        <div className="ball"></div>
      </label>
    </div>
  );
}
