const btn = document.querySelector(".btn-preview");

//
btn.addEventListener("click", function (e) {
  e.preventDefault();
  //name
  document.getElementById("email-temp").innerHTML =
    document.getElementById("email-form").value;
  //about
  document.getElementById("summary-temp").innerHTML =
    document.getElementById("summary-form").value;
  //contact
  document.getElementById("address-temp").innerHTML =
    document.getElementById("address-form").value;
  //
  document.getElementById("email-temp").innerHTML =
    document.getElementById("email-form").value;
  //
  document.getElementById("phone-temp").innerHTML =
    document.getElementById("phone-form").value;
  //exprince
  //compnay
  document.getElementById("company-temp").innerHTML =
    document.getElementById("company-form").value;
  //post
  document.getElementById("post-temp").innerHTML =
    document.getElementById("post-form").value;
  //experince
  document.getElementById("expreince-work-temp").innerHTML =
    document.getElementById("expreince-work-form").value;
  //education
  document.getElementById("university-temp").innerHTML =
    document.getElementById("university-form").value;
  //course
  document.getElementById("course-temp").innerHTML =
    document.getElementById("course-form").value;
  //course info
  document.getElementById("course-info-temp").innerHTML =
    document.getElementById("course-info-form").value;
  //hide form
  const form = (document.getElementById("form").style.display = "none");
  document.getElementById("page").style.display = "block";
});

document.getElementById("pdf").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("page").print();
});

// const profile = document.getElementById("profile-btn");
// const img = document.getElementById("img-file").files[0];
// profile.addEventListener("click", function () {
//   console.log(img);
// });
console.log(window);
