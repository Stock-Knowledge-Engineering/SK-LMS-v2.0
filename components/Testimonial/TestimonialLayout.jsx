
import { useEffect, useCallback, useState } from "react";
import { useTestimonialHook } from "../../hooks/testimonialHook";
import TestimonialContent from "./TestimonialContent";
import TestimonialControl from "./TestimonialControl";

// import CarouselContent from "./CarouselContent";
// import CarouseControl from "./CarouselControl";
// import CarouselIndicator from "./CarouselIndicator";

export default function TestimonialLayout(props) {
  const testimonials = useTestimonialHook();
  const [testimonialStatus, settestimonialStatus] = useState(null);

  useEffect(() => {
    if (testimonials) {
      settestimonialStatus({ current: 0, next: 1, prev: testimonials.length - 1 });
    }
  }, [testimonials]);

  useEffect(() => {
    // if (testimonialStatus) console.log(testimonialStatus);
  }, [testimonialStatus]);

  const nextTestimonial = useCallback(
    async (status, length) => {
      let _current = await getNext(status.current, length);
      let _next = await getNext(status.next, length);
      let _prev = await getNext(status.prev, length);
      settestimonialStatus({ current: _current, next: _next, prev: _prev });
    },
    [testimonialStatus]
  );

  const prevTestimonial = useCallback(async (status, length) => {
    let _current = await getPrevious(status.current, length);
    let _next = await getPrevious(status.next, length);
    let _prev = await getPrevious(status.prev, length);

    settestimonialStatus({ current: _current, next: _next, prev: _prev });
  });

  const toTestimonial = useCallback(async (testimonial, length) => {
    let _next = await getNext(testimonial, length);
    let _prev = await getNext(testimonial, length);

    settestimonialStatus({ current: testimonial, next: _next, prev: _prev });
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
    <div className="relative lg:w-3/4 md:w-11/12 xs:w-3/4 h-80 bg-gray-50 m-auto flex items-center rounded-xl">
    {testimonials && testimonials.length > 0 && (
      <TestimonialContent
        testimonial={testimonials && testimonialStatus && testimonials[testimonialStatus.current]}
      />
    )}
      <TestimonialControl 
        status={testimonialStatus && testimonialStatus}
        length={testimonials && testimonials.length}
        next={nextTestimonial}
        prev={prevTestimonial}
      />
    </div>
    // <div className="relative w-full px-96">
    //   {testimonials && testimonials.length > 0 && (
    //     <CarouselContent
    //       testimonial={testimonials && testimonialStatus && testimonials[testimonialStatus.current]}
    //     />
    //   )}

    //   <CarouseControl
    //     status={testimonialStatus && testimonialStatus}
    //     length={testimonials && testimonials.length}
    //     next={nextTestimonial}
    //     prev={prevTestimonial}
    //   />

    
    // </div>
  );
}
