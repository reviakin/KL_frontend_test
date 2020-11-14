const isFirstStrContainSecondSrt = (firstStr: string, secondStr: string) =>
  !secondStr.trim()
    ? true
    : firstStr.toLowerCase().indexOf(secondStr.toLowerCase()) === -1
    ? false
    : true;

export { isFirstStrContainSecondSrt };
