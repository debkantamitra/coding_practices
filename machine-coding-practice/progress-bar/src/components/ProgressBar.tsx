import { useEffect, useState } from "react";

interface Props {
  progress: number;
}

const ProgressBar = ({ progress }: Props) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (progress) {
      setInterval(() => {
        setPercentage((prev) => {
          if (prev < progress) {
            return prev + 1;
          }

          return prev;
        });
      }, 100);
    }
  }, [progress]);

  return (
    <div className="outer">
      <span className="progress-count">{percentage}%</span>
      <div
        role="progressbar"
        style={{
          width: "100%",
          transform: `translateX(-${100 - percentage}%)`,
          backgroundColor: "green",
          height: "100%",
          transition: "transform 1s ease-in",
        }}
        aria-valuenow={percentage}
      />
    </div>
  );
};

export default ProgressBar;
