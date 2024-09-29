import React from "react";

import IconVersions from "../assets/icon_versions.png";
import IconOrganizations from "../assets/icon_organizations.png";
import IconAuthenticate from "../assets/icon_authenticate.png";

function Features() {
  return (
    <div className="flex flex-col items-center space-x-4 mt-44">
      <div>
        <div className="flex flex-col">
          <div>
            <div className="flex flex-row mb-28">
              <div>
                <img
                  src={IconVersions}
                  alt="Icon Versions Image"
                  className="size-28 mr-8"
                />
              </div>
              <div>
                <h1 className="font-black text-2xl mb-4">Using Abstract</h1>
                <p className="w-3/5 text-xl text-zinc-900 mb-5">
                  Abstract lets you manage, version, and document your designs
                  in one place.
                </p>
                <a
                  href="#"
                  className="text-xl text-cyan-600 hover:underline hover:text-cyan-500 duration-300"
                >
                  Learn More →
                </a>
              </div>
            </div>
            <div className="flex flex-row mb-28">
              <div>
                <img
                  src={IconOrganizations}
                  alt="Icon Versions Image"
                  className="size-28 mr-8"
                />
              </div>
              <div>
                <h1 className="font-black text-2xl mb-4 w-1/2">
                  Manage organizations, teams, and projects
                </h1>
                <p className="w-1/2 text-xl text-zinc-900 mb-5">
                  Use Abstract organizations, teams, and projects to organize
                  your people and your work.
                </p>
                <a
                  href="#"
                  className="text-xl text-cyan-600 hover:underline hover:text-cyan-500 duration-300"
                >
                  Learn More →
                </a>
              </div>
            </div>
            <div className="flex flex-row mb-28">
              <div>
                <img
                  src={IconAuthenticate}
                  alt="Icon Versions Image"
                  className="size-28 mr-8"
                />
              </div>
              <div>
                <h1 className="font-black text-2xl mb-4 w-1/2">
                  Authenticate to Abstract
                </h1>
                <p className="w-3/5 text-xl text-zinc-900 mb-5">
                  Set up and configure SSO, SCIM, and Just-in-Time provisioning.
                </p>
                <a
                  href="#"
                  className="text-xl text-cyan-600 hover:underline hover:text-cyan-500 duration-300"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
