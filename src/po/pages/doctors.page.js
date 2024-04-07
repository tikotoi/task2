import {
  AddDoctorComponent,
  ListHeaderComponent,
  SpecialistCardComponent,
} from "./../components/index.js";
import { BasePage } from "./base.page.js";
export class DoctorsPage extends BasePage {
  constructor() {
    super("/showcase/angular/appointmentplanner/#/doctors");
    this.doctorListHeader = new ListHeaderComponent();
    this.addDoctorModal = new AddDoctorComponent();
  }

  specialistCard(id) {
    return new SpecialistCardComponent(id);
  }
}
