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
