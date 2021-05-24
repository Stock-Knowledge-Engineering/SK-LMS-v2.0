import {
  faChevronCircleLeft,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/dist/client/router";
import { useHttp } from "../../../hooks/http";

const CourseTopic = () => {
  const backArrow = (
    <FontAwesomeIcon
      className="rounded-full text-skBlue"
      size="md"
      icon={faChevronLeft}
      onClick={() => {
        router.back();
      }}
    />
  );

  const router = useRouter();
  const { slug } = router.query;

  const [topicsLoading, topics] = useHttp(`/topics?id=${slug[2]}`, [
    slug[2],
  ]);

  return (
    <div className="relative w-3/4 py-10 px-5 flex flex-col min-h-content bg-blue-50 space-y-4">
      <a
        onClick={() => {router.push('/lms/courses/', undefined, {shallow: true, scroll: false})}}
        className="w-20 flex items-center cursor-pointer "
      >
        <div
          onClick={() => {
            router.back();
          }}
          className="bg-white w-8 h-8 border rounded-full flex items-center justify-center flex-col"
        >
          {backArrow}
        </div>
        <h1>Back</h1>
      </a>
      <h1 className="text-xl text-skBlue font-bold">
        {topics && topics[0].title}
      </h1>
      <iframe
        src="https://v1.stockknowledge.org/app/?mode=1&topic=39"
        className="min-h-content"
      />
      {/* <video className="w-full" controls>
        <source src="https://archive.org/download/BB_21CB5024/El.GRingo1.mp4" />
      </video>
      <div className="box-border">
        <h1 className="text-xl text-skBlue font-bold">Structures of the Earth</h1>
        <h4 className="text-subheading">by: Jaysen Batchelor, Quinton Batchelor</h4>
      </div> */}
    </div>
  );
};

export default CourseTopic;
