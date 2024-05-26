let USER_ID = 0;

export default class Friend {
  constructor(name, homeAddress, companyAddress, email, country) {
    this.id = USER_ID++;
    this.name = name;
    this.homeAddress = homeAddress;
    this.companyAddress = companyAddress;
    this.email = email;
    this.friends = friends;
    this.country = country;
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
