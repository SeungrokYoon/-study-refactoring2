export const formatAddress = (addressType, address) => {
  switch (addressType) {
    case "home":
      return `Home address is ${address}`;
    case "company":
      return `Company address is ${address}`;
    default:
      console.error("addressType은 home이나 company여야 합니다.");
      break;
  }
};
