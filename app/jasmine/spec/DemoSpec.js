"use strict";

// need this in order to bring async/await feature into the browse
import 'babel-polyfill';

import { HomePageOject } from './HomePageObject';
// https://testing-library.com/docs/dom-testing-library/api-queries

describe("DemoSpec", function () {

  beforeEach(function () {
  });

  it("should have navigation bar", async () => {
    const hpo = await new HomePageOject();
    const navBar = hpo.getNavBar();

    expect(navBar).not.toBeNull();

  });

  it("should have utilities", async () => {
    const hpo = await new HomePageOject();
    expect(hpo.getUtilities()).not.toBeNull();
    hpo.getUtilities().click();
  });

  it("should have cypress api", async () => {
    const hpo = await new HomePageOject();

    expect(hpo.getCypressApi()).not.toBeNull();
    hpo.getCypressApi().click()
  });

  it("should have commands", async () => {
    const hpo = await new HomePageOject();

    expect(hpo.getCommands()).not.toBeNull();
    hpo.getCommands().click()
  });
});
