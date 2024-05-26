import lodashCurry from "lodash.curry";

function curry(curryingTargetFunction) {
  return function (aArgAfterFunctionDeclaration) {
    return function (bArgAfterFunctionDeclaration) {
      return curryingTargetFunction(
        aArgAfterFunctionDeclaration,
        bArgAfterFunctionDeclaration
      );
    };
  };
}

function sum(a, b) {
  return a + b;
}

const curriedSum = curry(sum);
/**
 * console.log(curriedSum(1)(2)(3)); 이렇게 쓰면 에러가 난다.
 * 왜냐하면 헬퍼함수인 curry 함수가 리턴을 두 번밖에 못하기 때문이다.
 *  */
console.log(curriedSum(1)(2));

function log(date, importance, message) {
  console.log(
    `[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`
  );
}

//lodash curry
log = lodashCurry(log);
log(new Date(), "DEBUG", "some debug");
log(new Date())("DEBUG")("some debug");

//partial 적용된 함수 - partial
const logNow = log(new Date());
logNow("INFO")("message info");
