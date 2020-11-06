import Axios from "axios";
import { makeEmployeeFixture } from "fixtures/employee";
import { makeSocialLinkFixture } from "fixtures/socialLink";
import { Employee, HeadShot, SocialLink } from "./types";
import { makeHeadShotFixture } from "fixtures/headShot";

/**
 * Fetches the list of employees via the provided url below
 * and decodes/formats the data for the codebase to use
 * via decodeEmployees
 */
export const fetchEmployees = async (): Promise<Employee[]> => {
  const url = "https://willowtreeapps.com/api/v1.0/profiles";

  try {
    const response = await Axios.get(url);
    return decodeEmployees(response.data);
  } catch (error) {
    console.log(error);
    return [];
  }
};

/**
 * Sanitizes the api data by mapping it to the Employee interface
 * for the codebase to use and removes any undefined fields
 * @param apiData the data fetched
 */
const decodeEmployees = (apiData: any[]): Employee[] =>
  apiData.map((apiEmployee) =>
    omitUndefinedValues(
      makeEmployeeFixture({
        firstName: apiEmployee.firstName,
        headShot: decodeHeadShot(apiEmployee.headshot),
        id: apiEmployee.id,
        jobTitle: apiEmployee.jobTitle,
        lastName: apiEmployee.lastName,
        slug: apiEmployee.slug,
        socialLinks: decodeSocialLinks(apiEmployee.socialLinks),
      })
    )
  );

/**
 * Santizies the api head shot data by mapping it to the
 * HeadShot interface for the codebase to use and remove any undefined fields
 * @param apiHeadShot the headshot data fetched
 */
const decodeHeadShot = (apiHeadShot: any): HeadShot =>
  omitUndefinedValues(
    makeHeadShotFixture({
      alt: apiHeadShot.alt,
      height: apiHeadShot.height,
      id: apiHeadShot.id,
      mimeType: apiHeadShot.mimeType,
      type: apiHeadShot.type,
      url: apiHeadShot.url,
      width: apiHeadShot.width,
    })
  );

/**
 * Sanitizes the api social links data by mapping it to the list
 * of data model Social Links for the codebase to use and remove
 * any undefined fields
 * @param apiSocialLinks the social links data fetched
 */
const decodeSocialLinks = (apiSocialLinks: any[]): SocialLink[] =>
  apiSocialLinks.map((apiSocialLink) =>
    omitUndefinedValues(
      makeSocialLinkFixture({
        callToAction: apiSocialLink.callToAction,
        type: apiSocialLink.type,
        url: apiSocialLink.url,
      })
    )
  );

/**
 * This function will iterate through all the keys of a given object
 * and remove any undefined fields to prevent further room for error
 * in future logic/usage
 * @param object the object to sanitize
 */
export const omitUndefinedValues = <T extends object>(object: T): T => {
  for (const key of Object.keys(object)) {
    const typedKey = key as keyof T;
    const value = object[typedKey] as unknown;

    if (value === undefined) {
      delete object[typedKey];
    }
  }

  return object;
};
