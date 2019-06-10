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
        wait(() => expect(document).not.toBeNull()).then(() => {
            let iframe = document.getElementsByClassName("frame")[0];
            let container = iframe.contentWindow.document.body;
        
            this.navBar = container.getElementsByClassName('nav navbar-nav')[0];
        });
    }

    getNavBar() {
        return this.navBar;
    }

    async getUtilities() {
        await wait(() => expect(this.navBar).not.toBeNull());
        this.utilities = await waitForElement(() => getByText(this.navBar, "Utilities"))
        return this.utilities;
    }

    async getCypressApi() {
        await wait(() => expect(this.navBar).not.toBeNull());
        this.cypressAPI = await waitForElement(() => getByText(this.navBar, "Cypress API"))

        return this.cypressAPI;
    }

    async getCommands() {
        await wait(() => expect(this.navBar).not.toBeNull());
        this.commands = await waitForElement(() => getByRole(this.navBar, "button"))
        return this.commands;
    }
}
