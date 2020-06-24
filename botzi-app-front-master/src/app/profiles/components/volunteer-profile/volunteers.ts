import { SkillsComponent } from "../skills/skills.component";

export interface Volunteers {
    volunteerName: string;
  volunteerID: string;
  phone_number: string;
  address: string;
  skills: SkillsComponent;
  endDate: any;
  startDate: any;
}
