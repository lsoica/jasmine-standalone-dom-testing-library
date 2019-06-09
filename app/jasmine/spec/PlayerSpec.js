"use strict";

import 'babel-polyfill';

import {
  getByText,
  getAllByText,
  getByDisplayValue,
  // Tip: all queries are also exposed on an object
  // called "queries" which you could import here as well
  wait,
  getByLabelText,
  waitForElement,
  getByRole,
} from '@testing-library/dom'

describe("Player", function () {

  beforeEach(function () {
  });

  it("should be able to do some DOM stuff", async () => {
    let iframe = document.getElementsByClassName("frame")[0];
    let container = iframe.contentWindow.document.body;

    let navBar = container.getElementsByClassName('nav navbar-nav')[0];

    const utilities = await waitForElement(() => getByText(navBar, "Utilities"))
    utilities.click();
    const cypressAPI = await waitForElement(() => getByText(navBar, "Cypress API"))
    cypressAPI.click()

    const commands = await waitForElement(() => getByRole(navBar, "button"))
    commands.click()
  });

});
