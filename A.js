// import fs from "fs-promise";
// async function printFiles() {
//   const files = await getFilePaths(); // Assume this works fine
//   files.map(
//     forEach(async (file) => {
//       const contents = await fs.readFile(file, "utf8");
//       console.log(contents);
//     })
//   );
// }
// printFiles();

// (function () {
//   var a = (b = 5);
//   var d = 6;
// })();
// console.log(d); //5
// // console.log(b);//5

// process.nextTick(); //

function cb() {
  console.log("Processed in next iteration");
}
process.nextTick(cb);//
console.log("Processed in the first iteration");//
