import { useRouter } from "next/dist/client/router";

const TopicsItem = ({ id, title, subject, type }) => {
  const router = useRouter();
  
  return (
    <div
      key={id}
      onClick={() => {
        router.push(`/lms/courses/${subject}/${id}`, undefined, {
          shallow: true,
          scroll: false,
        });
      }}
      className="w-72 h-auto text-center m-5 flex flex-col items-center justify-center cursor-pointer"
    >
      <div className="relative bg-green-400 w-full p-4 rounded-t-xl">
        <img className="m-auto" src={`${process.env.ASSETS_DOMAIN}/topics/icon/test.svg`} />
        <h1 className="absolute bottom-0 right-0">{type}</h1>
      </div>
      <a
        href=""
        className="py-4 w-full bg-white text-heading font-semibold rounded-b-xl"
      >
        {title}
      </a>
    </div>
  );
};


export default TopicsItem;