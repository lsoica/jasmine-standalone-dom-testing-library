"use strict";
import 'babel-polyfill';

import { HomePageOject } from './HomePageObject';
import { wait } from '@testing-library/dom';
// https://testing-library.com/docs/dom-testing-library/api-queries

describe("WindowsSpec", function () {

  beforeEach(async function () {
    wait(() => expect(document).not.toBeNull()).then(() => {
      // global iframe
      let iframe = document.getElementsByClassName("frame")[0];
      iframe.location = 'http://localhost:8080/commands/window';
      let container = iframe.contentWindow.document.body;
  
      this.navBar = container.getElementsByClassName('nav navbar-nav')[0];
    });

  });

  it('cy.window() - get the global window object', async () => {
    // https://on.cypress.io/window
    let iframe = document.getElementsByClassName("frame")[0];
    await wait(() => expect(iframe.contentWindow.top).not.toBeNull());
  })

  it('cy.document() - get the document object', async () => {
    // https://on.cypress.io/document
    let iframe = document.getElementsByClassName("frame")[0];
    await wait(() => expect(iframe.contentDocument.charset).not.toBeNull());
    expect(iframe.contentDocument.charset).toBe('UTF-8')
  })

  it('cy.title() - get the title', async () => {
    // https://on.cypress.io/title
    let iframe = document.getElementsByClassName("frame")[0];
    await wait(() => expect(iframe.contentDocument.title).not.toBeNull());
    expect(iframe.contentDocument.title.indexOf('Kitchen Sink') !== -1).toBe(true)
  })
});
