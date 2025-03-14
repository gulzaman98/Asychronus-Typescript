"use strict";
// Practice Task:
// Socho tum supermarket gaye ho aur tumhe 3 items kharidne hain: Bread, Milk, and Eggs. Har item lene mein 2 second 
// lagte hain. Tumhe ek function likhna hai jo yeh kaam asynchronous tarike se kare.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Task Instructions:
// Ek asynchronous function banao jo buyItem(itemName) ko call kare.
// Har item lene mein 2-second ka delay lagao.
// Jab ek item kharid lo, next item lena shuru karo.
// Jab saare items complete ho jayen, console mein message show karo: "Shopping done!"
// Sample Function ka Structure:
function buyItem(itemName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${itemName} bought!`);
            resolve();
        }, 2000); // 2 seconds delay
    });
}
function doShopping() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Starting shopping...");
        // Call buyItem for each item
        yield buyItem("Bread");
        yield buyItem("Milk");
        yield buyItem("Eggs");
        console.log("Shopping done!");
    });
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
