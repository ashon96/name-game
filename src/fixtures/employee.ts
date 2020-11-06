import { makeFixture } from "make-fixture";
import { Employee } from "utilities/types";
import { makeHeadShotFixture } from "./headShot";
import { makeSocialLinkFixture } from "./socialLink";

/**
 * Instantiates an Employee object with these given defaults
 * and can be overriden with the overrides parameter
 * @param overrides parameters to override the defaults with
 */
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
