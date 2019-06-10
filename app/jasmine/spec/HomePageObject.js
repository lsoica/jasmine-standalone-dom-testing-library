import {
    getByText,
    getAllByText,
    getByDisplayValue,
    wait,
    getByLabelText,
    waitForElement,
    getByRole,
  } from '@testing-library/dom';
  
  export class HomePageOject {
    constructor() {
        return new Promise(async (resolve, reject) => {
            try {
                await wait(() => expect(document).not.toBeNull());
                await wait(() => expect(document.getElementsByClassName("frame")).not.toBeNull());

                this.iframe = document.getElementsByClassName("frame")[0];
                await wait(() => expect(this.iframe.contentWindow.document.body).not.toBeNull());
                let container = this.iframe.contentWindow.document.body;

                await wait(() => expect(container.getElementsByClassName('nav navbar-nav')[0]).not.toBeNull());

                this.navBar = container.getElementsByClassName('nav navbar-nav')[0];

                this.utilities = await waitForElement(() => getByText(this.navBar, "Utilities"))
                this.cypressAPI = await waitForElement(() => getByText(this.navBar, "Cypress API"))
                this.commands = await waitForElement(() => getByRole(this.navBar, "button"))
            } catch (ex) {
                return reject(ex);
            }
            resolve(this);
        });
    }

    getNavBar() {
        return this.navBar;
    }

    getUtilities() {
        return this.utilities;
    }

    getCypressApi() {
        return this.cypressAPI;
    }

    getCommands() {
        return this.commands;
    }
}
