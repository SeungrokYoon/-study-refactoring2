import playData from "./play.json" assert { type: "json" };
import invoiceDataArr from "./invoices.json" assert { type: "json" };
import statement from "./statement.js";

console.log(statement(invoiceDataArr[0], playData));
