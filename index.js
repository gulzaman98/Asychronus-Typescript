"use strict";
// Asynchronous functions ka kaam hai ek saath do ya zyada kaam ko manage karna bina ek kaam ke khatam hone ka wait kiye.
//  Matlab, agar ek kaam zyada time le raha ho (jaise kisi server se data lena), toh us waqt dusre kaam rukte nahi hain.
// Socho, tumhare paas ek hotel ka kitchen hai. Ek chef order le raha hai, ek khana bana raha hai, aur ek plates set kar
//  raha hai. Agar ek chef order lene mein busy ho, toh baaki kaam rukenge nahi, wo chalenge. Jab order ready hoga, toh 
// chef signal dega ke "kaam ho gaya," aur plate table pe jaayegi.
// Isi tarah, asynchronous functions kaam karte hain:
// Kaam start hota hai (jaise server se data lena).
// Jab tak kaam complete ho raha hota hai, tumhari app dusre kaam karti rehti hai.
// Jab kaam ho jaye, toh app ko signal milta hai, aur us signal ke baad ka code chalta hai.
// Fayda:
// Time bachaate hain.
// App smooth chalti hai, freeze nahi hoti.
function orderPizza() {
    console.log("Pizza order diya gaya..."); // Step 1
    setTimeout(() => {
        console.log("Pizza tayar ho gaya! "); // Step 3 (yeh baad mein chalega)
    }, 3000); // 3-second ka delay, jaise pizza tayar hone mein time lagta hai
    console.log("Tab tak cold drink ready kar lo... "); // Step 2
}
orderPizza();
