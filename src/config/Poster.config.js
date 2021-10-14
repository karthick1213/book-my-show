const settings = {
    arrows: true,
    slidesToScroll: 3,
    autoplay: false,
    dots: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    InitialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
};

export default settings;
