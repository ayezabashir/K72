import { Link } from "react-router-dom";

const FullScreenNavBar = ({ toggleFullScreenNav }) => {
  return (
    <div className="relative bg-black text-white h-screen w-screen z-10">
      <div className="p-4 flex justify-between items-center border-b border-gray-400">
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="103"
            height="44"
            viewBox="0 0 103 44"
          >
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
            ></path>
          </svg>
        </Link>
        <div>
          <button
            type="button"
            className="close cursor-pointer absolute top-10 right-0 leading-0"
            aria-label="Close"
            onClick={toggleFullScreenNav}
          >
            <span
              className="text-[200px] leading-0 font-thin"
              aria-hidden="true"
            >
              &times;
            </span>
          </button>
        </div>
      </div>
      <div>
        <h1>WORK</h1>
        <div>
          <h2>SEE EVERYTHING</h2>
          <img
            src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
            alt=""
          />
          <h2>SEE EVERYTHING</h2>
          <img
            src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
            alt=""
          />
        </div>
        <div>
          <h2>SEE EVERYTHING</h2>
          <img
            src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
            alt=""
          />
          <h2>SEE EVERYTHING</h2>
          <img
            src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
            alt=""
          />
        </div>
      </div>
      <div>
        <h1>AGENCY</h1>
        <div>
          <h2>KNOW US</h2>
          <img
            src="https://k72.ca/images/teamMembers/blank_copie_2.jpg?w=640&h=290&s=b6f8d41383b2ee7821dcaec8b68295ec"
            alt=""
          />
          <h2>KNOW US</h2>
          <img
            src="https://k72.ca/images/teamMembers/blank_copie_2.jpg?w=640&h=290&s=b6f8d41383b2ee7821dcaec8b68295ec"
            alt=""
          />
        </div>
        <div>
          <h2>KNOW US</h2>
          <img
            src="https://k72.ca/images/teamMembers/blank_copie_2.jpg?w=640&h=290&s=b6f8d41383b2ee7821dcaec8b68295ec"
            alt=""
          />
          <h2>KNOW US</h2>
          <img
            src="https://k72.ca/images/teamMembers/blank_copie_2.jpg?w=640&h=290&s=b6f8d41383b2ee7821dcaec8b68295ec"
            alt=""
          />
        </div>
      </div>
      <div>
        <h1>CONTACT</h1>
        <div>
          <h2>SEND US A FAX</h2>
          <img src="images/heart_icon.png" alt="" />
          <h2>SEND US A FAX</h2>
          <img src="images/heart_icon.png" alt="" />
        </div>
        <div>
          <h2>SEND US A FAX</h2>
          <img src="images/heart_icon.png" alt="" />
          <h2>SEND US A FAX</h2>
          <img src="images/heart_icon.png" alt="" />
        </div>
      </div>
      <div>
        <h1>BLOG</h1>
        <div>
          <h2>READ ARTICLES</h2>
          <img
            src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a"
            alt=""
          />
          <h2>READ ARTICLES</h2>
          <img
            src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
            alt=""
          />
        </div>
        <div>
          <h2>READ ARTICLES</h2>
          <img
            src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a"
            alt=""
          />
          <h2>READ ARTICLES</h2>
          <img
            src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
            alt=""
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default FullScreenNavBar;
