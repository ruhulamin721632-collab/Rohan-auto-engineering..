// =========================================
// ROHAN AUTO ENGINEERING
// VEHICLE RENTAL WEBSITE
// =========================================


// ================= MENU =================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", function () {
        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }
    });


    // Close menu after clicking a link

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");
            menuBtn.textContent = "☰";

        });

    });

}


// ================= VEHICLE ENQUIRY =================

const vehicleButtons = document.querySelectorAll(
    "[data-vehicle]"
);

const vehicleSelect = document.getElementById("vehicle");

vehicleButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedVehicle =
            this.getAttribute("data-vehicle");

        if (vehicleSelect) {

            if (selectedVehicle === "Car") {
                vehicleSelect.value = "Car";
            }

            else if (selectedVehicle === "Bus") {
                vehicleSelect.value = "Bus";
            }

            else {
                vehicleSelect.value = "Other";
            }

        }

    });

});


// ================= WHATSAPP FORM =================

const bookingForm =
    document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const vehicle =
            document.getElementById("vehicle").value;

        const duration =
            document.getElementById("duration").value;

        const message =
            document.getElementById("message").value.trim();


        if (!name || !phone || !vehicle) {

            alert(
                "Please enter your name, phone number and vehicle requirement."
            );

            return;
        }


        /*
            IMPORTANT:
            Replace 919999999999 with
            your actual WhatsApp number.

            Format:
            Country code + number
            without + or spaces.

            Example:
            919876543210
        */

        const whatsappNumber =
            "7431964333";


        const whatsappMessage =
            `Hello Rohan Auto Engineering,

I want to enquire about vehicle rental.

Name: ${name}

Phone: ${phone}

Vehicle Required: ${vehicle}

Rental Requirement: ${duration}

Message: ${message || "No additional message."}

Please share the availability and quotation.`;


        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


        window.open(
            whatsappURL,
            "_blank"
        );

    });

}


// ================= CURRENT YEAR =================

const copyright =
    document.querySelector(".copyright");

if (copyright) {

    copyright.textContent =
        `© ${new Date().getFullYear()} Rohan Auto Engineering. All Rights Reserved.`;

}