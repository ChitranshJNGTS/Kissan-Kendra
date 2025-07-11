import React from "react";

// Import images
import testiImg1 from "../assets/img/testimonial/testi-img-1-1.png";
import testiMainImg from "../assets/img/testimonial/testi-img.png";
import shapeImg from "../assets/img/shep/testmonial-shep-1.png";

const testimonials = [
  {
    name: "Ramesh Patel",
    designation: "Farmer from Indore",
    text: `I recently purchased a tractor and battery from this store. The quality is top-notch and the service was excellent. Highly recommended for any agricultural needs!`,
    image: testiImg1,
  },
  {
    name: "Sunita Meena",
    designation: "Farm Business Owner",
    text: `We bought multiple tractor tyres and an advanced harvesting machine. Everything was delivered on time and works perfectly. Very trustworthy service.`,
    image: testiImg1,
  },
  {
    name: "Mukesh Yadav",
    designation: "Organic Farm Consultant",
    text: `Their battery range is long-lasting and ideal for farm vehicles. Plus, they offer genuine parts and great customer support. Will shop again!`,
    image: testiImg1,
  },
];

const AboutTestimonial = () => {
  return (
    <section className="testimonial-layout1 space">
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-6">
            <div className="title-area wow fadeInUp wow-animated" data-wow-delay="0.3s">
              <span className="sec-subtitle">CLIENT TESTIMONIALS</span>
              <h2 className="sec-title">What Our Customers Say About Us</h2>
            </div>

            {/* TODO: Replace with actual carousel (e.g., react-slick or Swiper) */}
            <div
              className="vs-carousel"
              data-arrows="false"
              data-center-mode="left"
              data-dots="true"
              data-autoplay="true"
              data-slide-show="1"
            >
              {testimonials.map((testimonial, index) => (
                <div className="testi-style1" key={index}>
                  <div className="auther-inner">
                    <div className="auther-img">
                      <img src={testimonial.image} alt={`Testimonial of ${testimonial.name}`} />
                      <div className="testi-icon">
                        <i className="far fa-quote-left"></i>
                      </div>
                    </div>
                    <div className="auther-content">
                      <h6 className="name">{testimonial.name}</h6>
                      <span className="designation">{testimonial.designation}</span>
                      <div className="rating">
                        {[...Array(5)].map((_, i) => (
                          <i className="fas fa-star" key={i}></i>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="testi-text">{testimonial.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Column */}
          <div className="col-lg-6">
            <div className="testi-img">
              <img src={testiMainImg} alt="Customer testimonials" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Shape */}
      <div
        className="shape-mockup moving z-index-n1 d-none d-xl-block"
        style={{ right: "0%", bottom: "5%" }}
      >
        <img src={shapeImg} alt="Decorative shapes" />
      </div>
    </section>
  );
};

export default AboutTestimonial;
