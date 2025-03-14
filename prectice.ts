// Practice Task:
// Socho tum supermarket gaye ho aur tumhe 3 items kharidne hain: Bread, Milk, and Eggs. Har item lene mein 2 second 
// lagte hain. Tumhe ek function likhna hai jo yeh kaam asynchronous tarike se kare.

// Task Instructions:

// Ek asynchronous function banao jo buyItem(itemName) ko call kare.
// Har item lene mein 2-second ka delay lagao.
// Jab ek item kharid lo, next item lena shuru karo.
// Jab saare items complete ho jayen, console mein message show karo: "Shopping done!"

// Sample Function ka Structure:




function buyItem(itemName: string): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`${itemName} bought!`);
        resolve();
      }, 2000); // 2 seconds delay
    });
  }
  
  async function doShopping() {
    console.log("Starting shopping...");
  
    // Call buyItem for each item
    await buyItem("Bread");
    await buyItem("Milk");
    await buyItem("Eggs");
  
    console.log("Shopping done!");
  }
  doShopping();
  
  
  
  
  
  
  // Output:
  // scss
  // Copy code
  // Starting shopping...
  // Bread bought! (after 2 seconds)
  // Milk bought! (after 2 more seconds)
  // Eggs bought! (after 2 more seconds)
  // Shopping done!
  // Tum isse practice karo aur samajhne ki koshish karo ke:
  
  // async aur await kaise kaam karte hain.
  // Har kaam ke liye delay kaise lagta hai.
  // Asynchronous functions sequentially kaise execute hote hain.
  // Agar code mein koi problem aaye ya aur examples chahiye, toh zaroor batao! 😊
  
  
  
  
  
  
  