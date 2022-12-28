import "./topbar.css";

const Topbar = ({ setPause, pause, setDarkMode, darkMode }) => {
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
      <div>
        <input type="checkbox" id="darkMode" onChange={(event) => setDarkMode(!event.target.checked)}/>
        <label htmlFor="darkMode" className="label">
          <span>🌙</span>
          <span>☀️</span>
          <div className='ball'></div>
        </label>
      </div>
    </header>
  );
};

export default Topbar;
