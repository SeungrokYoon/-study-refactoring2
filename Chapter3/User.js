const USER_ID = 0;

export default class User {
  constructor(
    name,
    address1,
    address2,
    email,
    friends,
    friendsHomeAddress,
    friendsCompanyAddress,
    salary
  ) {
    this.id = USER_ID++;
    this.name = name;
    this.address1 = address1;
    this.address2 = address2;
    this.email = email;
    this.friends = friends;
    this.friendsHomeAddress = friendsHomeAddress;
    this.friendsCompanyAddress = friendsCompanyAddress;
    this.menuAteYesterday = { meal: "", drink: "", desert: "" };
    this.salad = "";
    this.salary = salary;
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
