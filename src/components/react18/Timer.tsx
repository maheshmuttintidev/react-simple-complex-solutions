import { useCallback, useState } from "react";
import { converNumberToTime } from "../../utils";

export const Timer = () => {
  const [countDownTime, setCountDownTime] = useState(0);
  const [timer, setTimer] = useState<any | null>(null);

  const handleStartTimer = useCallback(() => {
    const internalTimer: any = setInterval(
      () => setCountDownTime((prevState) => prevState + 1),
      10
    );
    setTimer(internalTimer);
    return () => {
      clearInterval(internalTimer);
    };
  }, []);

  const handleStopTimer = useCallback(() => {
    clearInterval(timer);
  }, [timer]);

  const handleResetTimer = useCallback(() => {
    handleStopTimer();
    setCountDownTime(0);
  }, [handleStopTimer]);

  return (
    <div>
      <h2 className="text-xl py-4 font-medium text-emerald-950 underline">
        Stop Watch
      </h2>
      <p className="font-semibold text-base">
        {converNumberToTime(countDownTime)}
      </p>
      <button
        className="border border-1 bg-blue-400 p-2 rounded-md"
        onClick={handleStartTimer}
      >
        Start
      </button>
      {timer && countDownTime ? (
        <>
          <button
            className="border border-1 bg-red-400 p-2 rounded-md"
            onClick={handleStopTimer}
          >
            Stop
          </button>

          <button
            className="border border-1 bg-orange-400 p-2 rounded-md"
            onClick={handleResetTimer}
          >
            Reset
          </button>
        </>
      ) : null}
    </div>
  );
};
