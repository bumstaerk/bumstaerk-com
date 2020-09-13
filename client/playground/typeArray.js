function typeKit(arr) {
  let start = 100;
  let str = "";
  clearTimeout();

  arr.forEach((a) => {
    start += 100;
    setTimeout(() => {
      str += a;
      console.log(str)
    },start);
  });
}