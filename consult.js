document.addEventListener("DOMContentLoaded", function() {
    // Get references to necessary elements
    const doctorSelect = document.getElementById("doctor");
    const scheduleBtn = document.getElementById("schedule-btn");
    const appointmentSection = document.getElementById("appointment");
    const doctorDetails = document.querySelector(".doctor-details");
    const modal = document.getElementById("modal");
    const closeModalBtn = document.getElementsByClassName("close")[0];

    // Hide the appointment section and modal initially
    appointmentSection.style.display = "none";
    modal.style.display = "none";

    // Doctor details for each doctor
    const doctors = {
        "dr-smith": {
            name: "Dr. Smith",
            specialty: "Gynecologist",
            qualifications: [
                "Certified Specialist",
                "Years of Experience",
                "Consultation Hours: 9 AM - 6 PM"
            ]
        },
        "dr-jones": {
            name: "Dr. Jones",
            specialty: "Pediatrician",
            qualifications: [
                "Certified Specialist",
                "Years of Experience",
                "Consultation Hours: 10 AM - 7 PM"
            ]
        }
        // Add more doctors and their details as needed
    };

    // Event listener for the doctor selection dropdown
    doctorSelect.addEventListener("change", function() {
        const selectedDoctorId = doctorSelect.value;
        if (selectedDoctorId !== "") {
            // Show the appointment section
            appointmentSection.style.display = "block";

            // Display the selected doctor's details
            const selectedDoctor = doctors[selectedDoctorId];
            doctorDetails.innerHTML = `
                <h2>${selectedDoctor.name}</h2>
                <p>${selectedDoctor.specialty}</p>
                <ul>
                    ${selectedDoctor.qualifications.map(qualification => `<li>${qualification}</li>`).join("")}
                </ul>
            `;
        } else {
            appointmentSection.style.display = "none"; // Hide appointment section if no doctor selected
            doctorDetails.innerHTML = ""; // Clear doctor details if no doctor selected
        }
    });

    // Event listener for the "Schedule Consultation" button
    scheduleBtn.addEventListener("click", function() {
        const selectedDateTime = document.getElementById("appt-time").value;
        if (selectedDateTime !== "") {
            // Show the modal with success message
            modal.style.display = "block";
        } else {
            alert("Please choose a date and time for the consultation.");
        }
    });

    // Event listener to close the modal
    closeModalBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Close the modal when user clicks outside of it
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});
