import { useState } from "react";
import MinorHeader from "../../ui/MinorHeader";
import { PageTitle } from "../../ui/PageTittle";
import { ButtonUI } from "../../ui/Button";
import { Link } from "react-router-dom";

export function WhatBringsYou() {
  const [card1, setCard1] = useState(false);
  const [card2, setCard2] = useState(false);
  const [card3, setCard3] = useState(false);

  return (
    <>
      <MinorHeader hidden="block" />
      <main className="w-full md:w-10/12 mx-auto container p-10 my-5">
        <PageTitle
          headingText="What Brings You To Dribble"
          className="text-center"
          subText="Select the option that best describe you. Don't worry, you can explore other options later."
        />

        <div className="my-20 p-10 grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-5">
            <div
              className={`rounded-3xl ${
                !card1
                  ? "group hover:border-4 hover:border-pink-500 border-gray-200 border-2"
                  : "border-pink-500 border-4"
              }  text-center transition ease-out cursor-pointer`}
              onClick={() => setCard1(!card1)}
            >
              <img
                src="../src/assets/watch.png"
                className={`w-80 h-60 mx-auto ${
                  !card1
                    ? "group-hover:-mt-20 transition ease-in-out"
                    : "-mt-20"
                }`}
                alt=""
              />
              <div
                className={`w-full mx-auto p-10 space-y-7 ${
                  !card1 ? "mb-10 group-hover:mb-0" : "mb-0"
                } `}
              >
                <h1 className=" text-3xl font-bold text-black font-sans">
                  I am a designer looking to share my work
                </h1>
                <p
                  className={`text-2xl text-gray-500 font-sans ${
                    !card1 ? "hidden group-hover:block" : "block"
                  }`}
                >
                  With over 70 million shots from a vast community of designers.
                  Dribble is the leading source for design inspiration
                </p>

                <div
                  className={`p-2 w-10 h-10 mx-auto rounded-full border ${
                    !card1 ? "border-gray-300" : "bg-pink-500"
                  }`}
                >
                  <i
                    className={`fa-solid fa-check text-white mx-auto ${
                      !card1 ? "hidden" : "block"
                    }`}
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5">
            <div
              className={` rounded-3xl ${
                !card2
                  ? "group hover:border-4 hover:border-pink-500 border-gray-200 border-2"
                  : "border-pink-500 border-4"
              }  text-center transition ease-out cursor-pointer`}
              onClick={() => setCard2(!card2)}
            >
              <img
                src="../src/assets/balls.png"
                className={`w-80 h-60 mx-auto ${
                  !card2
                    ? "group-hover:-mt-20 transition ease-in-out"
                    : "-mt-20"
                }`}
                alt=""
              />
              <div
                className={`w-full mx-auto p-10 space-y-7 ${
                  !card2 ? "mb-10 group-hover:mb-0" : "mb-0"
                } `}
              >
                <h1 className=" text-3xl font-bold text-black font-sans">
                  I am a designer looking to share my work
                </h1>
                <p
                  className={`text-2xl text-gray-500 font-sans ${
                    !card2 ? "hidden group-hover:block" : "block"
                  }`}
                >
                  With over 70 million shots from a vast community of designers.
                  Dribble is the leading source for design inspiration
                </p>

                <div
                  className={`p-2 w-10 h-10 mx-auto rounded-full border ${
                    !card2 ? "border-gray-300" : "bg-pink-500"
                  }`}
                >
                  <i
                    className={`fa-solid fa-check text-white mx-auto ${
                      !card2 ? "hidden" : "block"
                    }`}
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5">
            <div
              className={` rounded-3xl ${
                !card3
                  ? "group hover:border-4 hover:border-pink-500 border-gray-200 border-2"
                  : "border-pink-500 border-4"
              }  text-center transition ease-out cursor-pointer`}
              onClick={() => setCard3(!card3)}
            >
              <img
                src="../src/assets/phone.png"
                className={`w-80 h-60 mx-auto ${
                  !card3
                    ? "group-hover:-mt-20 transition ease-in-out"
                    : "-mt-20"
                }`}
                alt=""
              />
              <div
                className={`w-full mx-auto p-10 space-y-7 ${
                  !card3 ? "mb-10 group-hover:mb-0" : "mb-0"
                } `}
              >
                <h1 className=" text-3xl font-bold text-black font-sans">
                  I am a designer looking to share my work
                </h1>
                <p
                  className={`text-2xl text-gray-500 font-sans ${
                    !card3 ? "hidden group-hover:block" : "block"
                  }`}
                >
                  With over 70 million shots from a vast community of designers.
                  Dribble is the leading source for design inspiration
                </p>

                <div
                  className={`p-2 w-10 h-10 mx-auto rounded-full border ${
                    !card3 ? "border-gray-300" : "bg-pink-500"
                  }`}
                >
                  <i
                    className={`fa-solid fa-check text-white mx-auto ${
                      !card3 ? "hidden" : "block"
                    }`}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center space-y-6">
          {card1 || card2 || card3 ? (
            <h1 className="font-bold text-2xl font-sans">
              Anything else? You can select multiple
            </h1>
          ) : (
            ""
          )}
          <div>
            <Link to="/confirmEmail">
              <ButtonUI
                className="mx-auto"
                text="Finish"
                disable={card1 || card2 || card3 ? false : true}
                color="bg-pink-500"
              />
            </Link>
          </div>

          {card1 || card2 || card3 ? (
            <p className="text-xl font-semibold font-sans text-gray-400 my-3">
              Or Press RETURN
            </p>
          ) : (
            ""
          )}
        </div>
      </main>
    </>
  );
}
