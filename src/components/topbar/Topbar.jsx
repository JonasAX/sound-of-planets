import "./topbar.css";

const Topbar = ({ setPause, pause }) => {
  return (
    <header>
      <h1>Solar System Sounds</h1>
      <button
        onClick={() => {
          setPause(!pause);
        }}
      >
        Play/Pause
      </button>
    </header>
  );
};

export default Topbar;
