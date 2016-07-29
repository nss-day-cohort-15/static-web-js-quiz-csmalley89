var submitButton = document.getElementById("button");
var heightInput = document.getElementById("height");
var characterInput = document.getElementById("characters");


function grow (tree) {

  if (tree.height === "" || tree.character === "") {
    alert("Both fields must have a value");
  }
  for (var i = 0; i < tree.height; i++) {
    var treeShape = " ".repeat(tree.height - i);
    treeShape += tree.character.repeat((2 * i) + 1);
    console.log(treeShape);
  };
}

function display(event) {
  console.log(event);
  event.preventDefault();
    var tree = {
      height: document.getElementById("height").value,
      character: document.getElementById("characters").value
  };
  console.log(tree);
  grow(tree);

}

// EVENT LISTENERS
submitButton.addEventListener("click", display);

characterInput.addEventListener("keydown", function(){

  if (event.keyCode === 13){
    submitButton.click();
  }
})

heightInput.addEventListener("keydown", function(){

  if (event.keyCode === 13){
    submitButton.click();
  }
})
