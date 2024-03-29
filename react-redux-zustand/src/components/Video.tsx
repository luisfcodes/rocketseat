import ReactPlayer from "react-player";
import { useAppselector } from "../store";

export function Video() {
  const lesson = useAppselector(state => {
    const { currentModuleIndex, currentLessonIndex } = state.player;

    const currentLesson = state.player.course.modules[currentModuleIndex].lessons[currentLessonIndex];

    return currentLesson;
  });

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${lesson.id}`}
        controls
        width="100%"
        height="100%"
      />
    </div>
  );
}
