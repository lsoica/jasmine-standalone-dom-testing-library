"use strict";

// need this in order to bring async/await feature into the browse
import 'babel-polyfill';

import { HomePageOject } from './HomePageObject';
// https://testing-library.com/docs/dom-testing-library/api-queries

describe("DemoSpec", function () {
  var hpo;

  beforeAll(async function () {
    hpo = await new HomePageOject();
  });

  it("should have navigation bar", async () => {
    const navBar = hpo.getNavBar();
    expect(navBar).not.toBeNull();

  });

  it("should have utilities", async () => {
    expect(hpo.getUtilities()).not.toBeNull();
    hpo.getUtilities().click();
  });

  it("should have cypress api", async () => {
    expect(hpo.getCypressApi()).not.toBeNull();
    hpo.getCypressApi().click()
  });

  it("should have commands", async () => {
    expect(hpo.getCommands()).not.toBeNull();
    hpo.getCommands().click()
  });
});
