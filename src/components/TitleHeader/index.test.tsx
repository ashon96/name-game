import { shallow } from "enzyme";
import React from "react";
import TitleHeader from ".";

describe("TitleHeader", () => {
  test("Verify the proper image renders", () => {
    const dom = shallow(<TitleHeader />);
    expect(dom.find("img").prop("alt")).toBe("title-text");
  });
});
