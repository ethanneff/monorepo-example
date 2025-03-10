import { describe, expect, it, jest } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react-native";
import React from "react";
import { Button } from "../Button";

describe("button", () => {
  it("renders correctly", () => {
    expect.assertions(1);

    render(<Button text="Click me" />);

    expect(screen.getByText("Click me")).toBeDefined();
  });

  it("calls onClick when clicked", () => {
    expect.assertions(1);

    const onClick = jest.fn();
    render(<Button onClick={onClick} text="Click me" />);
    fireEvent.press(screen.getByText("Click me"));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
