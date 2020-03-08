// VICTOR LI
// CISC 4800 (SPECIAL TOPICS)
// PROJECT 1
// 03/06/20

function thank (){
   var button = document.getElementById("clickme");
   var theList = document.getElementById("money");
   alert("Thank you for the $"+ theList.options[theList.selectedIndex].value);
};
