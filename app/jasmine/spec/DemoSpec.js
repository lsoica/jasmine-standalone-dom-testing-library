"use strict";

// need this in order to bring async/await feature into the browse
import 'babel-polyfill';

import { HomePageOject } from './HomePageObject';
// https://testing-library.com/docs/dom-testing-library/api-queries

describe("DemoSpec", function () {

  beforeEach(function () {
  });

  it("should have navigation bar", async () => {
    const hpo = new HomePageOject();
    const navBar = hpo.getNavBar();

    expect(navBar).not.toBeNull();

  });

  it("should have utilities", async () => {
    const hpo = new HomePageOject();
    const utilities = await hpo.getUtilities();
    expect(utilities).not.toBeNull();
    utilities.click();
  });

  it("should have cypress api", async () => {
    const hpo = new HomePageOject();

    const cypressAPI = await hpo.getCypressApi();
    expect(cypressAPI).not.toBeNull();
    cypressAPI.click()
  });

  it("should have commands", async () => {
    const hpo = new HomePageOject();

    const commands = await hpo.getCommands();
    expect(commands).not.toBeNull();
    commands.click()
  });
});
