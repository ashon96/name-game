import { makeFixture } from "make-fixture";
import { HeadShot } from "utilities/types";

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
