// document.addEventListener("DOMContentLoaded", function () {
//   // Get the query parameters from the URL
//   var urlParams = new URLSearchParams(window.location.search);

//   // Get the form values from the query parameters
//   var firstname = urlParams.get("firstname");
//   var lastname = urlParams.get("lastname");
//   // Get more form values as needed

//   // Display the form values in the user dashboard
//   var userInfoDiv = document.getElementById("user-info");
//   userInfoDiv.innerHTML =
//     "First Name: " + firstname + "<br>" + "Last Name: " + lastname;
//   // Display more form values as needed
// });

// Retrieve user information from localStorage
const de_jsondata = JSON.parse(localStorage.getItem("formData"));
if (de_jsondata) {
  document.getElementById("first-name").textContent = de_jsondata.Firstname;
  document.getElementById("middle-name").textContent = de_jsondata.Middlename;
  document.getElementById("last-name").textContent = de_jsondata.Lastname;
  document.getElementById("bout").textContent = de_jsondata.about;
  document.getElementById("gender").textContent = de_jsondata.gender;
  document.getElementById("country").textContent = de_jsondata.country;
  document.getElementById("religion").textContent = de_jsondata.religion;
  document.getElementById("language").textContent = de_jsondata.language;
  document.getElementById("post").textContent = de_jsondata.Post;

  document.getElementById("highest-Level").textContent =
    de_jsondata.HighestLevel;
  document.getElementById("institution").textContent = de_jsondata.Institution;
  document.getElementById("study").textContent = de_jsondata.study;
  document.getElementById("year").textContent = de_jsondata.year;
  document.getElementById("achievement").textContent = de_jsondata.achievements;

  document.getElementById("number").textContent = de_jsondata.phone;
  document.getElementById("email").textContent = de_jsondata.email;
  document.getElementById("website").textContent = de_jsondata.website;
  document.getElementById("linkedin").textContent = de_jsondata.linkedin;
  document.getElementById("github").textContent = de_jsondata.github;
  document.getElementById("twitter").textContent = de_jsondata.twitter;
}

const profilePicture = localStorage.getItem("profilePictureProfilePage");
if (profilePicture) {
  document.getElementById("profile-pic").src = profilePicture;
}

const edit = document.querySelector(".Edit");

edit.addEventListener("click", (e) => {
  window.location.replace("port.htm");
  function setFormDataInCookies(formData) {
    // Convert the formData object to a JSON string
    const formDataJson = JSON.stringify(formData);

    // Set the formDataJson as a cookie
    document.cookie = `formData=${encodeURIComponent(
      formDataJson
    )}; expires=${getCookieExpirationDate()}; path=/`;
  }

  function getFormDataFromCookies() {
    const cookies = document.cookie.split(";");

    // Find the cookie that contains the formData
    const formDataCookie = cookies.find((cookie) =>
      cookie.trim().startsWith("formData=")
    );

    if (formDataCookie) {
      // Extract the formDataJson from the cookie
      const formDataJson = decodeURIComponent(formDataCookie.split("=")[1]);

      // Parse the formDataJson back to an object
      const formData = JSON.parse(formDataJson);

      return formData;
    }

    return null;
  }

  function getCookieExpirationDate() {
    const expirationDate = new Date();

    // Set the cookie expiration date to 1 year from the current date
    expirationDate.setFullYear(expirationDate.getFullYear() + 1);

    return expirationDate.toUTCString();
  }

  // Usage example

  setFormDataInCookies(formData);

  // Retrieve the formData from cookies
  const retrievedFormData = getFormDataFromCookies();
  console.log(retrievedFormData);
});
