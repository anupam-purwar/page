import Image from "next/image";
import teamsData from "./data/teams.data";
import FancyTestimonialsSlider from "./components/fancy-testimonials-slider";
import testimonialData from "./data/testimonial.data";
import LearnMoreButton from "./components/LearnMoreButton";
import GithubButton from "./components/GithubButton";


export default function Home() {
  return (
    <div className="">
      <div className="py-10">
        <p className="text-[#946f43] text-4xl text-center  font-semibold font-comfortaa pt-10 ">
          AIGuruKul
        </p>
        <p className="text-center font-roboto">
          Empowering Minds, Envisioning the Future
        </p>
      </div>

      {/* First Project */}

      <div className="lg:flex lg:flex-row w-fit lg:m-24 lg:rounded-lg p-5">
        {/* Image of Project */}
        <Image
          src="https://img1.wsimg.com/isteam/stock/6962/:/cr=t:0%25,l:0%25,w:100%25,h:100%25"
          width={500}
          height={500}
          className="lg:w-1/2 rounded-lg m-auto w-svw "
          alt="AIGuruKul"
        />
        {/* Buttons and Dec */}
        <div className="lg:w-1/2 h-full m-auto text-black">
          <p className="text-4xl font-josefinSans font-medium text-center mt-10 lg:mt-0">
            SPEEKAR
          </p>
          <p className="font-josefinSans font-medium text-center lg:mx-10 my-5 text-lg">
            <b>Keyword Augmented Retrieval (KAR):</b> <br />
            Novel framework for Information Retrieval integrated with speech
            interface
          </p>
          <div className="flex flex-row justify-center">
            <a href="https://github.com/amaze18/speeKAR">
            <GithubButton />
            </a>
            <a href="https://arxiv.org/abs/2310.04205">
            <LearnMoreButton />
            </a>
          </div>
        </div>
      </div>

      {/* Second Project */}

      <div className="mt-20">
        <p className="text-[#946f43] text-3xl text-center font-semibold font-roboto pt-10 ">
          RAGBOT-EXTENSIONS-LLAMAINDEX
        </p>
        <div className="lg:mt-5 lg:flex flex-row w-full lg:p-32 rounded-lg p-5 pt-10">
          {/* Mobile Image of Project */}
          <Image
            src="https://img1.wsimg.com/isteam/stock/WVDERZr/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300"
            width={500}
            height={500}
            className="lg:w-1/2 rounded-lg block lg:hidden w-full" 
            alt="AIGuruKul"
          />
          {/* Button and Dec */}
          <div className="lg:w-1/2 h-full m-auto text-black lg:pr-5">
            <p className="text-2xl font-josefinSans font-medium text-center mt-5">
              RAGBOT-EXTENSIONS-LLAMAINDEX
            </p>
            <p className=" font-josefinSans font-medium lg:pr-10 my-5 text-lg text-center">
              <b>The standard Lorem Ipsum passage :</b> <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex flex-row justify-center">
              <a href="https://github.com/amaze18/RAGbot-Extensions-LlamaIndex">
              <GithubButton />
              </a>
              <LearnMoreButton />
            </div>
          </div>
          {/* Image of Project */}
          <Image
            src="https://img1.wsimg.com/isteam/stock/WVDERZr/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300"
            width={500}
            height={500}
            className="w-1/2 rounded-lg hidden lg:block" 
            alt="AIGuruKul"
          />
        </div>
      </div>

      {/* Third Project */}
      {/* RAGBOT-OPENSOURCE-COMPARISION */}

      <div className="mt-20">
        <p className="text-[#946f43] text-3xl text-center font-semibold font-roboto pt-10 ">
          RAGBOT-EXTENSIONS-LLAMAINDEX
        </p>
        <div className="lg:mt-5 lg:flex flex-row w-full lg:p-32 rounded-lg p-5 pt-10">
          {/* Mobile Image of Project */}
          <Image
            src="https://img1.wsimg.com/isteam/stock/WVDERZr/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300"
            width={500}
            height={500}
            className="lg:w-1/2 rounded-lg block lg:hidden w-full" 
            alt="AIGuruKul"
          />
          {/* Image of Project */}
          <Image
            src="https://img1.wsimg.com/isteam/stock/WVDERZr/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300"
            width={500}
            height={500}
            className="w-1/2 rounded-lg hidden lg:block" 
            alt="AIGuruKul"
          />
          {/* Button and Dec */}
          <div className="lg:w-1/2 h-full m-auto text-black lg:pl-10">
            <p className="text-2xl font-josefinSans font-medium text-center mt-5">
              RAGBOT-EXTENSIONS-LLAMAINDEX
            </p>
            <p className=" font-josefinSans font-medium lg:pr-10 my-5 text-lg text-center">
              <b>The standard Lorem Ipsum passage :</b> <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex flex-row justify-center">
              <a href="https://github.com/amaze18/RAGbot-Extensions-LlamaIndex">
              <GithubButton />
              </a>
              <LearnMoreButton />
            </div>
          </div>
          
        </div>
      </div>

      {/* VIDYARANG */}
      <div className="mt-20">
        <p className="text-[#946f43] text-4xl text-center font-semibold font-roboto pt-10 ">
          VIDYARANG
        </p>
        <div className="lg:flex flex-row mt-20 md:m-20">
          <div className="lg:w-1/2">
            <iframe
              width="600"
              height="400"
              src="https://www.youtube.com/embed/V6N9JMV6qGo"
              allowFullScreen
              className="m-auto w-full p-5"
            ></iframe>

            <div className="lg:mt-10 mx-20">
              <p className="text-center text-3xl font-josefinSans">
                Platform demo
              </p>
              <p className="text-center font-josefinSans mt-5">
                Want to learn how to use our VidyaRANG platform ? Watch this
                video our team has created.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 mt-10 lg:mt-0">
            {/* https://www.youtube.com/embed/u4R7U8jYDC0 */}
            <iframe
              width="600"
              height="400"
              src="https://www.youtube.com/embed/u4R7U8jYDC0"
              allowFullScreen
              className="m-auto w-full p-5 "
            ></iframe>
            <div className="lg:mt-10 mx-20">
              <p className="text-center text-3xl font-josefinSans">
                Indic language demo
              </p>
              <p className="text-center font-josefinSans mt-5">
                Did you know VidyaRANG accepts different indic languages in the
                prompt ? Check it out in the video our team has created.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MEET THE TEAM */}
      <div className="lg:m-28">
        <p className="text-[#946f43] text-4xl text-center font-semibold font-roboto pt-[50px] ">
          MEET THE TEAM
        </p>
        <div className=" mt-20 ">
          {/* Members */}
          <div className="lg:flex lg:flex-row justify-around">
            <div className="">
              <Image
                src="https://img1.wsimg.com/isteam/ip/25e68cdc-a32c-47cf-adea-9e8341df0131/Anupam%20purwar%20photo.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:365,h:365,cg:true "
                width={300}
                height={300}
                className="rounded-full m-auto"
                alt="AIGuruKul"
              />
              <p className="text-center mt-10 font-roboto text-xl font-bold">
                Mr.Anupam Purwar (mentor)
              </p>
              <p className="text-center mt-2 font-josefinSans">
                Senior Research Scientist @ Amazon | ISB | IISc I BITS Pilani
              </p>
            </div>
            <div className="">
              <Image
                src="https://img1.wsimg.com/isteam/ip/25e68cdc-a32c-47cf-adea-9e8341df0131/Rahul%20sundar%20photo.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:365,h:365,cg:true"
                width={300}
                height={300}
                className="rounded-full m-auto"
                alt="AIGuruKul"
              />
              <p className="text-center mt-10 font-roboto text-xl font-bold">
                Mr.Rahul Sundar (mentor/volunteer)
              </p>
              <p className="text-center mt-2 font-josefinSans"></p>
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-4 mt-20">
            {teamsData.map((member) => {
              return (
                <div className="lg:m-10 mt-10" key={member.name}>
                  <Image
                    src={member.img}
                    width={200}
                    height={200}
                    className="rounded-full m-auto "
                    alt="AIGuruKul"
                  />
                  <p className="text-center mt-10 font-roboto text-xl font-medium">
                    {member.name}
                  </p>
                  <div className="flex flex-row justify-center mt-5 w-10 m-auto">
                    <a href={member.github} className="m-auto">
                      <svg
                        className="w-8 h-8 me-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a href={member.linkedin} className="m-auto ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        width="48px"
                        height="48px"
                      >
                        <path
                          fill="#0078d4"
                          d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
                        />
                        <path
                          d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
                          opacity=".05"
                        />
                        <path
                          d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
                          opacity=".07"
                        />
                        <path
                          fill="#fff"
                          d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* RESEARCH PAPERS */}

      <div className="mt-20">
        <p className="text-[#946f43] text-4xl text-center font-semibold font-roboto pt-[50px]">
          RESEARCH PAPERS
        </p>
        <p className="text-center font-josefinSans mt-10 m-5">
          These are the papers that we are currently working on or have been
          published by our team
        </p>
        <div className="lg:flex justify-center lg:mt-5 bg-slate-300 max-w-[800px] md:m-auto rounded-lg mb-20 m-5">
          <p className="m-auto font-medium p-5 text-center">
            Keyword Augmented Retrieval research paper(PDF)
          </p>
          <div className="flex flex-col justify-center">
          <a
            href="https://img1.wsimg.com/blobby/go/25e68cdc-a32c-47cf-adea-9e8341df0131/downloads/Anupam%20Puwar%20research%20paper%20keyword%20Augmented%20.pdf?ver=1716633980976"
            target="_blank"
            className="font-josefinSans m-auto"
          >
            <button
              type="button"
              className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 m-5 "
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="1em"
                height="1em"
                data-ux="Icon"
                data-aid="download"
                className="x-el x-el-svg c1-1 c1-2 c1-3n c1-1i c1-3q c1-b c1-c c1-d c1-e c1-f c1-g mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M10.87 4h2v8.048l3.187-3.185 1.414 1.414-5.598 5.597-5.63-5.596 1.41-1.418 3.218 3.198V4zm6.991 11.992h2v4H4v-4h2v2h11.861v-2z"
                ></path>
              </svg>
              Download PDF
            </button>
          </a>
          </div>
         
        </div>
      </div>

      {/* Testimonials */}

      <div>
        <p className="text-[#946f43] text-4xl text-center font-semibold font-roboto pt-[50px]">
          Our Testimonials
        </p>
        <div className="mt-20">
          <FancyTestimonialsSlider testimonials={testimonialData} />
        </div>
      </div>

      {/* Contact Us */}

      <div className="text-center pb-32 mt-28">
        <p className="text-[#946f43] text-4xl text-center font-semibold font-roboto pt-[50px]">
          CONTACT US
        </p>
        <p className="mt-10 font-josefinSans text-2xl">
          Any Questions or Comments?
        </p>
        <p className=" font-josefinSans">Contact us if you want to know more</p>

        <p className="text-[#946f43] text-3xl text-center  font-semibold font-comfortaa pt-10">
          AIGuruKul
        </p>
        <p className=" font-josefinSans">
          BITS Pilani - Pilani Campus, Rajasthan, India
        </p>
        <p className=" font-josefinSans mb-5">IIT Madras, Chennai, India</p>

        <a
          href="mailto:vidyarang.ai@gmail.com"
          className="text-[#946f43] font-comfortaa "
        >
          vidyarang.ai@gmail.com
        </a>
      </div>

      {/* End of Page */}
    </div>
  );
}
