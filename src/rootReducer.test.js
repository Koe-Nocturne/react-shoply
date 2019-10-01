import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import rootReducer from "./rootReducer";

describe("ADDITEM works", function() {
  test("successfully added item", function() {
    const action = { type: "ADDITEM", payload: "cow" };
    const INTIALSTATE = { cart: [], products: ["hello"] };
    expect(rootReducer(INTIALSTATE, action)).toEqual({
      cart: ["cow"],
      products: ["hello"]
    });
  });
});

describe("DELETEITEM works", function() {
  test("successfully added item", function() {
    const action = { type: "DELETEITEM", payload: "cow" };
    const INTIALSTATE = {
      cart: [{ cow: { bro: "koe" } }, { ushi: { bro: "koe" } }],
      products: ["hello"]
    };
    expect(rootReducer(INTIALSTATE, action)).toEqual({
      cart: [{ ushi: { bro: "koe" } }],
      products: ["hello"]
    });
  });
});
