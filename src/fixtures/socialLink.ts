import { makeFixture } from "make-fixture";
import { SocialLink } from "../utilities/types";

export const makeSocialLinkFixture = (overrides?: Partial<SocialLink>) => {
  const defaults: SocialLink = {
    callToAction: "",
    type: "",
    url: "",
  };
  return makeFixture(defaults, overrides);
};
