import ProgressBar from "./components/ProgressBar";
import "./App.css";

const progresses = [10, 24, 55, 100, 200];

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {progresses.map((progress) => (
        <ProgressBar
          progress={progress > 100 ? 100 : progress < 0 ? 0 : progress}
        />
      ))}
    </div>
  );
};

export default App;
