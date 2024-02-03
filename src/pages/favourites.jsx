/** @format */

import { Button, Empty, Tooltip, message } from "antd";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Transition } from "react-transition-group";
import Layout from "../Components/Layout";

const Favourites = ({}) => {
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAllFavouritePets = async () => {
    try {
      setIsLoading(true);

      const response = await axios.get(
        `http://localhost:3000/liked-pets/${localStorage.getItem("userId")}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response) {
        message.destroy();
        setIsLoading(false);
        setPets(response.data?.likedPets?.map((item) => item.pet));
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

  const removeFromFavourite = async (pet) => {
    try {
      setIsLoading(true);
      message.loading("Removing From Favourite. Please Wait...", {
        duration: 200000,
      });
      const response = await axios.delete(
        `http://localhost:3000/liked-pets/${localStorage.getItem("userId")}/${
          pet._id
        }`,
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
        getAllFavouritePets();
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
    getAllFavouritePets();
  }, []);

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
                        My Favourite Pets
                      </h2>
                    </div>
                  </div>

                  <div className="row g-4">
                    {pets &&
                     pets?.length> 0 ? pets?.map((pet, index) => (
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
                                    href={{
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
                                    }}
                                    className="btn btn-raised btntheme my-button w-xs me-2 homecart mt-auto align-self-start"
                                  >
                                    Adopt
                                  </Link>
                                  <Tooltip title="Remove From Favourite">
                                    <Button
                                      onClick={() => {
                                        removeFromFavourite(pet);
                                      }}
                                    >
                                      Remove
                                    </Button>
                                  </Tooltip>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )) : <Empty description = "No Liked Pets" />}
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

export default Favourites;
