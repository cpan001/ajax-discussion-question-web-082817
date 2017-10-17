$(document).ready(function() {
  $(".btn.btn-primary").on("click", getUserInfo);
});

const url = "https://randomuser.me/api/";
function getUserInfo() {
  fetch(url)
    .then(resp => resp.json())
    .then(json => {
      addUserInfo(json.results[0]);
    });
}

function addUserInfo(person) {
  $("#profile_picture").attr("src", person.picture.large);
  $("#email").text(person.email);
  $("#phone").text(person.phone);
  $("#cell").text(person.cell);
  $("#date_of_birth").text(new Date(person.dob).toDateString());
  $("#street").text(person.location.street);
  $("#city").text(person.location.city);
  $("#state").text(person.location.state);
  $("#postcode").text(person.location.postcode);
  $("fullname").text(person.name.first + " " + person.name.last);
}
