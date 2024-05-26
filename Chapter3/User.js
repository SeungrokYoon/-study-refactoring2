import { HomeAddress, CompanyAddress } from "./Address.js";

const userIdManager = () => {
  let USER_ID = 0;
  function count() {
    return USER_ID++;
  }
  return count;
};

export const genUserId = userIdManager();

export default class User {
  constructor({ name, homeAddress, companyAddress, email, friends, salary }) {
    this.id = genUserId();
    this.name = name;
    this.homeAddress = homeAddress;
    this.companyAddress = companyAddress;
    this.email = email;
    this.friends = friends;
    this.menuAteYesterday = { meal: "", drink: "", desert: "" };
    this.salad = "";
    this.salary = salary;
  }
  getHomeAddress() {
    // const address = new AbstractAddress(); 에러발생
    return new HomeAddress(this.homeAddress).formatAddress();
  }
  getCompanyAddress() {
    return new CompanyAddress(this.homeAddress).formatAddress();
  }
  printHomeAddress() {
    console.log(this.homeAddress);
  }
  printCompanyAddress() {
    console.log(this.companyAddress);
  }
  printFriendsInfo() {
    for (const f of this.friends) {
      f.printFriendName();
      f.printFriendEmail();
    }
  }
  printFriendsAddress() {
    for (const f of this.friends) {
      f.printHomeAddress();
      f.printCompanyAddress();
    }
  }
  updateMenu(meal, drink, desert, salad) {
    this.updateMeal(meal);
    this.updateDrink(drink);
    this.updateDesert(desert);
    this.updateSalad(salad);
  }
  updateMeal(meal) {
    this.menuAteYesterday = { ...this.menuAteYesterday, meal };
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
  getUserYesterdayMenu() {
    //외부로 노출되는 매서드일때
    return { ...this.menuAteYesterday };
  }
}
