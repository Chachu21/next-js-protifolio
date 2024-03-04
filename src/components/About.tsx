import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section id="about" className="about-mf sect-pt4 route p-12 mt-12 bg-gray-100">
      <div className="container">
        <div className="flex justify-center items-center p-1">
          <div className="col-sm-12">
            <div className="flex">
              <div className="flex justify-between items-center">
                <div className="col-md-6 flex-1">
                  <div className="flex justify-between items-center">
                    <div className="col-sm-6 col-md-5">
                      <div className="about-img">
                        <Image
                          src="/me.jpg"
                          className="max-w-[100%] h-auto rounded"
                          alt=""
                          width={250}
                          height={250}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-7">
                      <div className="about-info">
                        <p>
                          <span className="title-s ">Name: </span>
                          <span>Chalachew Tsegaye</span>
                        </p>
                        <p>
                          <span className="title-s">Profile: </span>
                          <span>
                            full stack developer and Mobile App developer
                          </span>
                        </p>
                        <p>
                          <span className="title-s">Email: </span>
                          <span>tsecha6@gmail.com</span>
                        </p>
                        <p>
                          <span className="title-s">Phone: </span>
                          <span>+251994868854</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="skill-mf">
                    <p className="title-s">Skill</p>
                    <span>HTML</span> <span className="pull-right">85%</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "85%" }}
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                    <span>CSS3</span> <span className="pull-right">75%</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "75%" }}
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                    <span>JAVASCRIPT</span>{" "}
                    <span className="pull-right">90%</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "90%" }}
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                    <span>TYPESCRIPT</span>{" "}
                    <span className="pull-right">90%</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "90%" }}
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                    <span>node js (express)</span>
                    <span className="pull-right">50%</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                    <span>React js</span>{" "}
                    <span className="pull-right">90%</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "90%" }}
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                    <span>Next js</span> <span className="pull-right">75%</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "90%" }}
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                    <span>Flutter</span> <span className="pull-right">75%</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "85%" }}
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <b>Datatbase</b>
                    <div>MongoDB, MySQL, PostgreSQL</div>
                  </div>
                </div>
                <div className="col-md-6 flex-1">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">About me</h5>
                    </div>
                    <p className="lead">
                      I am a software engineer with over 1 years of experience
                      in full stack development and mobile app development. I
                      have a strong understanding of both the front-end and
                      back-end of web development, and I am proficient in a
                      variety of programming languages and technologies.
                    </p>
                    <p className="lead">
                      I am passionate about building innovative and
                      user-friendly software, and I have a proven track record
                      of success in delivering high-quality projects on time and
                      within budget. I am also a highly motivated and
                      self-directed individual, and I am always eager to learn
                      new things.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
