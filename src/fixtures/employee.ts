import { makeFixture } from "make-fixture";
import { Employee } from "utilities/types";
import { makeHeadShotFixture } from "./headShot";
import { makeSocialLinkFixture } from "./socialLink";

export const makeEmployeeFixture = (overrides?: Partial<Employee>) => {
  const defaults: Employee = {
    firstName: "",
    headShot: makeHeadShotFixture(),
    id: "",
    jobTitle: "",
    lastName: "",
    slug: "",
    socialLinks: [makeSocialLinkFixture()],
    type: "",
  };
  return makeFixture(defaults, overrides);
};
