/** @format */

// import Features from "@/Components/Features";
import Layout from "@/Components/Layout";
import { UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import AdoptionSuccessStories from "../Components/AdoptionSuccessStories";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Best Pet Adoption App</title>
      </Head>
      <Layout>
        <div className="btn-group d-md-none fixed-bottom bg-white p-2 ">
          <div className="navbar-toolbar d-none d-md-flex align-items-center order-lg-3">
            <Link
              href="/favourites"
              className="  me-2 "
            >
              Favourites
            </Link>
            {typeof window !== "undefined" && localStorage.getItem("token") ? (
              <span
                className="nav-link d-flex gap-2 align-items-center"
                style={{ color: "#78258B" }}
              >
                <UserOutlined />
                {localStorage.getItem("email")}
                <Button
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      localStorage.removeItem("email");
                      localStorage.removeItem("token");
                    }
                    window.location.reload();
                  }}
                >
                  Logout
                </Button>
              </span>
            ) : (
              <Link
                href="/login"
                className="btn btn-raised shadow my-button w-xs  me-2 homecart homelogin"
              >
                <i className="fas fa-user me-2" />
                Login
              </Link>
            )}
          </div>
        </div>
        <section className=" pt-1 pt-md-5 pb-1">
          <div className="container  text-center">
            <div className="row align-items-center justify-content-center gy-5">
              <div className="col-md-5">
                <div className="row">
                  <div className="heading_s1">
                    <span className="sub_heading font_style1">
                      <small>PetDoption</small>
                    </span>
                    <h1 className=" fw-bold text-capitalize">
                      All Pets Deserve a Chance at Quality Life
                    </h1>
                  </div>
                </div>
                <div className="subpara mt-3">
                  <p className="text-center">
                    <span style={{ fontWeight: 400 }}>
                      We aim at improving the situation for pets and long term
                      i.e by providing them with shelter and veterinary care.
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="serv_left">
                  <img
                    title="Dog With Fmaily"
                    src="/assets/dist/image/dog-with-family.png"
                    className="img-fluid"
                    alt="Dog With Family"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-light pt-50 pb-50">
          <div className="container">
            <div className="row text-center">
              <div className="heading_s1">
                <span className="sub_heading font_style1">
                  Pets Available For Adoption
                </span>
              </div>
            </div>
            <div className="mytemplates">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-2 col-6 col-sm-4">
                    <div className="border-gray p-15  bg-white text-center">
                      <img
                        title="dog image"
                        src="assets/dist/image/dog.png"
                        alt="dog-image"
                      />
                      <div className="alt-font text-extra-dark-gray fw-bold d-block">
                        Dog
                      </div>
                    </div>
                </div>
                <div className="col-lg-2 col-6 col-sm-4">
                    <div className="border-gray p-15  bg-white text-center">
                      <img
                        title="cat image"
                        src="assets/dist/image/cat.png"
                        alt="cat-image"
                      />
                      <div className="alt-font text-extra-dark-gray fw-bold d-block">
                        Cat
                      </div>
                    </div>
                </div>
                <div className="col-lg-2 col-6 col-sm-4">
                    <div className="border-gray p-15  bg-white text-center">
                      <img
                        title="bird image"
                        src="assets/dist/image/bird.png"
                        alt="bird-image"
                      />
                      <div className="alt-font text-extra-dark-gray fw-bold d-block">
                        Bird
                      </div>
                    </div>
                </div>
                <div className="col-lg-2 col-6 col-sm-4">
                    <div className="border-gray p-15  bg-white text-center">
                      <img
                        title="teacup pig image"
                        src="assets/dist/image/teacup-pig.png"
                        alt="teacup-pig-image"
                      />
                      <div className="alt-font text-extra-dark-gray fw-bold d-block">
                        Pig
                      </div>
                    </div>
                </div>
                <div className="col-lg-2 col-6 col-sm-4">
                    <div className="border-gray p-15  bg-white text-center">
                      <img
                        title="rabbit image"
                        src="assets/dist/image/rabbit.png"
                        alt="rabbit-image"
                      />
                      <div className="alt-font text-extra-dark-gray fw-bold d-block">
                        Rabbit
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-50 pb-50">
          <div className="workprocess text-center">
            <div className="container">
              <div className="row">
                <div className="heading_s1 w-80">
                  <h3 className=" fw-bold text-capitalize">
                    Expert Matchmaking
                  </h3>
                  <p>
                    At PetDoption, our team of adoption counselors is passionate
                    about creating lasting bonds between pets and adopters. Our
                    expert matchmaking process ensures that each pet finds their
                    perfect forever home, and each adopter finds their ideal
                    furry companion. Meet our dedicated team of adoption
                    experts:
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 mb-4 mb-md-0">
                  <div className="workprocess workprocess-main text-center position-relative">
                    <div className="workprocess-icon">
                      <img
                        width={170}
                        height={170}
                        src="assets/dist/image/Homepage/sarah-mitchell.png"
                        className="img-fluid"
                        alt="Sarah Mitchell - Adoption Coordinator"
                        title="Sarah Mitchell - Adoption Coordinator"
                        loading="lazy"
                        data-no-retina=""
                      />
                    </div>
                    <div className="workprocess-content">
                      <h4 className="mb-3 workprocess-title">
                        Sarah Mitchell - Adoption Coordinator
                      </h4>
                      <p>
                        With over a decade of experience in animal welfare,
                        Sarah is our Adoption Coordinator extraordinaire. Her
                        compassionate nature and understanding of pet behavior
                        help her match pets with adopters who share compatible
                        lifestyles and preferences. She believes that finding
                        the right connection is key to a successful adoption.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4 mb-md-0">
                  <div className="workprocess workprocess-main text-center position-relative">
                    <div className="workprocess-icon">
                      <img
                        width={170}
                        height={170}
                        src="assets/dist/image/Homepage/john-cooper.png"
                        className="img-fluid"
                        alt="John Cooper - Pet Behavior Specialist"
                        title="John Cooper - Pet Behavior Specialist"
                        loading="lazy"
                        data-no-retina=""
                      />
                    </div>
                    <div className="workprocess-content">
                      <h4 className="mb-3 workprocess-title">
                        John Cooper - Pet Behavior Specialist
                      </h4>
                      <p>
                        As our Pet Behavior Specialist, John ensures that our
                        shelter pets are emotionally and behaviorally ready for
                        adoption. His expertise lies in rehabilitating and
                        training pets, giving them the best chance at a happy
                        and harmonious life with their new families.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4 mb-md-0">
                  <div className="workprocess workprocess-main text-center position-relative">
                    <div className="workprocess-icon">
                      <img
                        width={170}
                        height={170}
                        src="assets/dist/image/Homepage/emma-turner.png"
                        className="img-fluid"
                        title="Emma Turner - Adoption Counselor"
                        alt="Emma Turner - Adoption Counselor"
                        loading="lazy"
                        data-no-retina=""
                      />
                    </div>
                    <div className="workprocess-content">
                      <h4 className="mb-3 workprocess-title">
                        {" "}
                        Emma Turner - Adoption Counselor
                      </h4>
                      <p>
                        Emma's warm and friendly approach instantly puts both
                        pets and adopters at ease. With a keen eye for
                        understanding each pet's unique qualities, she excels in
                        making meaningful connections and creating lasting
                        bonds.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AdoptionSuccessStories />

        <section className="pb-50 pt-50">
          <div className="keyfeatures text-center">
            <div className="container">
              <div className="row">
                <div className="heading_s1 w-80">
                  <span className="sub_heading font_style1">
                    Why Choose Us?
                  </span>
                  <h3 className=" fw-bold text-capitalize">Visit Us TODAY!</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="card border-0  rounded-xs">
                    <div className="card-body service_item">
                      <div className="ser_inner ">
                        <div className="ser_img">
                          <img
                            src="assets/dist/image/Homepage/heart-with-paw-print.jpg"
                            className="img-fluid h-100"
                            alt="A Loving Home For Every Pet"
                            title="A Loving Home For Every Pet"
                            data-pagespeed-url-hash={1416024010}
                          />
                        </div>
                        <h4 className="mt-4 mb-3">
                          A Loving Home for Every Pet{" "}
                        </h4>
                      </div>
                      <p>
                        At PetDoption, our mission is to find a loving home for
                        every pet that comes through our doors. We go above and
                        beyond to ensure that each animal receives the care,
                        attention, and affection they deserve, making them ready
                        for their new forever homes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card border-0  rounded-xs">
                    <div className="card-body service_item">
                      <div className="ser_inner ">
                        <div className="ser_img">
                          <img
                            src="assets/dist/image/Homepage/owner-holding-pet.avif"
                            className="img-fluid h-100"
                            alt="Making a Lifelong Impact"
                            title="Make a Lifelong Impact"
                            data-pagespeed-url-hash={1416024010}
                          />
                        </div>
                        <h4 className="mt-4 mb-3">Making a Lifelong Impact</h4>
                      </div>
                      <p>
                        By choosing to adopt from PetDoption, you are making a
                        lifelong impact on a shelter pet's life. You give them a
                        second chance at happiness and provide them with a safe
                        and loving home they deserve.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card border-0  rounded-xs">
                    <div className="card-body service_item">
                      <div className="ser_inner ">
                        <div className="ser_img">
                          <img
                            src="/assets/dist/image/Homepage/hand-shake.jpg"
                            className="img-fluid h-100"
                            alt="Transparency and Trust"
                            title="Transparency and Trust"
                            data-pagespeed-url-hash={1416024010}
                          />
                        </div>
                        <h4 className="mt-4 mb-3">Transparency and Trust</h4>
                      </div>
                      <p>
                        We pride ourselves on transparency and openness. We
                        provide detailed information about our pets'
                        backgrounds, health, and behavior, ensuring you have all
                        the facts to make the right decision for your family.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className=" py-5 mb-lg-2"
          style={{
            background:
              "radial-gradient(116.18% 118% at 50% 100%, rgba(99, 102, 241, 0.1) 0%, rgba(218, 70, 239, 0.05) 41.83%, rgba(241, 244, 253, 0.07) 82.52%)",
          }}
        >
          <div className="container">
            <div className="row py-2 py-md-4 py-lg-5">
              <div className="col-xl-4 col-md-5 text-center text-md-start pt-md-2 pb-2 pb-md-0 mb-4 mb-md-0">
                <h2 className="pb-3 mb-1 mb-lg-3">
                  Any questions? <br className="d-none d-md-inline" />
                  Check out the FAQs
                </h2>
              </div>
              <div className="col-md-7 offset-xl-1">
                <div className="accordion" id="faq">
                  <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                    <h3 className="accordion-header" id="q1-heading">
                      <button
                        className="accordion-button shadow-none rounded-3 collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#q1"
                        aria-expanded="false"
                        aria-controls="q1"
                      >
                        What is the adoption process at PetDoption?
                      </button>
                    </h3>
                    <div
                      id="q1"
                      className="accordion-collapse collapse"
                      aria-labelledby="q1-heading"
                      data-bs-parent="#faq"
                    >
                      <div className="accordion-body fs-sm pt-0">
                        <p>
                          Our adoption process is designed to ensure that our
                          animals find loving forever homes. It typically
                          involves filling out an adoption application, meeting
                          the pet in person, and undergoing a brief interview
                          with our adoption counselors to ensure the best match.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                    <h3 className="accordion-header" id="q2-heading">
                      <button
                        className="accordion-button shadow-none rounded-3 collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#q2"
                        aria-expanded="false"
                        aria-controls="q2"
                      >
                        What are the requirements for adopting a pet?
                      </button>
                    </h3>
                    <div
                      id="q2"
                      className="accordion-collapse collapse"
                      aria-labelledby="q2-heading"
                      data-bs-parent="#faq"
                    >
                      <div className="accordion-body fs-sm pt-0">
                        <p>
                          We welcome all potential adopters who can provide a
                          safe and caring environment for our animals. The
                          specific requirements may vary depending on the pet
                          and situation, but generally, we look for responsible
                          individuals who are committed to providing the
                          necessary care and attention.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                    <h3 className="accordion-header" id="q3-heading">
                      <button
                        className="accordion-button shadow-none rounded-3 collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#q3"
                        aria-expanded="false"
                        aria-controls="q3"
                      >
                        What is the adoption fee, and what does it include?
                      </button>
                    </h3>
                    <div
                      id="q3"
                      className="accordion-collapse collapse"
                      aria-labelledby="q3-heading"
                      data-bs-parent="#faq"
                    >
                      <div className="accordion-body fs-sm pt-0">
                        <p>
                          Our adoption fees contribute to the care of our
                          animals and vary based on the type and age of the pet.
                          The fee typically covers vaccinations,
                          spaying/neutering, microchipping, and a health
                          check-up. Detailed information is available on our
                          website or during the adoption process.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                    <h3 className="accordion-header" id="q4-heading">
                      <button
                        className="accordion-button shadow-none rounded-3 collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#q4"
                        aria-expanded="false"
                        aria-controls="q4"
                      >
                        Can I put a pet on hold before making a decision?
                      </button>
                    </h3>
                    <div
                      id="q4"
                      className="accordion-collapse collapse"
                      aria-labelledby="q4-heading"
                      data-bs-parent="#faq"
                    >
                      <div className="accordion-body fs-sm pt-0">
                        <p>
                          We understand the importance of making the right
                          decision. In some cases, we may allow a short hold
                          period, but please note that we cannot hold pets for
                          an extended time due to limited space and the needs of
                          other animals.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                    <h3 className="accordion-header" id="q5-heading">
                      <button
                        className="accordion-button shadow-none rounded-3 collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#q5"
                        aria-expanded="false"
                        aria-controls="q5"
                      >
                        What if I can no longer care for my adopted pet?
                      </button>
                    </h3>
                    <div
                      id="q5"
                      className="accordion-collapse collapse"
                      aria-labelledby="q5-heading"
                      data-bs-parent="#faq"
                    >
                      <div className="accordion-body fs-sm pt-0">
                        <p>
                          We understand that circumstances can change. If you
                          are unable to keep your adopted pet, we request that
                          you return them to our shelter. We are committed to
                          the well-being of our animals, and we will find them a
                          suitable new home.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
