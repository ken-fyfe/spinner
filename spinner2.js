// spinner annimation
const stringArray = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
let delay = 100;
for (const string of stringArray) {
  setTimeout(() => {
    process.stdout.write(string);
  }, delay);
  delay += 200;
}