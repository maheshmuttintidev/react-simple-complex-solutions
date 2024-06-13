export const converNumberToTime = (ms) => {
  if (!ms?.toString()) {
    return;
  }

  if (typeof ms !== "number") {
    return;
  }
  const totalSeconds = Math.floor(ms / 100);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);
  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");
  const formattedMilliSeconds = String(ms).padStart(3, "0");

  return `${formattedHours} hr: ${formattedMinutes} min: ${formattedSeconds} sec${
    formattedMilliSeconds > 0 && formattedMilliSeconds < 100 ? ': '+formattedMilliSeconds+'ms' : ""
  }`;
};
