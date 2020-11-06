import { shallow } from "enzyme";
import { makeEmployeeFixture } from "fixtures/employee";
import React from "react";
import ProfilePhoto from ".";

describe("ProfilePhoto", () => {
  test("Verify the img tag renders properly", () => {
    const employee = makeEmployeeFixture();
    const dom = shallow(
      <ProfilePhoto
        hasPhotoBeenClicked={false}
        employee={employee}
        isCorrectGuess={jest.fn()}
        setHasPhotoBeenClicked={jest.fn()}
        hasRoundBeenClicked={false}
        onClick={jest.fn()}
      />
    );
    expect(
      dom.containsMatchingElement(
        <img
          src={`${employee.headShot.url}`}
          height={260}
          width={260}
          alt={`${employee.id}`}
        ></img>
      )
    ).toBe(true);
    expect(dom.find("img").prop("className")).toHaveLength(0);
  });

  test("Verify the img tag renders disabled when the round has been clicked, but the photo has not been clicked", () => {
    const employee = makeEmployeeFixture();
    const dom = shallow(
      <ProfilePhoto
        hasPhotoBeenClicked={false}
        employee={employee}
        isCorrectGuess={jest.fn()}
        setHasPhotoBeenClicked={jest.fn()}
        hasRoundBeenClicked={true}
        onClick={jest.fn()}
      />
    );
    expect(dom.find("img").prop("className")).toContain("disabled-guess");
  });
});
