console.log("start");
const sub = Promise.reject("subscribe to roadside coder");
console.log(sub);
sub.then((res) => console.log(res).catch((err) => console.log(err, "error")))
console.log("Stop")