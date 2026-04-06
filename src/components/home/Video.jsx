const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        className="h-full w-full object-cover"
        src="/videos/hero_bg_vid.mp4"
        muted
        autoPlay
        loop
      ></video>
    </div>
  );
};

export default Video;
