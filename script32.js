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
console.log(bandName);
console.log(famousSong);
console.log(reatprops);


const fruit = {
    fruitName : "apple",
    kingFruit : "Mango",
    tree : "stawberry",
    juice: "coconut"
}

let {fruitName,kingFruit,...newFruit} = fruit;
console.log(kingFruit);
kingFruit="litchi";
console.log(kingFruit)
console.log(newFruit);



