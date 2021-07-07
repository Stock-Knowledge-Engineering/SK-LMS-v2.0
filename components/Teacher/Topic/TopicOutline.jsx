import TopicOutlineItem from "./TopicOutlineItem";

const TopicOutline = ({ lessons, updateLessonTitle, updateLessonContent }) => {
  console.log(lessons)
  return (
    <div className="my-2">
      {lessons.map((elm, index) => {
        return (
          <TopicOutlineItem
            lessons={lessons}
            key={elm.id}
            titile={elm.title}
            content={elm.content}
            index={index}
            updateLessonTitle={updateLessonTitle}
            updateLessonContent={updateLessonContent}
          />
        );
      })}
    </div>
  );
};

export default TopicOutline;
