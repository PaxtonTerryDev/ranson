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

### RansonData
RansonData is an interface that should be implemented by your class. This allows it to be used with the Ranson class.
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
Ranson is a class comprised entirely of static methods, so you don't need to instantiate it as an object. 