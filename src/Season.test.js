import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Season from "./Season";

describe(Season.name, () => {
  beforeAll(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2022, 1, 9));
  });
  it("renders an icon https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80", () => {
    render(<Season name="winter" />);
    expect(
      screen.queryByText(
        "https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
      )
    ).toBeNull();
  });
  it("renders a title Winter", () => {
    render(<Season name="winter" />);
    expect(screen.getByText("Winter")).toBeInTheDocument();
  });
  it("renders a text 58 days ago", () => {
    render(<Season name="winter" />);
    expect(screen.queryByText("58 days ago")).toBeNull();
  });
  afterAll(() => {
    jest.useRealTimers();
  });
});
