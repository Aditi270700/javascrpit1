// object destructuring

const band = {
bandName: "led zepplin",
famousSong: "stairway to heaven",
year:1986,
anotherFamousSong:"kashmir",
};
// const bandName = band.bandName;
// const famousSong = band.famousSong;
// console.log(bandName,famousSong);

let {bandName , famousSong,...reatprops} = band;
console.log(bandName);
bandName="aditi";
console.log(famousSong);
console.log(reatprops);


