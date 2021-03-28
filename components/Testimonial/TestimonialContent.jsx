const TestimonialContent = (props) => {
  const { testimonial, testimonials } = props;
  return (
    <>
    {testimonials && testimonials.map((testimonial, id) => {
      return(
        <div key={id} className={`bg-white lg:h-72 md:h-72 reno:h-72 sm:h-auto xs:h-auto w-full mx-4 px-8 py-4 space-y-4 rounded-xl shadow-lg ${id == 0 ? 'mb-4' : ''}`}>
          <div className="w-full flex space-x-3">
            <img className="w-16 h-16 rounded-full" src={testimonial.image} />
            <div className="w-full h-16">
          <h6 className="lg:text-xl md:text-xl reno:text-xl sm:text-base xs:text-base font-bold text-blue-500">{testimonial.name}</h6>
          <p className="text-blue-300 lg:text-xl md:text-xl reno:text-base sm:text-xs xs:text-xs leading-tight">{testimonial.description}</p>
        </div>
      </div>
      <p className="leading-loose text-gray-400 lg:text-lg sm:text-sm xs:text-sm sm:mt-10 xs:mt-10">
        {`"${testimonial.message}"`}
      </p>
    </div>
      )
    })}
    
    </>
  );
};
export default React.memo(TestimonialContent);