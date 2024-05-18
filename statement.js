const formatCurrency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
}).format;
const getResultTitleStr = (customer) => `청구 내역 (고객명 : ${customer})\n`;
const getTotalAmountStr = (totalAmount) =>
  `총액: ${formatCurrency(totalAmount / 100)}\n`;
const getVolumeCreditsStr = (credits) => `적립 포인트: ${credits}점\n`;

const calcAmountFor = (plays, perf) => {
  const play = plays[perf.playID];
  let thisAmount = 0;

  switch (play.type) {
    case "tragedy":
      thisAmount = 40000;
      if (perf.audience > 30) {
        thisAmount += 1000 * (perf.audience - 30);
      }
      break;
    case "comedy":
      thisAmount = 30000;
      if (perf.audience > 20) {
        thisAmount += 10000 + 500 * (perf.audience - 20);
      }
      thisAmount += 300 * perf.audience;
      break;
    default:
      throw new Error(`알 수 없는 장르: ${play.type}`);
  }

  return thisAmount;
};

export default function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = getResultTitleStr(invoice.customer);

  for (let perf of invoice.performances) {
    totalAmount += calcAmountFor(plays, perf);
  }

  result += getTotalAmountStr(totalAmount);
  result += getVolumeCreditsStr(volumeCredits);
  return result;
}
