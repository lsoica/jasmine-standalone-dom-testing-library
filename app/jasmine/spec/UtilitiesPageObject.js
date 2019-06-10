import {
    getByText,
    getAllByText,
    getByDisplayValue,
    wait,
    getByLabelText,
    waitForElement,
    getByRole,
  } from '@testing-library/dom';
  
  export class UtilitiesPageOject {
    constructor() {
        wait(() => expect(document).not.toBeNull()).then(() => {
            let iframe = document.getElementsByClassName("frame")[0];
            iframe.contentWindow.location = 'http://localhost:8080/utilities';
        });
    }

}
