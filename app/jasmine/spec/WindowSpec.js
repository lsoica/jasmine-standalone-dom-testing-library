"use strict";
import 'babel-polyfill';

import { wait } from '@testing-library/dom';
// https://testing-library.com/docs/dom-testing-library/api-queries

describe("WindowsSpec", function () {

  var iframe;
  beforeAll(async function () {
    await wait(() => expect(document).not.toBeNull())
    await wait(() => expect(document.getElementsByClassName("frame")).not.toBeNull())

      // global iframe
    iframe = document.getElementsByClassName("frame")[0];
    iframe.location = 'http://localhost:8080/commands/window';
    await wait(() => expect(document.getElementsByClassName("frame")).not.toBeNull())
    await wait(() => expect(iframe.contentWindow.document.body).not.toBeNull())
    await wait(() => expect(iframe.contentDocument).not.toBeNull())
  });

  it('cy.window() - get the global window object', async () => {
    await wait(() => expect(iframe.contentWindow.top).not.toBeNull());
  })

  it('cy.document() - get the document object', async () => {
    await wait(() => expect(iframe.contentDocument.charset).not.toBeNull());
    expect(iframe.contentDocument.charset).toBe('UTF-8')
  })

  it('cy.title() - get the title', async () => {
    // https://on.cypress.io/title
    await wait(() => expect(iframe.contentDocument.title).not.toBeNull());
    expect(iframe.contentDocument.title.indexOf('Kitchen Sink') !== -1).toBe(true)
  })
});
