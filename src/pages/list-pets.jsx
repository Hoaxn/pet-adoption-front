/** @format */

import { HeartFilled } from "@ant-design/icons";
import { Tooltip, message } from "antd";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Transition } from "react-transition-group";
import Layout from "../Components/Layout";

const ListPets = ({}) => {
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      setHasToken(token !== null);
    }
  }, []);

  const getAllPets = async () => {
    try {
      setIsLoading(true);

      const response = await axios.get("http://localhost:3000/pets", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response) {
        message.destroy();
        setIsLoading(false);
        setPets(response.data?.pets);
      } else {
        setIsLoading(false);
        message.destroy();
        toast.error("Something went wrong");
      }
    } catch (error) {
      setIsLoading(false);
      message.destroy();
      message.error("Something went wrong");
      //   dispatch(HideLoading());
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPets();
  }, []);

  const favouritePet = async (pet) => {
    try {
      setIsLoading(true);
      message.loading("Adding To Favourite. Please Wait..");
      const response = await axios.post(
        `http://localhost:3000/liked-pets`,
        {
          userId: localStorage.getItem("userId"),
          petId: pet._id,
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response) {
        message.destroy();
        setIsLoading(false);
        message.success(response.data?.message);
      } else {
        setIsLoading(false);
        message.destroy();
        toast.error("Something went wrong");
      }
    } catch (error) {
      setIsLoading(false);
      message.destroy();
      message.error(error?.response?.data?.message);
      //   dispatch(HideLoading());
      console.log(error);
    }
  };

  return (
    <>
      <Transition in={true} timeout={300} classNames="page" unmountOnExit>
        <Layout>
          <>
            <section className="pb-50 pt-50">
              <div className="keyfeatures text-center">
                <div className="container">
                  <div className="row">
                    <div className="heading_s1 hs2 w-80">
                      <h2 className=" fw-bold text-capitalize">
                        Pets Available
                      </h2>
                    </div>
                  </div>

                  <div className="row g-4">
                    {pets &&
                      pets?.map((pet, index) => (
                        <div className="col-md-3" key={index}>
                          <div className="card card-oos">
                            <div className="card-body">
                              <div className="position-relative">
                                <div className="oos_img">
                                  <img
                                    src={`http://localhost:3000/uploads/${pet.image}`}
                                    className="mb-3 img-fluid "
                                  />
                                </div>
                                <h2 className="fs-6 ">{pet.name}</h2>
                                <p className="text-center mt-3">
                                  {
                                    pet.description &&
                                    pet.description.length > 50
                                      ? pet.description.substring(0, 50) + "..." // If the description is longer than 20 characters, show the first 20 characters and add "..." at the end.
                                      : pet.description // If the description is 20 characters or shorter, display the whole description.
                                  }
                                </p>
                                <div>
                                  <Link
                                    href={
                                      hasToken
                                        ? {
                                            pathname: "/adopt-pet",
                                            query: {
                                              petId: pet._id,
                                              title: pet.name,
                                              image: pet.image,
                                              age: pet.age,
                                              description: pet.description,
                                              breed: pet.breed,
                                              gender: pet.gender,
                                              species: pet.species
                                            },
                                          }
                                        : "/login"
                                    }
                                    className="btn btn-raised btntheme my-button w-xs me-2 homecart mt-auto align-self-start"
                                  >
                                    Adopt
                                  </Link>
                                  <Tooltip title="Add to Favourite">
                                    <HeartFilled
                                      onClick={() => {
                                        if (hasToken) {
                                          favouritePet(pet);
                                        } else {
                                          message.info(
                                            "Please Login First to make favourite"
                                          );
                                        }
                                      }}
                                      style={{
                                        color: "red",
                                        cursor: "pointer",
                                      }}
                                    />
                                  </Tooltip>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </section>
          </>
        </Layout>
      </Transition>
    </>
  );
};

export default ListPets;
