import React from "react";
import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";

import supportBgImage from "../images/staff.jpg";

const Supports = () => {
  return (
    <section>
      <div>
        <img src={supportBgImage} alt="Support Staff" />
      </div>
      <div>
        <div>
          <h2>Support</h2>
          <h3>Finding the right team</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            accusamus quas quis perspiciatis vero quisquam, expedita hic ex
            dicta vitae impedit nam repellendus, nisi tenetur magnam eligendi at
            eos quibusdam?
          </p>
        </div>

        <div>
          <div>
            <div>
              <PhoneIcon />
              <h4>Sales</h4>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
              perspiciatis beatae ut cupiditate enim vitae impedit, nostrum quas
              esse. Quam.
            </div>
            <div>
              <p>
                Contact Us <ArrowSmRightIcon />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Supports;
