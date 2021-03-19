const TestimonialContent = (props) => {
  const { testimonial } = props;
  return (
    <>
    {testimonial && <div className="bg-white h-72 w-full mx-4 px-8 py-4 space-y-4 rounded-xl">
      <div className="w-full flex space-x-3">
        <img className="w-16 h-16 rounded-full" src={testimonial.image} />
        <div className="w-full h-16">
          <h6 className="text-xl font-bold text-blue-500">{testimonial.name}</h6>
          <p className="text-blue-300 text-sm">{testimonial.description}</p>
        </div>
      </div>
      <p className="leading-loose text-gray-400 lg:text-lg md:text-sm">
        {`"${testimonial.message}"`}
      </p>
    </div>}
    </>
  );
};
export default React.memo(TestimonialContent);
