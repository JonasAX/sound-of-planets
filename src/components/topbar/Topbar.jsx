// import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./topbar.css";
import DarkMode from "../../features/toggleDarkMode/ToggleDarkMode.jsx" ;

const Topbar = ({ setPause, pause, setDarkMode, isPlanetClicked }) => {
  // const [darkModeClicked, setDarkModeClicked] = useState(false);
  // function darkModeInfo() {
  //   if (!darkModeClicked) {
  //     toast.info("This button is not for dark mode, btw.");
  //     setDarkModeClicked(true);
  //   }
  // }

  // function handleDarkMode(event) {
  //   if (event.target.checked) {
  //     setDarkMode("moon");
  //   } else {
  //     setDarkMode("sun");
  //   }
  // }
  return (
    <header>
      <h1>Solar System Sounds</h1>
      <button
        onClick={() => {
          if (!isPlanetClicked) {
            toast.warning("Please click on a planet first")
          }

          if (pause === undefined) {
            setPause(true);
          } else if (pause === true) {
            setPause(false);
          } else {
            setPause(true);
          }
        }}
      >
        Play/Pause
      </button>
      <ToastContainer
        icon={false}
        position="top-center"
        autoClose={5000}
        limit={2}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="colored"
      />
      <DarkMode/>
    </header>
  );
};

export default Topbar;
