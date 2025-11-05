const form = document.getElementById("checkup-form");
// console.log(form);

let bookingNum = 1;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log(e);
  const formData = new FormData(e.target);

  //   const bookingData = {
  //     BookingId: bookingNum++,
  //     FullName: formData.get("fullName"),
  //     PhoneNumber: formData.get("phoneNumber"),
  //     Email: formData.get("email"),
  //     Age: formData.get("age"),
  //     Date: formData.get("Date"),
  //     HealthConcern: formData.get("healthConcern"),
  //   };

  const bookingData = Object.fromEntries(formData.entries());
  bookingData.bookingId = bookingNum++;

  //   console.log(bookingData);

  const existingBooking = JSON.parse(localStorage.getItem("bookings")) || [];

  existingBooking.push(bookingData);

  localStorage.setItem("bookings", JSON.stringify(existingBooking));

  console.log("your Booking Submited");

  form.reset();
});
