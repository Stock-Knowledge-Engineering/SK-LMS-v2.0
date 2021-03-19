import { useEffect, useCallback, useState } from "react";
import { useArticlesHook } from "../../hooks/articlesHook";

import ArticleCarouselContent from "./ArticleCarouselContent";
import CarouseControl from "./CarouselControl";
export default function ArticleCarouselLayout(props) {
  const articles = useArticlesHook();
  const [carouselStatus, setCarouselStatus] = useState(null);

  useEffect(() => {
    if (articles) {
      setCarouselStatus({ current: 0, next: 1, prev: articles.length - 1 });
    }
  }, [articles]);

  useEffect(() => {
    // if (carouselStatus) console.log(carouselStatus);
  }, [carouselStatus]);

  const nextSlide = useCallback(
    async (status, length) => {
      let _current = await getNext(status.current, length);
      let _next = await getNext(status.next, length);
      let _prev = await getNext(status.prev, length);
      setCarouselStatus({ current: _current, next: _next, prev: _prev });
    },
    [carouselStatus]
  );

  const prevSlide = useCallback(async (status, length) => {
    let _current = await getPrevious(status.current, length);
    let _next = await getPrevious(status.next, length);
    let _prev = await getPrevious(status.prev, length);

    setCarouselStatus({ current: _current, next: _next, prev: _prev });
  });

  const toSlide = useCallback(async (slide, length) => {
    let _next = await getNext(slide, length);
    let _prev = await getNext(slide, length);

    setCarouselStatus({ current: slide, next: _next, prev: _prev });
  });

  const getNext = (value, length) => {
    return new Promise((resolve, reject) => {
      if (value < length) resolve(value + 1);
      else resolve(0);
    });
  };

  const getPrevious = (value, length) => {
    return new Promise((resolve, reject) => {
      if (value - 1 == -1) resolve(length);
      else resolve(value - 1);
    });
  };

  return (
    <>
        <h1  className="text-center md:w-full xs:w-height text-5xl font-bold text-gray-600 mt-20 mb-10">
          Articles
        </h1>
      <div className="mb-32 relative md:w-full xs:w-height lg:px-64 md:px-2">
        {articles && articles.length > 0 && (
          <ArticleCarouselContent
            slide={
              articles && carouselStatus && articles[carouselStatus.current]
            }
          />
        )}

        <CarouseControl
          status={carouselStatus && carouselStatus}
          length={articles && articles.length}
          next={nextSlide}
          prev={prevSlide}
        />
      </div>
    </>
  );
}
