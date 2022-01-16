var siteNameInput = document.getElementById("siteNameInput");
var urlSiteInput = document.getElementById("urlSiteInput");
var btnSubmit = document.getElementById("btnSubmit");
var inputs = [];

// Fetch content stored in localStorage and disply it
if (JSON.parse(localStorage.getItem("urlLite")) != null) {
  inputs = JSON.parse(localStorage.getItem("urlLite"));
  displySites();
}

btnSubmit.addEventListener("click", function () {
  //    this simple valdetion
  if (siteNameInput.value == "" || urlSiteInput.value == "") {
    document.getElementById("nameAlert").classList.remove("d-none");
    document.getElementById("urlAlert").classList.remove("d-none");
  } else {
    addSite();
    clearForm();
    displySites();
    document.getElementById("nameAlert").classList.add("d-none");
    document.getElementById("urlAlert").classList.add("d-none");
  }
});

// Fetch the content from the buttons and put them in localStorage
function addSite() {
  var siteUrl = {
    name: siteNameInput.value,
    url: urlSiteInput.value,
  };

  inputs.push(siteUrl);
  localStorage.setItem("urlLite", JSON.stringify(inputs));
}

// To view the content
function displySites() {
  var site = "";
  for (var i = 0; i < inputs.length; i++) {
    site += `
    
        
    <div  class=" w-75 m-auto border rounded-3 shadow bakgrond mt-5 ">
    
    <div class=" col-md-7  d-flex justify-content-between align-items-center py-4  ">
    <h2 class="ms-3   pe-5">${inputs[i].name}</h2>
    <div>
    <a target="_blank" id="urlButtom" href="${inputs[i].url}" class=" btn btn-info">visit</a>
    <button onclick="deleteSites(${i})" class="deleteButoon btn btn-danger" id="deleteButoom">Delete</button>
    </div>
    </div>
    </div>
    `;
  }
  document.getElementById("containt").innerHTML = site;
}
// this function for clear the form after add site
function clearForm() {
  siteNameInput.value = "";
  urlSiteInput.value = "";
}

// for delete site
function deleteSites(index) {
  inputs.splice(index, 1);
  displySites();
  localStorage.setItem("urlLite", JSON.stringify(inputs));
}
