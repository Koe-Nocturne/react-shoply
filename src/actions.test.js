import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { addItem, deleteItem } from "./actions";

describe("puts item in payload", function() {
  test("additem works", function() {
    expect(addItem("cow")).toEqual({ type: "ADDITEM", payload: "cow" });
  });
});

describe("puts item in payload", function() {
  test("deleteitem works", function() {
    expect(deleteItem("123")).toEqual({ type: "DELETEITEM", payload: "123" });
  });
});
