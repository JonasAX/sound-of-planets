import "./topbar.css";

const Topbar = ({ setPause, pause }) => {
  return (
    <header>
      <h1>Solar System Sounds</h1>
      <button
        onClick={() => {
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
    </header>
  );
};

export default Topbar;
