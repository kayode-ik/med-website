import amenHero from "../assets/amenHero.svg";
import "../styles/amenitiesStyles.css";

import room1 from "../assets/room1.svg";
import room2 from "../assets/room2.svg";

import outroom1 from "../assets/outroom1.svg";
import outroom2 from "../assets/outroom2.svg";

import comm1 from "../assets/comm1.svg";
import comm2 from "../assets/comm2.svg";
import Footer from "../component/Footer";

function AmenitiesPage() {
  return (
    <div className="amenContainer">
      {/* Hero Section */}
      {/* Hero Section with text */}
      <div
        // className="amenSection bg-cover bg-center "
        className="amenSection bg-cover "
        style={{ backgroundImage: `url(${amenHero})`, height: "30vh" }}
      >
        {/* <div className="absolute inset-0 bg-black opacity-50  z-0"></div> */}
        <div className="amenText">
          <h2 className="text-center pt-28 text-white font-Bold uppercase text-4xl tracking-wide">
            Amenities
          </h2>
        </div>
      </div>

      {/* indoor section for gallery */}
      <div className="amenIndoorContainer">
        <div className="amenIndoorWrapper">
          <h3 className="capitalize text-xl font-semibold tracking-wide ">
            Indoor
          </h3>
          <div className="amenIndoor flex-item">
            {/* indoor gallery */}
            <div className="amenIndoorGallery img1">
              {/* gallery item */}
              <div className="amenIndoorItem">
                <img src={room1} alt="" />
              </div>
              <div className="amencontent">
                <h4 className="text-sm font-medium tracking-wide">
                  Private Rooms
                </h4>
                <p className="text-xs font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  vel tincidunt nisi.
                </p>
              </div>
            </div>
            <div className="amenIndoorGallery img2">
              {/* gallery item */}
              <div className="amenIndoorItem">
                <img src={room2} alt="" />
              </div>
              <div className="amencontent">
                <h4 className="text-sm font-medium tracking-wide">
                  Semi-Private Rooms
                </h4>
                <p className="text-xs font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  vel tincidunt nisi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* outdoor section for gallery */}
      <div className="amenOutdoorContainer">
        <div className="amenOutdoorWrapper">
          <h3 className="capitalize text-xl font-semibold tracking-wide ">
            Outdoor
          </h3>
          <div className="amenOutdoor flex-item">
            {/* Outdoor gallery */}
            <div className="amenOutdoorGallery img1">
              {/* gallery item */}
              <div className="amenOutdoorItem">
                <img src={outroom1} alt="" />
              </div>
              <div className="amencontent">
                <h4 className="text-sm font-medium tracking-wide">
                  Outdoor Spaces
                </h4>
                <p className="text-xs font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  vel tincidunt nisi.
                </p>
              </div>
            </div>
            <div className="amenOutdoorGallery img2">
              {/* gallery item */}
              <div className="amenOutdoorItem">
                <img src={outroom2} alt="" />
              </div>
              <div className="amencontent">
                <h4 className="text-sm font-medium tracking-wide">Gardens</h4>
                <p className="text-xs font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  vel tincidunt nisi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* common areas */}
      <div className="commonAreasContainer">
        <div className="commonAreasWrapper">
          <h3 className="capitalize text-xl font-semibold tracking-wide ">
            Common Areas
          </h3>
          <div className="commonAreas flex-item">
            {/* Outdoor gallery */}
            <div className="commonAreasGallery img1">
              {/* gallery item */}
              <div className="commonAreasItem">
                <img src={comm1} alt="" />
              </div>
            </div>
            <div className="commonAreasGallery img2">
              {/* gallery item */}
              <div className="commonAreasItem">
                <img src={comm2} alt="" />
              </div>
            </div>
          </div>
          <div className="amencontent">
            <p className="text-xs font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
              tincidunt nisi.
            </p>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default AmenitiesPage;

