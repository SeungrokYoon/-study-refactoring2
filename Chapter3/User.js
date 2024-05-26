const USER_ID = 0;

export default class User {
  constructor(
    name,
    homeAddress,
    companyAddress,
    email,
    friends,
    friendsHomeAddress,
    friendsCompanyAddress,
    salary
  ) {
    this.id = USER_ID++;
    this.name = name;
    this.homeAddress = homeAddress;
    this.companyAddress = companyAddress;
    this.email = email;
    this.friends = friends;
    this.friendsHomeAddress = friendsHomeAddress;
    this.friendsCompanyAddress = friendsCompanyAddress;
    this.menuAteYesterday = { meal: "", drink: "", desert: "" };
    this.salad = "";
    this.salary = salary;
  }
  getHomeAddress() {
    return `Home address is ${this.homeAddress}`;
  }
  getCompanyAddress() {
    return `Company Address is ${this.companyAddress}`;
  }
  printHomeAddress() {
    console.log(this.homeAddress);
  }
  printCompanyAddress() {
    console.log(this.companyAddress);
  }
  printFriendsInfo() {
    for (const f of this.friends) {
      console.log(`I have a friend called ${f.name}`);
      console.log(`Friend's email address is ${f.email}`);
    }
  }
  printFriendsAddress() {
    for (const f of this.friends) {
      console.log(f.address1);
      console.log(f.address2);
    }
  }
  updateMenu(meal, drink, desert) {
    this.menuAteYesterday.meal = meal;
    this.menuAteYesterday.drink = drink;
    this.menuAteYesterday.desert = desert;
  }
  updateMeal(meal) {
    this.menuAteYesterday.meal = meal;
  }
  updateDrink(drink) {
    this.menuAteYesterday.drink = drink;
  }
  updateDesert(desert) {
    this.menuAteYesterday.desert = desert;
  }
  updateSalad(salad) {
    this.salad = salad;
  }
}
