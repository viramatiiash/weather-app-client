const weatherVideos = new Map([
  ["thunderstorm", "thunderstorm.mp4"],
  ["drizzle", "drizzle.mp4"],
  ["rain", "rain.mp4"],
  ["snow", "snow.mp4"],
  ["mist", "mist.mp4"],
  ["fog", "mist.mp4"],
  ["smoke", "smoke.mp4"],
  ["haze", "mist.mp4"],
  ["dust", "dust.mp4"],
  ["sand", "sand.mp4"],
  ["ash", "ash.mp4"],
  ["squall", "thunderstorm.mp4"],
  ["tornado", "tornado.mp4"],
  ["clouds", "clouds-few.mp4"],
  ["clear", "clear-sky.mp4"],
]);

const getDeviceType = () => (window.innerWidth <= 480 ? "mobile" : "desktop");

export function getWeatherVideo(main, icon) {
  const deviceType = getDeviceType();
  const folderPath = `/videos/${deviceType}`;

  if (!main) {
    const fileName =
      deviceType === "mobile" ? "default_mobile.mp4" : "default.mp4";
    return `${folderPath}/${fileName}`;
  }

  const mainLower = main.toLowerCase();
  let fileName = weatherVideos.get(mainLower) || "default.mp4";

  if (mainLower === "clouds") {
    if (icon?.startsWith("02")) fileName = "clouds-few.mp4";
    else if (icon?.startsWith("03")) fileName = "clouds-scattered.mp4";
    else fileName = "clouds-broken.mp4";
  }

  if (deviceType === "mobile") {
    const nameWithoutExt = fileName.replace(".mp4", "");
    fileName = `${nameWithoutExt}_mobile.mp4`;
  }

  return `${folderPath}/${fileName}`;
}
