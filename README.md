# Ranson (A Random Data Generator)

## About
This is an extremely lightweight data generator that gives you a framework to create custom random data sets. It's designed to be extensible, so feel free to use it how you wish.

## How to Use
The generator is pretty straightforward.  Ranson comes with a prebuilt class "UserData", which can be used for most baseline purposes. 
Here's an example of a generated UserData object:
```
  UserData {
    firstName: 'Kevin',
    lastName: 'McGuire',
    phone: '212-631-0810',
    email: 'darkmap@comcast.net',
    dob: 1991-05-22T06:00:00.000Z,
    location: { state: 'Utah', city: 'Salt Lake City', zip: '84101' }
  },
```

If all you care about is creating some random user data to populate a test db, then all you need to do is the following:
```
import { Ranson, UserData } from "ranson";

const numEntries = 100; // Or however many you want
const randomData = Ranson.generateData(UserData, numEntries);
```

### RansonData
RansonData is an interface that should be implemented by your class. This allows it to be used with the Ranson class.
*This is required to be used by the Ranson Class*
```
export interface RansonData {
  generate(): RansonData;
}
```
The only required method to be implemented is a generate(): RansonData;. This is usually as simple as the following: 
```
  generate(): RansonData {
    return this;
  }
```
It needs to return the instantiated object.

### Ranson
Ranson is a class comprised entirely of static methods, so you don't need to instantiate it as an object. It comes with a number of different functions to generate random pieces of data, or utility functions to work with arrays of data. 
The primary function you will use with Ranson are - 
```
// Accepts two arguments, a class that implements RansonData, and the number of entries to generate. 
Ranson.generateData(RansonDataClass, numberOfEntries)
```
There is also a helper function that automatically converts the output array to a JSON data -
```
Ranson.generateJSONData(RansonDataClass, numberOfEntries)
```

### Custom Data Sets
The way I typically set up custom data is by setting aside an array of the values I want. This can be seen in the /data directory bundled with the package. I then use the Ranson.getRandomArrayValue(dataset[]) to select the item.

### Custom Classes
User defined classes need to implement the RansonData interface. Here is how I would set up a custom class with a custom dataset.
```
import { Ranson, RansonData } from "ranson";

// define the datasets to be used in the generator
const firstNames = ["Frank", "Gary", "Linda"];
const lastNames = ["Smith", "Jones", "Williams"];

class Example implements RansonData {
  // define the properties I want in my class
  firstName: string;
  lastName: string;

  // create a constructor that uses the Ranson.generateFromDataset() function, or a different random-value generator function you define.
  constructor() {
    this.firstName = Ranson.generateFromDataset(firstNames);
    this.lastName = Ranson.generateFromDataset(lastNames);
  }
  // implement the generate function, which should ideally just return the instance of the class.
  generate() {
    return this;
  }
}

const randomData = Ranson.generateData(Example, 3);
/*
Expected Output:
[
  Example { firstName: 'Frank', lastName: 'Jones' },
  Example { firstName: 'Gary', lastName: 'Smith' },
  Example { firstName: 'Frank', lastName: 'Jones' }
]
*/
```
## Built-In
Built into the package is the UserData class, and the following useful arrays / datasets:
- firstNames
- lastNames
- adjectives
- nouns
- USAreaCodes 
- locations
  - each entry includes a state, along with three of the major cities in that state, and zip codes for those cities.
There are also some defined types / enums that are primarily used with the built-in static methods owned by the Ranson class, such as
- PhoneFormat
- USLocation
- USLocationData (This one has three cities, the USLocation type only has a single city and zip, since a location can be in multiple cities.)

# Finally
I want this to be open source, so feel free to add whatever you like to it, or let me know if there are any features / datasets you would like included.  
