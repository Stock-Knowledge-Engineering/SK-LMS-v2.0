const CarouselContent = (props) => {
  console.log(current)
  const { slide, slides, current } = props;
  return (
    <div className="relative flex overflow-hidden w-full text-center animate__animated animate__fadeIn">
      {slides && slides.map( (e, i) => {
        return <img className={e.id == current ? `block animate__animated animate__fadeIn` : `hidden`} key={e.id} src={e.image} />
      })
        // <div
        //   className="bg-teal-200"
        //   style={{
        //     height: "50vh",
        //     background: `url('${slide.image}') no-repeat center`,
        //     backgroundSize: "contain",
        //   }}
        // >
        //   {slide && slide.header}
        // </div>
        // <img src={slide.image} />

      }
    </div>
  );
};
export default React.memo(CarouselContent);
