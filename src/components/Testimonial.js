import React from "react";
import customer1 from "../assets/Emily.png";
import customer2 from "../assets/james.png";
import gymimage from "../assets/gym image 1.png";
import gymimage2 from "../assets/gym image 2.png";
import gymimage3 from "../assets/gym image 3.png";
import gymimage4 from "../assets/gym image 4.png";

import customer3 from "../assets/michael.png";
import customer4 from "../assets/olivia.png";
import customer5 from "../assets/samantha.png";
const Testimonial = () => {
  return (
    <div className="testimonial" id="testimonial">
      <section
        className="testimonials-carousel-section py-5"
        style={{ backgroundColor: "#d2c8c8" }}
      >
        <div className="container">
          <h2 className="  text-center mb-5 section-title pt-5 ">
            What Our Customers Say
          </h2>
          <div className="row">
            {/* Left Carousel for Cafe Images */}
            <div className="col-md-4">
              <div
                id="leftCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {/* Left Carousel Item 1 */}
                  <div className="carousel-item active">
                    <img
                      src={gymimage}
                      alt="gym1"
                      className="img-fluid rounded shadow-lg"
                    />
                  </div>
                  {/* Left Carousel Item 2 */}
                  <div className="carousel-item">
                    <img
                      src={gymimage2}
                      alt="gym2"
                      className="img-fluid rounded shadow-lg"
                    />
                  </div>
                  {/* Left Carousel Item 3 */}
                  <div className="carousel-item">
                    <img
                      src={gymimage3}
                      alt="gym3"
                      className="img-fluid rounded shadow-lg"
                    />
                  </div>
                  {/* Left Carousel Item 4 */}
                  <div className="carousel-item">
                    <img
                      src={gymimage4}
                      alt="gym4"
                      className="img-fluid rounded shadow-lg"
                    />
                  </div>
                </div>
                {/* Left Carousel Controls */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#leftCarousel"
                  data-bs-slide="prev"
                  style={{ color: "black" }}
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#leftCarousel"
                  data-bs-slide="next"
                  style={{ color: "black" }}
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            {/* Right Carousel for Testimonials */}
            <div className="col-md-8 position-relative">
              <div
                id="testimonialsCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {/* Testimonial 1 */}
                  <div className="carousel-item active">
                    <div className="d-flex align-items-start shadow-sm p-3 rounded">
                      <img
                        src={customer1}
                        alt="Customer 1"
                        className="rounded-circle me-3"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                      <div>
                        <h5>Emily Roberts</h5>
                        <p>
                          "Joining this gym was the best decision I've made! The
                          trainers are amazing and push me to my limits, while
                          still making sure I’m comfortable. I’ve gained
                          confidence and strength in ways I never thought
                          possible!"
                        </p>
                        <div className="text-warning">★★★★★</div>
                      </div>
                    </div>
                  </div>
                  {/* Testimonial 2 */}
                  <div className="carousel-item">
                    <div className="d-flex align-items-start shadow-sm p-3 rounded">
                      <img
                        src={customer2}
                        alt="Customer 2"
                        className="rounded-circle me-3"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                      <div>
                        <h5>James Thompson</h5>
                        <p>
                          "I’ve been coming here for 6 months, and I’ve already
                          seen incredible results. The variety of classes and
                          equipment keep my workouts fresh and exciting. The gym
                          has a welcoming community where everyone supports each
                          other!"
                        </p>
                        <div className="text-warning">★★★★★</div>
                      </div>
                    </div>
                  </div>
                  {/* Testimonial 3 */}
                  <div className="carousel-item">
                    <div className="d-flex align-items-start shadow-sm p-3 rounded">
                      <img
                        src={customer3}
                        alt="Customer 3"
                        className="rounded-circle me-3"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                      <div>
                        <h5>Michael Harris</h5>
                        <p>
                          "I never thought I’d love working out, but this gym
                          changed my perspective. The trainers are friendly and
                          know how to make workouts fun. Plus, the motivating
                          atmosphere really helps me stay on track with my
                          fitness goals!"
                        </p>
                        <div className="text-warning">★★★★☆</div>
                      </div>
                    </div>
                  </div>
                  {/* Testimonial 4 */}
                  <div className="carousel-item">
                    <div className="d-flex align-items-start shadow-sm p-3 rounded">
                      <img
                        src={customer4}
                        alt="Customer 4"
                        className="rounded-circle me-3"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                      <div>
                        <h5>Olivia Martin</h5>
                        <p>
                          "After months of searching for a gym that really cares
                          about my progress, I finally found it here. The
                          support system is amazing, and the results speak for
                          themselves. I’m stronger, leaner, and feel more
                          confident every day!"
                        </p>
                        <div className="text-warning">★★★★☆</div>
                      </div>
                    </div>
                  </div>
                  {/* Testimonial 5 */}
                  <div className="carousel-item">
                    <div className="d-flex align-items-start shadow-sm p-3 rounded">
                      <img
                        src={customer5}
                        alt="Customer 5"
                        className="rounded-circle me-3"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                      <div>
                        <h5>Samantha Lee</h5>
                        <p>
                          "I’ve tried many gyms, but none compare to this one.
                          The facilities are top-notch, and the personal
                          training sessions are tailored to my needs. I feel
                          healthier and more energized every day!"
                        </p>
                        <div className="text-warning">★★★★★</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Right Carousel Controls */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#testimonialsCarousel"
                  data-bs-slide="prev"
                  style={{
                    color: "black",
                    position: "absolute",
                    left: "-60px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#testimonialsCarousel"
                  data-bs-slide="next"
                  style={{
                    color: "black",
                    position: "absolute",
                    right: "-60px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
