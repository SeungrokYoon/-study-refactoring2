const toUSD = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
}).format;
const getResultTitleStr = (customer) => `청구 내역 (고객명 : ${customer})\n`;
const getAmountStr = (playName, thisAmount, audience) =>
  `${playName}: ${toUSD(thisAmount / 100)} (${audience}석)\n`;
const getTotalAmountStr = (totalAmount) =>
  `총액: ${toUSD(totalAmount / 100)}\n`;
const getVolumeCreditsStr = (credits) => `적립 포인트: ${credits}점\n`;

const calcAmountFor = (play, perf) => {
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
  let result = getResultTitleStr(invoice.customer);

  //청구 내역을 계산하여 출력
  const totalAmount = invoice.performances.reduce((prev, eachPerformance) => {
    const play = plays[eachPerformance.playID];
    const amount = calcAmountFor(play, eachPerformance);
    result += getAmountStr(play.name, amount, eachPerformance.audience);
    return prev + amount;
  }, 0);

  //포인트를 적립하여 출력
  const volumeCredits = invoice.performances.reduce((prev, eachPerformance) => {
    let tempPrev = prev;
    const play = plays[eachPerformance.playID];
    //포인트를 적립
    tempPrev += Math.max(eachPerformance.audience - 30, 0);
    //희극 관객 5명마다 추가 포인트 제공
    if ("comedy" === play.type)
      tempPrev += Math.floor(eachPerformance.audience / 5);
    return tempPrev;
  }, 0);

  result += getTotalAmountStr(totalAmount);
  result += getVolumeCreditsStr(volumeCredits);
  return result;
}
