export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  DIVERSE = 'diverse'
}

export interface Address {
  street: string;
  houseNumber: string;
  zip: string;
  city: string;
  country: string;
}


export class User {
  id: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  nationality: string;
  address: Address;
  email: string;
  phoneNumber: string;
  occupation: string;
  dateOfBirth: Date;

  constructor({ id, firstName, lastName, gender, nationality, address, email, phoneNumber, occupation, dateOfBirth }: User) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.nationality = nationality;
    this.address = address;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.occupation = occupation;
    this.dateOfBirth = dateOfBirth;
  }
}
