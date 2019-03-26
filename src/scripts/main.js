console.log("main.js")

// Build two fieldsets and input fields that will allow you to enter the name of a favorite thing of yours, and a location where you might purchase it (Target, Amazon, Best Buy, etc...)

//1. Add a button beneath the fieldsets labeled "Save to Wishlist".
//2. When the button is clicked, display the data in the following format in the DOM.

// I can purchase {thing} at {location}

const container = document.querySelector("#addressList")

// Some starter code

//target things-container
const thingContainer = document.querySelector("#thing-container");

document.querySelector("#saveEntry").addEventListener("click", event => {
    /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
    const thingName = document.querySelector("#thing").value
    const thingLocation = document.querySelector("#location").value

    // Once you have collected all the values, update the DOM
    // with some HTML
    thingContainer.innerHTML += `
        <section>
            <h1>${thingName}</h1>
            <div>${thingLocation}</div>
        </section>
    `

})