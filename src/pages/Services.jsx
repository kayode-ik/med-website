import "../styles/servicesStyles.css";
import ddaServiceHero from "../assets/ddaService.svg";

import activity1 from "../assets/activity1.svg";
import activity2 from "../assets/activity2.svg";
import activity3 from "../assets/activity3.svg";
import activity4 from "../assets/activity4.svg";
import Footer from "../component/Footer";

const ServicesPage = () => {
  return (
    <>
      {/* Hero Section */}
      {/* Hero Section with text */}
      <div
        className="serviceSection bg-cover bg-center "
        style={{ backgroundImage: `url(${ddaServiceHero})`, height: "30vh" }}
      >
        {/* <div className="absolute inset-0 bg-black opacity-50  z-0"></div> */}
        <div className="serviceText">
          <h2 className="text-center pt-28 text-white font-Bold uppercase text-4xl tracking-wide">
            Services
          </h2>
        </div>
      </div>

      {/* List Services sectiion */}
      <div className="serviceListContainer">
        <div className="serviceListWrapper">
          <div className="serviceList flex-item">
            {/* Service 1 */}
            <div className="serviceItem">
              <h3 className="capitalize text-lg font-semibold tracking-wide">
                Residential Services (CLGH)
              </h3>
              <p className="text-xs font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                tincidunt nisi.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed vel tincidunt nisi.
              </p>
              <div className="serviceDetails">
                <h3 className="capitalize text-sm font-medium tracking-wide">
                  Service Details
                </h3>
                <p className="text-xs font-light">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                  reiciendis eveniet animi consequuntur.
                </p>
              </div>
            </div>
            {/* Service 2 */}
            <div className="serviceItem">
              <h3 className="capitalize text-lg font-semibold tracking-wide">
                Residential care (day and hourly)
              </h3>
              <p className="text-xs font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                tincidunt nisi.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed vel tincidunt nisi.
              </p>
              <div className="serviceDetails">
                <h3 className="capitalize text-sm font-medium tracking-wide">
                  Service Details
                </h3>
                <p className="text-xs font-light">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                  reiciendis eveniet animi consequuntur.
                </p>
              </div>
            </div>
            {/* Service 3 */}
            <div className="serviceItem">
              <h3 className="capitalize text-lg font-semibold tracking-wide">
                Community Development
              </h3>
              <p className="text-xs font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                tincidunt nisi.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed vel tincidunt nisi.
              </p>
              <div className="serviceDetails">
                <h3 className="capitalize text-sm font-medium tracking-wide">
                  Service Details
                </h3>
                <p className="text-xs font-light">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                  reiciendis eveniet animi consequuntur.
                </p>
              </div>
            </div>
            {/* Service 4 */}
            <div className="serviceItem">
              <h3 className="capitalize text-lg font-semibold tracking-wide">
                Personal Support
              </h3>
              <p className="text-xs font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                tincidunt nisi.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed vel tincidunt nisi.
              </p>
              <div className="serviceDetails">
                <h3 className="capitalize text-sm font-medium tracking-wide">
                  Service Details
                </h3>
                <p className="text-xs font-light">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                  reiciendis eveniet animi consequuntur.
                </p>
              </div>
            </div>
            {/* Service 5 */}
            <div className="serviceItem">
              <h3 className="capitalize text-lg font-semibold tracking-wide">
                Nurse Services
              </h3>
              <p className="text-xs font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                tincidunt nisi.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed vel tincidunt nisi.
              </p>
              <div className="serviceDetails">
                <h3 className="capitalize text-sm font-medium tracking-wide">
                  Service Details
                </h3>
                <p className="text-xs font-light">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                  reiciendis eveniet animi consequuntur.
                </p>
              </div>
            </div>
            {/* Service 6 */}
            <div className="serviceItem">
              <h3 className="capitalize text-lg font-semibold tracking-wide">
                Transportation Services
              </h3>
              <p className="text-xs font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                tincidunt nisi.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed vel tincidunt nisi.
              </p>
              <div className="serviceDetails">
                <h3 className="capitalize text-sm font-medium tracking-wide">
                  Service Details
                </h3>
                <p className="text-xs font-light">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                  reiciendis eveniet animi consequuntur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recreational and Social Activities */}
      <div className="recreationalSocialContainer">
        <div className="recreationalSocialWrapper">
          <div className="recreationalSocial flex-item">
            {/* Recreational Activities */}
            <div className="recreationalSocialItem">
              <h3 className="capitalize text-lg font-semibold tracking-wide text-center">
                Recreational Activities & Social Activites
              </h3>
              <div className="recreationalSocialDetails">
                <div className="activity-FlexItem">
                  {/* activity 1 */}
                  <div className="activity-item">
                    {/* image */}
                    <img src={activity1} alt="" />
                    {/* activity name */}
                    <div className="activity-content">
                      <h4 className="text-sm font-medium tracking-wide">
                        Yoga
                      </h4>
                      {/* activity text / content */}
                      <p className="text-xs font-light">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed vel tincidunt nisi.
                      </p>
                    </div>
                  </div>
                  {/* activity 2 */}
                  <div className="activity-item">
                    {/* image */}
                    <img src={activity2} alt="" />
                    {/* activity name */}
                    <div className="activity-content">
                      <h4 className="text-sm font-medium tracking-wide">
                        Board Games
                      </h4>
                      {/* activity text / content */}
                      <p className="text-xs font-light">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed vel tincidunt nisi.
                      </p>
                    </div>
                  </div>
                  {/* activity 3 */}
                  <div className="activity-item">
                    {/* image */}
                    <img src={activity3} alt="" />
                    {/* activity name */}
                    <div className="activity-content">
                      <h4 className="text-sm font-medium tracking-wide">
                        Gardening
                      </h4>
                      {/* activity text / content */}
                      <p className="text-xs font-light">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed vel tincidunt nisi.
                      </p>
                    </div>
                  </div>
                  {/* activity 4 */}
                  <div className="activity-item">
                    {/* image */}
                    <img src={activity4} alt="" />
                    {/* activity name */}
                    <div className="activity-content">
                      <h4 className="text-sm font-medium tracking-wide">
                        Indoor Games
                      </h4>
                      {/* activity text / content */}
                      <p className="text-xs font-light">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed vel tincidunt nisi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default ServicesPage;
