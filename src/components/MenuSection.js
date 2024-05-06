import React from "react";

const Menu = () => {
  return (
    <>
      <div className="m-4">
       

        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 gap-8">
          <div className="border-2 h-full text-left">
            <img src="/Images/EventTypeCard.png" alt="SocialEvents" />
            <span className="text-left">
              <h4 className="font-bold pt-3 pl-2">Social events</h4>
              <p className="p-2">
                Hosting your friends and loved ones should not be a hassle. Let
                us help you bring the flavor to that celebration
              </p>

              <button className="bg-orange-600 text-white border-2 border-orange-600 p-2 m-2 rounded-lg hover:bg-white hover:text-black hover:border-black">
                View more
              </button>
            </span>
          </div>

          <div className="border-2 h-full text-left">
            <img src="/Images/Card3.png" alt="SocialEvents" />
            <span className="text-left">
              <h4 className="font-bold pt-3 pl-2">Meetings</h4>
              <p className="p-2">
                Business meetings, conferences and food. A tale as old as time.
              </p>

              <button className="bg-orange-600 text-white border-2 border-orange-600 p-2 m-2 rounded-lg hover:bg-white hover:text-black hover:border-black">
                View more
              </button>
            </span>
          </div>

          <div className="border-2 h-full text-left">
            <img src="/Images/Card2.png" alt="SocialEvents" />
            <span className="text-left">
              <h4 className="font-bold pt-3 pl-2">Organizations</h4>
              <p className="p-2">
                A wholesome meal for your team? Receptions and holiday parties?
                We’ve got you covered.
              </p>

              <button className="text-left bg-orange-600 text-white border-2 border-orange-600 p-2 m-2 rounded-lg hover:bg-white hover:text-black hover:border-black">
                View more
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
