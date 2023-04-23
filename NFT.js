/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name,_favoriteHobby,_favoriteFood,_favoriteColor,_country) {
   const NFT = {
    "name": _name,
    "favoriteHobby": _favoriteHobby,
    "favoriteFood": _favoriteFood,
    "favoriteColor": _favoriteColor,
    "country": _country

   }
   NFTs.push(NFT);
   console.log("Minted: " + _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
   for(let i = 0; i < NFTs.length; i++){
    console.log("\nID :\t\t" + (i+1)); 
    console.log("Name :      \t" + NFTs[i].name);
    console.log("FavoriteHobby : " + NFTs[i].favoriteHobby);
    console.log("FavoriteFood : \t" + NFTs[i].favoriteFood);
    console.log("FavoriteColor : " + NFTs[i].favoriteColor);
    console.log("Country :\t" + NFTs[i].country);
   } 

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("\nTotal Number Of NFTs: " + NFTs.length);
}

// call your functions below this line

mintNFT("Justin" , "Stamp Collection" , "Chicken Biriyani" , "Green" , "India");
mintNFT("Sophie", "Playing video games", "Sushi", "Blue", "United States");
mintNFT("Mia", "Reading books", "Pasta", "Purple", "Italy");
mintNFT("Leo", "Playing soccer", "Tacos", "Red", "Mexico");
mintNFT("Ava", "Dancing", "Ice cream", "Pink", "France");
mintNFT("Liam", "Watching movies", "Pizza", "Black", "United Kingdom");
mintNFT("Emma", "Drawing", "Chocolate", "Yellow", "Switzerland");
mintNFT("Noah", "Playing guitar", "Burgers", "Orange", "Australia");
mintNFT("Olivia", "Singing", "Fried chicken", "Turquoise", "Jamaica");
mintNFT("Ethan", "Hiking", "BBQ ribs", "Gray", "Canada");

listNFTs();
getTotalSupply();
