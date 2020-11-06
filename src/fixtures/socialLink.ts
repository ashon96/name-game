import { makeFixture } from "make-fixture";
import { SocialLink } from "utilities/types";

/**
 * Instantiates a SocialLink object with these given defaults
 * and can be overriden with the overrides parameter
 * @param overrides parameters to override the defaults with
 */
export const makeSocialLinkFixture = (overrides?: Partial<SocialLink>) => {
  const defaults: SocialLink = {
    callToAction: "",
    type: "",
    url: "",
  };
  return makeFixture(defaults, overrides);
};
