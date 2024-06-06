import { PhoneFormat } from "../data/phone";
import { emailDomains } from "../data/emailDomains";
import {
  States,
  USLocation,
  USLocationData,
  USLocations,
} from "../data/location";
import { adjectives, nouns } from "../data/misc";
import { USareaCodes } from "../data/phone";

export interface RansonData {
  generate(): RansonData;
}

//TODO: Add jsdoc comments for each method

/**
 * Utility class with static methods that can be used with the Ranson Library
 */
export class Ranson {
  /**
   * The primary function call for the Ranson Library.  Used to generate data based on a provided class that extends RansonData
   */
  static generateData(
    type: new () => RansonData,
    numEntries: number
  ): RansonData[] {
    const generatedData: RansonData[] = [];
    for (let i = numEntries; i > 0; i--) {
      const instance = new type().generate();
      generatedData.push(instance);
    }
    return generatedData;
  }

  static generateJSONData(type: new () => RansonData, numEntries: number) {
    return JSON.stringify(Ranson.generateData(type, numEntries));
  }

  static getRandomArrayValue<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }

  static generateFromDataset<T>(dataset: T[]) {
    return Ranson.getRandomArrayValue(dataset);
  }

  static generateRandomInt(): number {
    return Math.floor(Math.random() * 10);
  }

  static generateRandomDOB(minAge: number, maxAge: number): Date {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    const minYear = currentYear - maxAge;
    const maxYear = currentYear - minAge;

    const randomYear =
      Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
    const randomMonth = Math.floor(Math.random() * 12);
    const randomDay =
      Math.floor(
        Math.random() * new Date(randomYear, randomMonth + 1, 0).getDate()
      ) + 1;

    return new Date(randomYear, randomMonth, randomDay);
  }

  static generateRandomUSPhone(
    format: PhoneFormat = PhoneFormat.Parenthesis,
    areaCode: string = Ranson.getRandomArrayValue(USareaCodes)
  ) {
    const getRandomBlock = (length: number): string => {
      let block = "";
      for (let i = 0; i < length; i++) {
        block += Ranson.generateRandomInt().toString();
      }
      return block;
    };
    const centralOfficeCode = getRandomBlock(3);
    const lineNumber = getRandomBlock(4);

    switch (format) {
      case PhoneFormat.Parenthesis:
        return `(${areaCode}) ${centralOfficeCode}-${lineNumber}`;
      case PhoneFormat.Dashes:
        return `${areaCode}-${centralOfficeCode}-${lineNumber}`;
      case PhoneFormat.None:
        return `${areaCode}${centralOfficeCode}${lineNumber}`;
    }
  }

  static generateRandomUSLocation(statePrefs: States[] = []): USLocation {
    if (statePrefs.length === 0) {
      const state = Ranson.getRandomArrayValue(USLocations);
      const city = Ranson.getRandomArrayValue(state.cities);
      return {
        state: state.state,
        city: city.city,
        zip: city.zip,
      };
    } else {
      const newLocationsArray = USLocations.filter((location: USLocationData) =>
        statePrefs.includes(location.state)
      );
      const state = Ranson.getRandomArrayValue(newLocationsArray);
      const city = Ranson.getRandomArrayValue(state.cities);
      return {
        state: state.state,
        city: city.city,
        zip: city.zip,
      };
    }
  }

  static generateLocalPartEmailFromDataset() {
    return `${Ranson.getRandomArrayValue(
      adjectives
    )}${Ranson.getRandomArrayValue(nouns)}`;
  }

  static generateRandomEmail(
    domain: string = Ranson.getRandomArrayValue(emailDomains),
    localPart: string = Ranson.generateLocalPartEmailFromDataset()
  ) {
    return `${localPart}@${domain}`;
  }
}
