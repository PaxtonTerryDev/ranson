import { PhoneFormat } from "../data/phone";
import { firstName } from "../data/firstName";
import { lastName } from "../data/lastName";
import { States, USLocation } from "../data/location";
import { Ranson, RansonData } from "./ranson";

export class UserData implements RansonData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  dob: Date;
  location: USLocation;

  constructor() {
    this.firstName = Ranson.generateFromDataset(firstName);
    this.lastName = Ranson.generateFromDataset(lastName);
    this.phone = Ranson.generateRandomUSPhone(PhoneFormat.Dashes);
    this.email = Ranson.generateRandomEmail();
    this.dob = Ranson.generateRandomDOB(18, 65);
    this.location = Ranson.generateRandomUSLocation([
      States.Utah,
      States.NewYork,
      States.Alabama,
    ]);
  }

  generate(): RansonData {
    return this;
  }
}
