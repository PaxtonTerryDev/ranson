export enum States {
  Alabama = "Alabama",
  Alaska = "Alaska",
  Arizona = "Arizona",
  Arkansas = "Arkansas",
  California = "California",
  Colorado = "Colorado",
  Connecticut = "Connecticut",
  Delaware = "Delaware",
  Florida = "Florida",
  Georgia = "Georgia",
  Hawaii = "Hawaii",
  Idaho = "Idaho",
  Illinois = "Illinois",
  Indiana = "Indiana",
  Iowa = "Iowa",
  Kansas = "Kansas",
  Kentucky = "Kentucky",
  Louisiana = "Louisiana",
  Maine = "Maine",
  Maryland = "Maryland",
  Massachusetts = "Massachusetts",
  Michigan = "Michigan",
  Minnesota = "Minnesota",
  Mississippi = "Mississippi",
  Missouri = "Missouri",
  Montana = "Montana",
  Nebraska = "Nebraska",
  Nevada = "Nevada",
  NewHampshire = "New Hampshire",
  NewJersey = "New Jersey",
  NewMexico = "New Mexico",
  NewYork = "New York",
  NorthCarolina = "North Carolina",
  NorthDakota = "North Dakota",
  Ohio = "Ohio",
  Oklahoma = "Oklahoma",
  Oregon = "Oregon",
  Pennsylvania = "Pennsylvania",
  RhodeIsland = "Rhode Island",
  SouthCarolina = "South Carolina",
  SouthDakota = "South Dakota",
  Tennessee = "Tennessee",
  Texas = "Texas",
  Utah = "Utah",
  Vermont = "Vermont",
  Virginia = "Virginia",
  Washington = "Washington",
  WestVirginia = "West Virginia",
  Wisconsin = "Wisconsin",
  Wyoming = "Wyoming",
}

export type USLocationData = {
  state: States;
  cities: { city: string; zip: string }[];
};

export type USLocation = {
  state: States;
  city: string;
  zip: string;
};
export const USLocations: USLocationData[] = [
  {
    state: States.Alabama,
    cities: [
      { city: "Birmingham", zip: "35203" },
      { city: "Montgomery", zip: "36104" },
      { city: "Mobile", zip: "36602" },
    ],
  },
  {
    state: States.Alaska,
    cities: [
      { city: "Anchorage", zip: "99501" },
      { city: "Fairbanks", zip: "99701" },
      { city: "Juneau", zip: "99801" },
    ],
  },
  {
    state: States.Arizona,
    cities: [
      { city: "Phoenix", zip: "85001" },
      { city: "Tucson", zip: "85701" },
      { city: "Mesa", zip: "85201" },
    ],
  },
  {
    state: States.Arkansas,
    cities: [
      { city: "Little Rock", zip: "72201" },
      { city: "Fort Smith", zip: "72901" },
      { city: "Fayetteville", zip: "72701" },
    ],
  },
  {
    state: States.California,
    cities: [
      { city: "Los Angeles", zip: "90001" },
      { city: "San Diego", zip: "92101" },
      { city: "San Francisco", zip: "94101" },
    ],
  },
  {
    state: States.Colorado,
    cities: [
      { city: "Denver", zip: "80201" },
      { city: "Colorado Springs", zip: "80901" },
      { city: "Aurora", zip: "80010" },
    ],
  },
  {
    state: States.Connecticut,
    cities: [
      { city: "Bridgeport", zip: "06601" },
      { city: "New Haven", zip: "06501" },
      { city: "Hartford", zip: "06101" },
    ],
  },
  {
    state: States.Delaware,
    cities: [
      { city: "Wilmington", zip: "19801" },
      { city: "Dover", zip: "19901" },
      { city: "Newark", zip: "19702" },
    ],
  },
  {
    state: States.Florida,
    cities: [
      { city: "Jacksonville", zip: "32099" },
      { city: "Miami", zip: "33101" },
      { city: "Tampa", zip: "33601" },
    ],
  },
  {
    state: States.Georgia,
    cities: [
      { city: "Atlanta", zip: "30301" },
      { city: "Augusta", zip: "30901" },
      { city: "Columbus", zip: "31901" },
    ],
  },
  {
    state: States.Hawaii,
    cities: [
      { city: "Honolulu", zip: "96801" },
      { city: "Hilo", zip: "96720" },
      { city: "Kailua", zip: "96734" },
    ],
  },
  {
    state: States.Idaho,
    cities: [
      { city: "Boise", zip: "83701" },
      { city: "Meridian", zip: "83642" },
      { city: "Nampa", zip: "83651" },
    ],
  },
  {
    state: States.Illinois,
    cities: [
      { city: "Chicago", zip: "60601" },
      { city: "Aurora", zip: "60502" },
      { city: "Naperville", zip: "60540" },
    ],
  },
  {
    state: States.Indiana,
    cities: [
      { city: "Indianapolis", zip: "46201" },
      { city: "Fort Wayne", zip: "46801" },
      { city: "Evansville", zip: "47701" },
    ],
  },
  {
    state: States.Iowa,
    cities: [
      { city: "Des Moines", zip: "50301" },
      { city: "Cedar Rapids", zip: "52401" },
      { city: "Davenport", zip: "52801" },
    ],
  },
  {
    state: States.Kansas,
    cities: [
      { city: "Wichita", zip: "67201" },
      { city: "Overland Park", zip: "66204" },
      { city: "Kansas City", zip: "66101" },
    ],
  },
  {
    state: States.Kentucky,
    cities: [
      { city: "Louisville", zip: "40201" },
      { city: "Lexington", zip: "40502" },
      { city: "Bowling Green", zip: "42101" },
    ],
  },
  {
    state: States.Louisiana,
    cities: [
      { city: "New Orleans", zip: "70112" },
      { city: "Baton Rouge", zip: "70801" },
      { city: "Shreveport", zip: "71101" },
    ],
  },
  {
    state: States.Maine,
    cities: [
      { city: "Portland", zip: "04101" },
      { city: "Lewiston", zip: "04240" },
      { city: "Bangor", zip: "04401" },
    ],
  },
  {
    state: States.Maryland,
    cities: [
      { city: "Baltimore", zip: "21201" },
      { city: "Frederick", zip: "21701" },
      { city: "Rockville", zip: "20850" },
    ],
  },
  {
    state: States.Massachusetts,
    cities: [
      { city: "Boston", zip: "02101" },
      { city: "Worcester", zip: "01601" },
      { city: "Springfield", zip: "01101" },
    ],
  },
  {
    state: States.Michigan,
    cities: [
      { city: "Detroit", zip: "48201" },
      { city: "Grand Rapids", zip: "49501" },
      { city: "Warren", zip: "48088" },
    ],
  },
  {
    state: States.Minnesota,
    cities: [
      { city: "Minneapolis", zip: "55401" },
      { city: "Saint Paul", zip: "55101" },
      { city: "Rochester", zip: "55901" },
    ],
  },
  {
    state: States.Mississippi,
    cities: [
      { city: "Jackson", zip: "39201" },
      { city: "Gulfport", zip: "39501" },
      { city: "Southaven", zip: "38671" },
    ],
  },
  {
    state: States.Missouri,
    cities: [
      { city: "Kansas City", zip: "64101" },
      { city: "Saint Louis", zip: "63101" },
      { city: "Springfield", zip: "65801" },
    ],
  },
  {
    state: States.Montana,
    cities: [
      { city: "Billings", zip: "59101" },
      { city: "Missoula", zip: "59801" },
      { city: "Great Falls", zip: "59401" },
    ],
  },
  {
    state: States.Nebraska,
    cities: [
      { city: "Omaha", zip: "68101" },
      { city: "Lincoln", zip: "68501" },
      { city: "Bellevue", zip: "68005" },
    ],
  },
  {
    state: States.Nevada,
    cities: [
      { city: "Las Vegas", zip: "89101" },
      { city: "Henderson", zip: "89002" },
      { city: "Reno", zip: "89501" },
    ],
  },
  {
    state: States.NewHampshire,
    cities: [
      { city: "Manchester", zip: "03101" },
      { city: "Nashua", zip: "03060" },
      { city: "Concord", zip: "03301" },
    ],
  },
  {
    state: States.NewJersey,
    cities: [
      { city: "Newark", zip: "07101" },
      { city: "Jersey City", zip: "07302" },
      { city: "Paterson", zip: "07501" },
    ],
  },
  {
    state: States.NewMexico,
    cities: [
      { city: "Albuquerque", zip: "87101" },
      { city: "Las Cruces", zip: "88001" },
      { city: "Rio Rancho", zip: "87124" },
    ],
  },
  {
    state: States.NewYork,
    cities: [
      { city: "New York City", zip: "10001" },
      { city: "Buffalo", zip: "14201" },
      { city: "Rochester", zip: "14602" },
    ],
  },
  {
    state: States.NorthCarolina,
    cities: [
      { city: "Charlotte", zip: "28201" },
      { city: "Raleigh", zip: "27601" },
      { city: "Greensboro", zip: "27401" },
    ],
  },
  {
    state: States.NorthDakota,
    cities: [
      { city: "Fargo", zip: "58102" },
      { city: "Bismarck", zip: "58501" },
      { city: "Grand Forks", zip: "58201" },
    ],
  },
  {
    state: States.Ohio,
    cities: [
      { city: "Columbus", zip: "43085" },
      { city: "Cleveland", zip: "44101" },
      { city: "Cincinnati", zip: "45201" },
    ],
  },
  {
    state: States.Oklahoma,
    cities: [
      { city: "Oklahoma City", zip: "73101" },
      { city: "Tulsa", zip: "74101" },
      { city: "Norman", zip: "73019" },
    ],
  },
  {
    state: States.Oregon,
    cities: [
      { city: "Portland", zip: "97201" },
      { city: "Salem", zip: "97301" },
      { city: "Eugene", zip: "97401" },
    ],
  },
  {
    state: States.Pennsylvania,
    cities: [
      { city: "Philadelphia", zip: "19101" },
      { city: "Pittsburgh", zip: "15201" },
      { city: "Allentown", zip: "18101" },
    ],
  },
  {
    state: States.RhodeIsland,
    cities: [
      { city: "Providence", zip: "02901" },
      { city: "Warwick", zip: "02886" },
      { city: "Cranston", zip: "02910" },
    ],
  },
  {
    state: States.SouthCarolina,
    cities: [
      { city: "Columbia", zip: "29201" },
      { city: "Charleston", zip: "29401" },
      { city: "North Charleston", zip: "29405" },
    ],
  },
  {
    state: States.SouthDakota,
    cities: [
      { city: "Sioux Falls", zip: "57101" },
      { city: "Rapid City", zip: "57701" },
      { city: "Aberdeen", zip: "57401" },
    ],
  },
  {
    state: States.Tennessee,
    cities: [
      { city: "Memphis", zip: "37501" },
      { city: "Nashville", zip: "37201" },
      { city: "Knoxville", zip: "37901" },
    ],
  },
  {
    state: States.Texas,
    cities: [
      { city: "Houston", zip: "77001" },
      { city: "San Antonio", zip: "78201" },
      { city: "Dallas", zip: "75201" },
    ],
  },
  {
    state: States.Utah,
    cities: [
      { city: "Salt Lake City", zip: "84101" },
      { city: "West Valley City", zip: "84119" },
      { city: "Provo", zip: "84601" },
    ],
  },
  {
    state: States.Vermont,
    cities: [
      { city: "Burlington", zip: "05401" },
      { city: "South Burlington", zip: "05403" },
      { city: "Rutland", zip: "05701" },
    ],
  },
  {
    state: States.Virginia,
    cities: [
      { city: "Virginia Beach", zip: "23450" },
      { city: "Norfolk", zip: "23501" },
      { city: "Chesapeake", zip: "23320" },
    ],
  },
  {
    state: States.Washington,
    cities: [
      { city: "Seattle", zip: "98101" },
      { city: "Spokane", zip: "99201" },
      { city: "Tacoma", zip: "98401" },
    ],
  },
  {
    state: States.WestVirginia,
    cities: [
      { city: "Charleston", zip: "25301" },
      { city: "Huntington", zip: "25701" },
      { city: "Morgantown", zip: "26505" },
    ],
  },
  {
    state: States.Wisconsin,
    cities: [
      { city: "Milwaukee", zip: "53201" },
      { city: "Madison", zip: "53701" },
      { city: "Green Bay", zip: "54301" },
    ],
  },
  {
    state: States.Wyoming,
    cities: [
      { city: "Cheyenne", zip: "82001" },
      { city: "Casper", zip: "82601" },
      { city: "Laramie", zip: "82070" },
    ],
  },
];
