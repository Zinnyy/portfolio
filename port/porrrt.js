// // Get the profile picture element and the input file element
// let profilePic = document.getElementById("profile-pic");
// let inputFile = document.getElementById("input-file");

// // Update the profile picture when a new file is selected
// inputFile.onchange = (e) => {
//   profilePic.src = URL.createObjectURL(inputFile.files[0]);
// };

// // Prevent the form submission on submit button click
// let submit = document.querySelector(".submit");
// submit.addEventListener("click", (e) => {
//   e.preventDefault();

//   // Get the form inputs
//   let firstName = document.getElementById("name").value;
//   let lastName = document.getElementById("name").value;
//   let middleName = document.getElementById("name").value;

//   // Get the updated profile picture
//   let updatedProfilePic = profilePic.src;

//   // Get the about me inputs
//   let about = document.getElementById("about").value;
//   let gender = document.querySelector(".gender").value;
//   let country = document.querySelector(".country").value;
//   let religion = document.querySelector(".religion").value;
//   let language = document.querySelector(".language").value;

//   // Get the education inputs
//   let educationLevel = document.querySelector(
//     ".education input[name='relgion']"
//   ).value;
//   let institutionName = document.querySelector(
//     ".education input[name='relgion']"
//   ).value;
//   let fieldOfStudy = document.querySelector(
//     ".education input[name='relgion']"
//   ).value;
//   let graduationYear = document.querySelector(
//     ".education input[name='relgion']"
//   ).value;
//   let academicAchievements = document.querySelector(
//     ".education input[name='relgion']"
//   ).value;

//   // Get the contact inputs
//   let phoneNumber = document.querySelector(".phone-number").value;
//   let email = document.getElementById("email").value;
//   let website = document.querySelector(".websits").value;
//   let linkedIn = document.querySelector(".linkedins").value;
//   let github = document.querySelector(".githubs").value;
//   let twitter = document.getElementById("Twitter").value;

//   // Store the form data in an object
//   let formData = {
//     firstName: firstName,
//     lastName: lastName,
//     middleName: middleName,
//     profilePic: updatedProfilePic,
//     about: about,
//     gender: gender,
//     country: country,
//     religion: religion,
//     language: language,
//     educationLevel: educationLevel,
//     institutionName: institutionName,
//     fieldOfStudy: fieldOfStudy,
//     graduationYear: graduationYear,
//     academicAchievements: academicAchievements,
//     phoneNumber: phoneNumber,
//     email: email,
//     website: website,
//     linkedIn: linkedIn,
//     github: github,
//     twitter: twitter,
//   };

//   // Convert the form data to a JSON string
//   let jsonData = JSON.stringify(formData);

//   // Store the JSON data in the local storage
//   localStorage.setItem("formData", jsonData);

//   // Display a success message
//   alert("Form data has been stored in the local storage!");
// });

// Get the form and form elements
// const form = document.getElementById("myForm");
// const profilePic = document.getElementById("profile-pic");
// const inputFile = document.getElementById("input-file");
// const submit = document.getElementById("submit");

// // Update the profile picture when a new file is selected
// inputFile.onchange = (e) => {
//   profilePic.src = URL.createObjectURL(inputFile.files[0]);
// };

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
  };

  if (file) {
    reader.readAsDataURL(file);
  }
}

// Check if a profile picture is stored in local storage
const profilePicture = localStorage.getItem("profilePicture");
if (profilePicture) {
  document.getElementById("profile-pic").src = profilePicture;
}

document.getElementById("input-file").addEventListener("change", handleSubmit);

// Add event listener to the form submit event

//storing the user information
//for name

function FormUserData(e) {
  //e.preventDefault();
  const Firstname = document.querySelector(".firstname").value.trim();
  const lastname = document.querySelector(".lastname").value.trim();
  const Middlename = document.querySelector(".middlename").value.trim();
  //for about
  const about = document.querySelector(".bout").value.trim();
  const gender = document.querySelector(".gender").value.trim();
  const country = document.querySelector(".country").value.trim();
  const religion = document.querySelector(".religion").value.trim();
  const language = document.querySelector(".language").value.trim();

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
    Firstname: Firstname,
    Lastname: lastname,
    Middlename: Middlename,
    about: about,
    gender: gender,
    country: country,
    religion: religion,
    language: language,
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

  let de_jsondata = JSON.parse(localStorage.getItem("formData"));
  if (de_jsondata) {
    Firstname.value = de_jsondata.Firstname;
    lastname.value = de_jsondata.Lastname;
    Middlename.value = de_jsondata.Middlename;
    about.value = de_jsondata.about;
    gender.value = de_jsondata.gender;
    country.value = de_jsondata.country;
    religion.value = de_jsondata.religion;
    language.value = de_jsondata.language;
    HighestLevel.value = de_jsondata.HighestLevel;
    Institution.value = de_jsondata.Institution;
    study.value = de_jsondata.study;
    year.value = de_jsondata.year;
    achievements.value = de_jsondata.achievements;
    phone.value = de_jsondata.phone;
    email.value = de_jsondata.email;
    website.value = de_jsondata.website;
    linkedin.value = de_jsondata.linkedin;
    github.value = de_jsondata.github;
    twitter.value = de_jsondata.twitter;

    // window.location.href = "/port/profile.htm";
  }
}

document.querySelector(".submit").addEventListener("click", handleSubmit());
document.querySelector(".submit").addEventListener("click", FormUserData());

document.addEventListener("DOMContentLoaded", () => {
  let de_jsondata = JSON.parse(localStorage.getItem("formData"));

  if (de_jsondata) {
    const firtnameProfile = document.querySelector(".first");
    const middlenameProfile = document.querySelector(".middle");
    const lastnameProfile = document.querySelector(".last");

    //about profile
    const aboutProfile = document.querySelector(".bou");
    const genderProfile = document.querySelector(".gend");
    const countProfile = document.querySelector(".count");
    const ReligionProfile = document.querySelector("relig");
    const LanguageProgile = document.querySelector(".lang");

    //education profile
    const highestProfile = document.querySelector(".high");
    const institutionProfile = document.querySelector(".inst");
    const studyprofile = document.querySelector(".stud");
    const YearProfile = document.querySelector(".yea");
    const achievementprofile = document.querySelector(".achieve");

    //   //contact profile
    const NumberProfile = document.querySelector(".numb");
    const EmailProfile = document.querySelector(".emai");
    const websiteProfile = document.querySelector(".websi");
    const linkedinProfile = document.querySelector(".link");
    const githubProfile = document.querySelector(".gith");
    const twitterProfile = document.querySelector(".twit");

    //get data from the form tag
    // firtnameProfile.innerHTML = Firstname.value;
    // lastnameProfile.innerHTML = lastname.value;
    // middlenameProfile.innerHTML = Middlename.value;
    // aboutProfile.innerHTML = about.value;
    // genderProfile.innerHTML = gender.value;
    // countProfile.innerHTML = country.value;
    // ReligionProfile.innerHTML = religion.value;
    // LanguageProgile.innerHTML = language.value;
    // highestProfile.innerHTML = HighestLevel.value;
    // institutionProfile.innerHTML = Institution.value;
    // studyprofile.innerHTML = study.value;
    // YearProfile.innerHTML = year.value;
    // achievementprofile.innerHTML = achievements.value;
    // NumberProfile.innerHTML = phone.value;
    // EmailProfile.innerHTML = email.value;
    // websiteProfile.innerHTML = website.value;
    // linkedinProfile.innerHTML = linkedin.value;
    // githubProfile.innerHTML = github.value;
    // twitterProfile.innerHTML = twitter.value;
  }
});

// function profileInformation() {
//   const Firstname = document.querySelector(".firstname");
//   const lastname = document.querySelector(".lastname");
//   const Middlename = document.querySelector(".middlename");
//   //for about
//   const about = document.querySelector(".bout");
//   const gender = document.querySelector(".gender");
//   const country = document.querySelector(".country");
//   const religion = document.querySelector(".religion");
//   const language = document.querySelector(".language");

//   //for education
//   const HighestLevel = document.getElementById("highest");
//   const Institution = document.getElementById("institution");
//   const study = document.getElementById("study");
//   const year = document.getElementById("year");
//   const achievements = document.getElementById("achievements");

//   //for contact
//   const phone = document.querySelector(".Phone-number");
//   const email = document.querySelector(".emaill");
//   const website = document.querySelector(".websits");
//   const linkedin = document.querySelector(".linkedins");
//   const github = document.querySelector(".githubs");
//   const twitter = document.querySelector(".twitter");

//   //for profile
//   const firtnameProfile = document.querySelector(".first");
//   const middlenameProfile = document.querySelector(".middle");
//   const lastnameProfile = document.querySelector(".last");

//   //about profile
//   const aboutProfile = document.querySelector(".bou");
//   const genderProfile = document.querySelector(".gend");
//   const countProfile = document.querySelector(".count");
//   const ReligionProfile = document.querySelector("relig");
//   const LanguageProgile = document.querySelector(".lang");

//   //education profile
//   const highestProfile = document.querySelector(".high");
//   const institutionProfile = document.querySelector(".inst");
//   const studyprofile = document.querySelector(".stud");
//   const YearProfile = document.querySelector(".yea");
//   const achievementprofile = document.querySelector(".achieve");

//   //contact profile
//   const NumberProfile = document.querySelector(".numb");
//   const EmailProfile = document.querySelector(".emai");
//   const websiteProfile = document.querySelector(".websi");
//   const linkedinProfile = document.querySelector(".link");
//   const githubProfile = document.querySelector(".gith");
//   const twitterProfile = document.querySelector(".twit");

//   //get data from the form tag
//   firtnameProfile.innerHTML = Firstname.value;
//   lastnameProfile.innerHTML = lastname.value;
//   middlenameProfile.innerHTML = Middlename.value;
//   aboutProfile.innerHTML = about.value;
//   genderProfile.innerHTML = gender.value;
//   countProfile.innerHTML = country.value;
//   ReligionProfile.innerHTML = religion.value;
//   LanguageProgile.innerHTML = language.value;
//   highestProfile.innerHTML = HighestLevel.value;
//   institutionProfile.innerHTML = Institution.value;
//   studyprofile.innerHTML = study.value;
//   YearProfile.innerHTML = year.value;
//   achievementprofile.innerHTML = achievements.value;
//   NumberProfile.innerHTML = phone.value;
//   EmailProfile.innerHTML = email.value;
//   websiteProfile.innerHTML = website.value;
//   linkedinProfile.innerHTML = linkedin.value;
//   githubProfile.innerHTML = github.value;
//   twitterProfile.innerHTML = twitter.value;
// }

// function redirectToProfile(a) {

// }
// document
//   .querySelector(".submit")
//   .addEventListener("onclick", profileInformation());
// document
//   .querySelector(".submit")
//   .addEventListener("click", redirectToProfile());
