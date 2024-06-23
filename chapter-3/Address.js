export class AbstractAddress {
  constructor(address) {
    this.address = address;
    if (this.constructor === AbstractAddress) {
      throw new Error("추상 클래스로 인스턴스를 생성하였습니다.");
    }
  }

  formatAddress() {
    throw new Error("추상 메소드는 꼭 오버라이딩 되어야 합니다.");
  }
}

export class HomeAddress extends AbstractAddress {
  formatAddress() {
    return `Home address is ${this.address}`;
  }
}
export class CompanyAddress extends AbstractAddress {
  formatAddress() {
    return `Company address is ${this.address}`;
  }
}
