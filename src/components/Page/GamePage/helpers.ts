import Axios from "axios";
import { makeEmployeeFixture } from "../../../fixtures/employee";
import { makeHeadShotFixture } from "../../../fixtures/headShot";
import { makeSocialLinkFixture } from "../../../fixtures/socialLink";
import { Employee, HeadShot, SocialLink } from "../../../utilities/types";

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

const decodeEmployees = (apiData: any[]): Employee[] =>
  apiData.map((item) =>
    omitUndefinedValues(
      makeEmployeeFixture({
        firstName: item.firstName,
        headShot: decodeHeadShot(item.headshot),
        id: item.id,
        jobTitle: item.jobTitle,
        lastName: item.lastName,
        slug: item.slug,
        socialLinks: decodeSocialLinks(item.socialLinks),
      })
    )
  );

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

const decodeSocialLinks = (apiSocialLinks: any[]): SocialLink[] =>
  apiSocialLinks.map((item) =>
    omitUndefinedValues(
      makeSocialLinkFixture({
        callToAction: item.callToAction,
        type: item.type,
        url: item.url,
      })
    )
  );

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
