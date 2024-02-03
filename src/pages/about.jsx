/** @format */

import Head from "next/head";
import Layout from "../Components/Layout";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us | PetDoption</title>
      </Head>
      <Layout>
        <>
          <div className="breadcrumbs-custom box-transform-wrap context-dark bg-image gradient-overlay">
            <div className="container">
              <h1 className="breadcrumbs-custom-title text-white">About Us</h1>
              <div className="breadcrumbs-custom-decor" />
            </div>
          </div>
          <section className="pt-50 pb-50">
            <div className="container text-center">
              <div className="row text-center">
                <div className="heading_s1">
                  <h2 className=" fw-bold text-capitalize">Our Mission</h2>
                </div>
              </div>
              <div className="aboutpara">
                <p>
                  At PetDoption, our mission is simple: to provide a safe haven
                  for animals in need and to find loving forever homes for each
                  and every one of them. We are committed to promoting
                  responsible pet ownership, rescuing animals from difficult
                  situations, and advocating for animal welfare in our
                  community.
                </p>
              </div>
            </div>
            <div className="container text-center">
              <div className="row text-center">
                <div className="heading_s1">
                  <h2 className=" fw-bold text-capitalize">Our Story</h2>
                </div>
              </div>
              <div className="aboutpara">
                <p>
                  PetDoption was founded in 2023 by a group of dedicated animal
                  lovers who saw the need for a compassionate and caring shelter
                  in our community. Since then, we have grown into a leading
                  force in animal rescue and adoption, thanks to the unwavering
                  support of our volunteers, donors, and partners.
                </p>
              </div>
            </div>
            <div className="container text-center">
              <div className="row text-center">
                <div className="heading_s1">
                  <h2 className=" fw-bold text-capitalize">Our Team</h2>
                </div>
              </div>
              <div className="aboutpara">
                <p>
                  Behind every successful adoption is a team of compassionate
                  individuals who work tirelessly to make a difference in the
                  lives of animals. Our staff and volunteers are not just
                  caretakers; they are advocates, matchmakers, and friends to
                  every pet that comes through our doors. Together, we form a
                  close-knit family united by a common passion for animal
                  welfare.
                </p>
              </div>
            </div>
            <div className="container text-center">
              <div className="row text-center">
                <div className="heading_s1">
                  <h2 className=" fw-bold text-capitalize">The Shelter</h2>
                </div>
              </div>
              <div className="aboutpara">
                <p>
                  Our shelter is more than just a place for homeless animals;
                  it's a haven where they receive the care and attention they
                  need to thrive. We provide comfortable living spaces,
                  nutritious meals, and regular veterinary care to ensure that
                  each pet is happy and healthy while they await their forever
                  home.
                </p>
              </div>
            </div>
            <div className="container text-center">
              <div className="row text-center">
                <div className="heading_s1">
                  <h2 className=" fw-bold text-capitalize">Adoption Process</h2>
                </div>
              </div>
              <div className="aboutpara">
                <p>
                  We believe that every adoption is a partnership, and finding
                  the perfect match is essential to creating a lifelong bond.
                  Our dedicated adoption counselors take the time to get to know
                  each adopter, understand their preferences, and match them
                  with a pet that complements their lifestyle and personality.
                </p>
              </div>
            </div>
            <div className="container text-center">
              <div className="row text-center">
                <div className="heading_s1">
                  <h2 className=" fw-bold text-capitalize">Impact & Success</h2>
                </div>
              </div>
              <div className="aboutpara">
                <p>
                  Over the years, we have made a significant impact on the lives
                  of countless animals and families. Our success stories are a
                  testament to the power of pet adoption, where abandoned pets
                  find love, care, and happiness in their new homes. We measure
                  our success not only by the number of adoptions but also by
                  the love and joy we witness in the hearts of our adopters and
                  their furry companions.
                </p>
              </div>
            </div>
            <div className="container text-center">
              <div className="aboutpara">
                <p>
                  <strong>
                    <em>
                      Thank you for being a part of our journey to make the
                      world a better place for animals in need. We look forward
                      to welcoming you to PetDoption and sharing the joy of pet
                      adoption with you.
                    </em>
                  </strong>
                </p>
              </div>
            </div>
          </section>
        </>
      </Layout>
    </>
  );
};

export default About;
