import { BaseComponent } from "./../common/base.component.js";
export class AddDoctorComponent extends BaseComponent {
  constructor() {
    super(".new-doctor-dialog");
  }

  //შეგვიძლია ან ესე გავაკეთოთ ან დაბლა ერთ ფუნქციაში
  //   get saveBtn() {
  //     return this.rootEl.$(".e-footer-content button.e-primary");
  //   }

  //   get closeBtn() {
  //     return this.rootEl.$(".e-dlg-closeicon-btn");
  //   }

  /**
   *
   * @param btn {'save' | 'close'}
   * @returns
   */

  inputBtn(btn) {
    const selectBtn = {
      save: ".e-footer-content button.e-primary",
      close: ".e-dlg-closeicon-btn",
    };
    return this.rootEl.$(selectBtn[btn.toLowerCase()]);
  }

  /**
   * @param name {'name'| 'phone' | 'email' | 'education' | 'designation' }
   * @returns {*}
   */

  input(name) {
    const selectors = {
      name: "[name='Name']",
      phone: "#DoctorMobile",
      email: "[name='Email']",
      education: "#textbox_2",
      designation: "[name='Designation']",
    };
    return this.rootEl.$(selectors[name.toLowerCase()]);
  }
}
