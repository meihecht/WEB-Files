// console.log("hello world");
// console.log(Math.floor(Math.random()*3));


// console.log(document.getElementsByClassName("options"));
// console.log( document.getElementsByClassName("options")[0].innerHTML);

const images = ["cheezit.JPG","cleat.JPG","Frisbee.JPG"];
const title = ["Cheezits", "cleat" , "Frisbee"];
for(i = 0; i < document.getElementsByClassName("options").length; i++){
  // console.log(i);
  document.getElementsByClassName('label')[i].innerHTML = title[i];

  console.log(document.getElementsByClassName("options")[i].innerHTML);

  document.getElementsByClassName("options")[i].innerHTML += '<img src = "assets/' + images[i] + ' " >"';
  document.getElementsByClassName("options")[i].setAttribute("id",title[i]);

  document.getElementsByClassName("options")[i].addEventListener("click", function(){changeColor(this.id)});
}

function changeColor(sectionID){
  console.log(sectionID);
  document.getElementById(sectionID).classList.toggle("blue");
}
