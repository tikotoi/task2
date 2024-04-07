import { pages } from "../po/pages/index.js";

describe("Doctors Page", () => {
  beforeEach(async () => {
    await pages("dashboard").open();
  });

  it("check page title", async () => {
    await expect(browser).toHaveTitle(
      "Appointment Planner - Syncfusion Angular Components Showcase App"
    );
  });

  it("Open modal window for adding a new doctor", async () => {
    await pages("dashboard").sideMenu.item("doctors").click();
    await pages("doctors").doctorListHeader.addNewDoctorBtn.click();
    await expect(pages("doctors").addDoctorModal.rootEl).toBeDisplayed();
  });

  it("Add new doctor", async () => {
    await pages("dashboard").sideMenu.item("doctors").click();
    await pages("doctors").doctorListHeader.addNewDoctorBtn.click();
    await pages("doctors").addDoctorModal.rootEl.waitForDisplayed();

    await pages("doctors").addDoctorModal.input("name").setValue("John Doe");
    await pages("doctors").addDoctorModal.input("phone").setValue("5984993991");
    await pages("doctors")
      .addDoctorModal.input("email")
      .setValue("tiabu@gmail.com");
    await pages("doctors").addDoctorModal.input("education").setValue("Master");
    await pages("doctors").addDoctorModal.input("designation").setValue("Test");

    //await pages('doctors').addDoctorModal.saveBtn.click();
    await pages("doctors").addDoctorModal.inputBtn("save").click();
    await expect(pages("doctors").addDoctorModal.rootEl).not.toBeDisplayed();
    await expect(pages("doctors").specialistCard(8).name).toHaveText(
      "Dr. John Doe"
    );
    await expect(pages("doctors").specialistCard(8).education).toHaveText(
      "Master",
      { ignoreCase: true }
    );
  });

  it("Close modal window for adding a new doctor", async () => {
    await pages("dashboard").sideMenu.item("doctors").click();
    await pages("doctors").doctorListHeader.addNewDoctorBtn.click();
    await pages("doctors").addDoctorModal.rootEl.waitForDisplayed();
    await pages("doctors").addDoctorModal.inputBtn("close").click();
    await expect(pages("doctors").addDoctorModal.rootEl).not.toBeDisplayed();
  });
});
