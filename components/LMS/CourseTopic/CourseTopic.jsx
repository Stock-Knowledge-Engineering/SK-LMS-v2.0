import { useRouter } from "next/dist/client/router";
import { useHttp } from "../../../hooks/http";
import AR from "./AR";
import WebXR from "./WebXR";

const CourseTopic = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [topicsLoading, topics] = useHttp(`/topics?id=${slug[2]}`, [
    slug[2],
  ]);

  return (
    <>
      {topics && (topics[0].type == "WebXR 1.0" || topics[0].type == "WebXR 2.0") && <WebXR title={topics && topics[0].title} type={topics && topics[0].type} content={topics && topics[0].content} />}
      {topics && topics[0].type == "AR" && <AR title={topics && topics[0].title} type={topics && topics[0].type} content={topics && topics[0].content} />}

    </>
  );
};

export default CourseTopic;
