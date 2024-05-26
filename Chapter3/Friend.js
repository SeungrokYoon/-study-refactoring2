const USER_ID = 0;

export default class Friend {
  constructor(name, address1, address2, email, country) {
    this.id = USER_ID++;
    this.name = name;
    this.address1 = address1;
    this.address2 = address2;
    this.email = email;
    this.friends = friends;
    this.country = country;
  }
  getHomeAddress() {
    return `Home address is ${this.address1}`;
  }
  getCompanyAddress1() {
    return `Company Address is ${this.address2}`;
  }
  printHomeAddress() {
    console.log(this.address1);
  }
  printCompanyAddress() {
    console.log(this.address2);
  }
}
