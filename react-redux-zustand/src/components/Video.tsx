import ReactPlayer from "react-player";

export function Video() {
  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=unfHrB2sGGM"
        controls
        width="100%"
        height="100%"
      />
    </div>
  );
}
