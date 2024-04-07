import { DashboardPage } from "./dashboard.page.js";
import { DoctorsPage } from "./doctors.page.js";

/**
 * @param  {'dashboard' | 'doctors'} name
 * @returns {DashboardPage | DoctorsPage}
 */

function pages(name) {
  const items = {
    dashboard: new DashboardPage(),
    doctors: new DoctorsPage(),
  };
  return items[name.toLowerCase()];
}

export { DashboardPage, DoctorsPage, pages };
