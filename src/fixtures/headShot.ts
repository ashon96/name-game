import { makeFixture } from "make-fixture";
import { HeadShot } from "utilities/types";

/**
 * Instantiates an HeadShot object with these given defaults
 * and can be overriden with the overrides parameter
 * @param overrides parameters to override the defaults with
 */
export const makeHeadShotFixture = (overrides?: Partial<HeadShot>) => {
  const defaults: HeadShot = {
    alt: "",
    height: 0,
    id: "",
    mimeType: "",
    type: "",
    url: "",
    width: 0,
  };
  return makeFixture(defaults, overrides);
};
