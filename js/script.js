Parse.initialize ("vgOoNqVgkqwNl01sthePYKmdqzd73PqawiyuvDpe", "TBkMtRBBD7GOZZxAJkTlJ0REIjQBOj5Y0DvKK5tp"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
  Parse.serverURL = "https://parseapi.back4app.com/";

const btn = document.querySelector("#send")

btn.addEventListener("click" , function (e){
    
    e.preventDefault();

    const name = document.querySelector("#name")

    const value = name.value

    console.log(value)
})
