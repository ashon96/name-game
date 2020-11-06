import React from "react";
import { shallow } from "enzyme";
import Button from ".";

describe("Button", () => {
  test("Verify Button renders correctly", () => {
    const onClick = jest.fn();
    const dom = shallow(<Button onClick={onClick} buttonText="button text" />);

    expect(
      dom.containsMatchingElement(
        <button onClick={onClick}>{"button text"}</button>
      )
    ).toBe(true);
  });
});
