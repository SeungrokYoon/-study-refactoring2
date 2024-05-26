import { genUserId } from "./User.js";

export default class Friend {
  constructor(name, homeAddress, companyAddress, email, country) {
    this.id = genUserId();
    this.name = name;
    this.homeAddress = homeAddress;
    this.companyAddress = companyAddress;
    this.email = email;
    this.friends = friends;
    this.country = country;
  }
  printFriendName() {
    console.log(`I have a friend called ${this.name}`);
  }
  printFriendEmail() {
    console.log(`Friend's email address is ${this.email}`);
  }
  getHomeAddress() {
    return `Home address is ${this.homeAddress}`;
  }
  getCompanyAddress1() {
    return `Company Address is ${this.companyAddress}`;
  }
  printHomeAddress() {
    console.log(this.homeAddress);
  }
  printCompanyAddress() {
    console.log(this.companyAddress);
  }
}
