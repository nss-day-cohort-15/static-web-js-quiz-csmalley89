var submitButton = document.getElementById("button");
var heightInput = document.getElementById("height");
var characterInput = document.getElementById("characters");
var charHeight = heightInput && characterInput;

var grow = function() {
  var tree = {
    height: document.getElementById("height").value ,
    character: document.getElementById("characters").value
  }
  console.log(tree.height, tree.character);

  if (tree.height === "" || tree.character === "") {
    alert("Both fields must have a value");
  }
  for (var i = 0; i < tree.height; i++) {
    var treeShape = " ".repeat(tree.height - i);
    treeShape += tree.character.repeat((2 * i) + 1);
    document.getElementById("result").innerHTML += treeShape + "\n";
    console.log(treeShape);

  };
};

// EVENT LISTENERS
submitButton.addEventListener("click", grow);

charHeight.addEventListener("keydown", function(){

  if (event.keyCode === 13){
    submitButton.click();
  }
});

