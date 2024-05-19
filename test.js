import playData from "./play.json" assert { type: "json" };
import invoiceDataArr from "./invoices.json" assert { type: "json" };
import statement from "./statement.js";

const testStatementResult = `청구 내역 (고객명 : BigCo)
Hamlet: $650.00 (55석)
As You like: $580.00 (35석)
Othello: $500.00 (40석)
총액: $1,730.00
적립 포인트: 47점
`;

function testStatement() {
  const res = statement(invoiceDataArr[0], playData);
  return res === testStatementResult;
}

console.log(testStatement());
