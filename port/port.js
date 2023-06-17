// // let ProfilePic = document.getElementById("profile-pic");
// // let inputFile = document.getElementById("input-file");

// // inputFile.onchange = (e) => {
// //   ProfilePic.src = URL.createObjectURL(inputFile.files[0]);
// // };

// // let submit = document.querySelector(".submit");
// // submit.addEventListener("click", (e) => {
// //   e.preventDefault();
// // });

// function FormUserData(e) {
//   //e.preventDefault();
//   const Firstname = document.querySelector(".firstname").value.trim();
//   const lastname = document.querySelector(".lastname").value.trim();
//   const Middlename = document.querySelector(".middlename").value.trim();
//   //for about
//   const about = document.querySelector(".bout").value.trim();
//   const gender = document.querySelector(".gender").value.trim();
//   const country = document.querySelector(".country").value.trim();
//   const religion = document.querySelector(".religion").value.trim();
//   const language = document.querySelector(".language").value.trim();

//   //for education
//   const HighestLevel = document.getElementById("highest").value.trim();
//   const Institution = document.getElementById("institution").value.trim();
//   const study = document.getElementById("study").value.trim();
//   const year = document.getElementById("year").value.trim();
//   const achievements = document.getElementById("achievements").value.trim();

//   //for contact
//   const phone = document.querySelector(".Phone-number").value.trim();
//   const email = document.querySelector(".emaill").value.trim();
//   const website = document.querySelector(".websits").value.trim();
//   const linkedin = document.querySelector(".linkedins").value.trim();
//   const github = document.querySelector(".githubs").value.trim();
//   const twitter = document.querySelector(".twitter").value.trim();

//   //storing the user information
//   let formData = {
//     Firstname: Firstname,
//     Lastname: lastname,
//     Middlename: Middlename,
//     about: about,
//     gender: gender,
//     country: country,
//     religion: religion,
//     language: language,
//     HighestLevel: HighestLevel,
//     Institution: Institution,
//     study: study,
//     year: year,
//     achievements: achievements,
//     phone: phone,
//     email: email,
//     website: website,
//     linkedin: linkedin,
//     github: github,
//     twitter: twitter,
//   };

//   //convert to string
//   let jsondata = JSON.stringify(formData);

//   localStorage.setItem("formData", jsondata);

//   let de_jsondata = JSON.parse(localStorage.getItem("formData"));
//   if (de_jsondata) {
//     Firstname.value = de_jsondata.Firstname;
//     lastname.value = de_jsondata.Lastname;
//     Middlename.value = de_jsondata.Middlename;
//     about.value = de_jsondata.about;
//     gender.value = de_jsondata.gender;
//     country.value = de_jsondata.country;
//     religion.value = de_jsondata.religion;
//     language.value = de_jsondata.language;
//     HighestLevel.value = de_jsondata.HighestLevel;
//     Institution.value = de_jsondata.Institution;
//     study.value = de_jsondata.study;
//     year.value = de_jsondata.year;
//     achievements.value = de_jsondata.achievements;
//     phone.value = de_jsondata.phone;
//     email.value = de_jsondata.email;
//     website.value = de_jsondata.website;
//     linkedin.value = de_jsondata.linkedin;
//     github.value = de_jsondata.github;
//     twitter.value = de_jsondata.twitter;

//     // window.location.href = "/port/profile.htm";
//   }
// }

// document.querySelector(".submit").addEventListener("click", handleSubmit());
// document.querySelector(".submit").addEventListener("click", FormUserData());

// const submit = document.querySelector(".submit");

// // submit.addEventListener("click", (e) => {
// //   e.preventDefault();
// //   document.addEventListener("DOMContentLoaded", () => {
// //     let de_jsondata = JSON.parse(localStorage.getItem("formData"));
// //     if (de_jsondata) {
// //       const Firstname = document.querySelector(".firstname");
// //       const lastname = document.querySelector(".lastname");
// //       const Middlename = document.querySelector(".middlename");
// //       //for about
// //       const about = document.querySelector(".bout");
// //       const gender = document.querySelector(".gender");
// //       const country = document.querySelector(".country");
// //       const religion = document.querySelector(".religion");
// //       const language = document.querySelector(".language");

// //       //for education
// //       const HighestLevel = document.getElementById("highest");
// //       const Institution = document.getElementById("institution");
// //       const study = document.getElementById("study");
// //       const year = document.getElementById("year");
// //       const achievements = document.getElementById("achievements");

// //       //for contact
// //       const phone = document.querySelector(".Phone-number");
// //       const email = document.querySelector(".emaill");
// //       const website = document.querySelector(".websits");
// //       const linkedin = document.querySelector(".linkedins");
// //       const github = document.querySelector(".githubs");
// //       const twitter = document.querySelector(".twitter");

// //       const firtnameProfile = document.querySelector(".first");
// //       const middlenameProfile = document.querySelector(".middle");
// //       const lastnameProfile = document.querySelector(".last");

// //       //about profile
// //       const aboutProfile = document.querySelector(".bou");
// //       const genderProfile = document.querySelector(".gend");
// //       const countProfile = document.querySelector(".count");
// //       const ReligionProfile = document.querySelector("relig");
// //       const LanguageProgile = document.querySelector(".lang");

// //       //education profile
// //       const highestProfile = document.querySelector(".high");
// //       const institutionProfile = document.querySelector(".inst");
// //       const studyprofile = document.querySelector(".stud");
// //       const YearProfile = document.querySelector(".yea");
// //       const achievementprofile = document.querySelector(".achieve");

// //       //   //contact profile
// //       const NumberProfile = document.querySelector(".numb");
// //       const EmailProfile = document.querySelector(".emai");
// //       const websiteProfile = document.querySelector(".websi");
// //       const linkedinProfile = document.querySelector(".link");
// //       const githubProfile = document.querySelector(".gith");
// //       const twitterProfile = document.querySelector(".twit");

// //       firtnameProfile.value = de_jsondata.Firstname;
// //       middlenameProfile.value = de_jsondata.Middlename;
// //       lastnameProfile.value = de_jsondata.Lastname;
// //       aboutProfile.value = de_jsondata.about;
// //       genderProfile.value = de_jsondata.gender;
// //       countProfile.value = de_jsondata.count;
// //       ReligionProfile.value = de_jsondata.religion;
// //       LanguageProgile.value = de_jsondata.language;
// //       highestProfile.value = de_jsondata.highest;
// //       institutionProfile.value = de_jsondata.Institution;
// //       studyprofile.value = de_jsondata.study;
// //       YearProfile.value = de_jsondata.year;
// //       achievementprofile.value = de_jsondata.achievements;
// //       NumberProfile.value = de_jsondata.phone;
// //       EmailProfile.value = de_jsondata.email;
// //       websiteProfile.value = de_jsondata.website;
// //       linkedinProfile.value = de_jsondata.linkedin;
// //       githubProfile.value = de_jsondata.github;
// //       twitterProfile.value = de_jsondata.twitter;

// //       window.location.href = "/port/profile.htm";
// //     }
// //   });
// // });

// document.getElementById("user-information").addEventListener("submit", (e) => {
//   e.preventDefault();
//   var Firstname = document.querySelector(".firstname").value;
//   var lastname = document.querySelector(".lastname").value;
//   var Middlename = document.querySelector(".middlename").value;

//   //creating url
//   var url =
//     "/port/profile.htm" +
//     "?Firstname=" +
//     encodeURIComponent(Firstname) +
//     "&Middlename=" +
//     encodeURIComponent(Middlename) +
//     "&lastname=" +
//     encodeURIComponent(lastname);

//   window.location.href = url;
// });

// Function to handle when the form is submitted
function handleSubmit(eve) {
  // Prevent form submission
  //eve.preventDefault();
  const fileInput = document.getElementById("input-file");
  const file = fileInput.files[0];
  const reader = new FileReader();

  // Read the file as a data URL
  reader.onload = function (event) {
    const dataURL = event.target.result;

    // Save the data URL to local storage
    localStorage.setItem("profilePicture", dataURL);

    // Set the source of the profile picture
    document.getElementById("profile-pic").src = dataURL;
    localStorage.setItem("profilePictureProfilePage", dataURL);
    console.log(profilePicture);
  };

  if (file) {
    reader.readAsDataURL(file);
  }
}
document.getElementById("input-file").addEventListener("change", handleSubmit);

// Check if a profile picture is stored in local storage
const profilePicture = localStorage.getItem("profilePicture");
if (profilePicture) {
  document.getElementById("profile-pic").src = profilePicture;
}

// Function to handle form submission
function submitForm(event) {
  event.preventDefault();

  // Retrieve user information from different sections
  const firstName = document.getElementById("firstname").value;
  const middleName = document.getElementById("middlename").value;
  const lastName = document.getElementById("lastname").value;
  const about = document.querySelector(".bout").value;

  const gender = document.querySelector(".gender").value.trim();
  const country = document.querySelector(".country").value.trim();
  const religion = document.querySelector(".religion").value.trim();
  const language = document.querySelector(".language").value.trim();
  const post = document.querySelector(".post").value.trim();

  //for education
  const HighestLevel = document.getElementById("highest").value.trim();
  const Institution = document.getElementById("institution").value.trim();
  const study = document.getElementById("study").value.trim();
  const year = document.getElementById("year").value.trim();
  const achievements = document.getElementById("achievements").value.trim();

  //for contact
  const phone = document.querySelector(".Phone-number").value.trim();
  const email = document.querySelector(".emaill").value.trim();
  const website = document.querySelector(".websits").value.trim();
  const linkedin = document.querySelector(".linkedins").value.trim();
  const github = document.querySelector(".githubs").value.trim();
  const twitter = document.querySelector(".twitter").value.trim();

  //storing the user information
  let formData = {
    Firstname: firstName,
    Lastname: lastName,
    Middlename: middleName,
    about: about,
    gender: gender,
    country: country,
    religion: religion,
    language: language,
    Post: post,
    HighestLevel: HighestLevel,
    Institution: Institution,
    study: study,
    year: year,
    achievements: achievements,
    phone: phone,
    email: email,
    website: website,
    linkedin: linkedin,
    github: github,
    twitter: twitter,
  };

  //convert to string
  let jsondata = JSON.stringify(formData);

  localStorage.setItem("formData", jsondata);
  // Return null if the formData cookie is not found

  // let de_jsondata = JSON.parse(localStorage.getItem("formData"));
  // if (de_jsondata) {
  //   firstName.value = de_jsondata.Firstname;
  //   lastName.value = de_jsondata.Lastname;
  //   middleName.value = de_jsondata.Middlename;
  //   about.value = de_jsondata.about;
  //   gender.value = de_jsondata.gender;
  //   country.value = de_jsondata.country;
  //   religion.value = de_jsondata.religion;
  //   language.value = de_jsondata.language;
  //   HighestLevel.value = de_jsondata.HighestLevel;
  //   Institution.value = de_jsondata.Institution;
  //   study.value = de_jsondata.study;
  //   year.value = de_jsondata.year;
  //   achievements.value = de_jsondata.achievements;
  //   phone.value = de_jsondata.phone;
  //   email.value = de_jsondata.email;
  //   website.value = de_jsondata.website;
  //   linkedin.value = de_jsondata.linkedin;
  //   github.value = de_jsondata.github;
  //   twitter.value = de_jsondata.twitter;
  // }
  //   if (firstName.trim() === "" || lastName.trim() === "") {
  //     alert("please fill in all required field.");
  //     return;
  //   }

  // Redirect to profile.htm
  window.location.replace("profile.htm");
}
function cookieForm() {
  let formData = {
    Firstname: firstName,
    Lastname: lastName,
    Middlename: middleName,
    about: about,
    gender: gender,
    country: country,
    religion: religion,
    language: language,
    Post: post,
    HighestLevel: HighestLevel,
    Institution: Institution,
    study: study,
    year: year,
    achievements: achievements,
    phone: phone,
    email: email,
    website: website,
    linkedin: linkedin,
    github: github,
    twitter: twitter,
  };
  setFormDataInCookies(formData);
}

function setFormDataInCookies(formData) {
  const formDataJson = JSON.stringify(formData);

  document.cookie = `formData=${encodeURIComponent(
    formDataJson
  )}; expires=${expirationDates()}; path=/`;
}

function expirationDates() {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDay() + 1);

  return expirationDate.toUTCString();
}
// Attach the submitForm function to the form's submit event

document.getElementById("submit").addEventListener("click", function () {
  const userAboutForm = document.getElementById("user-about");
  const userInformationForm = document.getElementById("user-information");
  const userEducationForm = document.getElementById("user-education");
  const userContactForm = document.getElementById("user-contact");

  userAboutForm.submit();
  userInformationForm.submit();
  userEducationForm.submit();
  userContactForm.submit();
  submitForm(event);
  handleSubmit();
  cookieForm();

  expirationDates();
  setFormDataInCookies();
});

// const form = document.querySelectorALl("form");
// const submitButton = document.getElementById("submit");

// form.addEventListener("input", (e) => {
//   const isValid = isFormFieldsFIlled();

//   if (isValid) {
//     submitButton.style.display = "block";
//   } else {
//     submitButton.style.display = "none";
//   }

//   function isValid() {
//     const inputs = form.querySelectorAll("input");
//     for (let i = 0; i < inputs.length; i++) {
//       if (inputs[i].value.trim() === "") {
//         return false; // Empty field found, form is not filled
//       }
//     }
//     return true;
//   }
// });
