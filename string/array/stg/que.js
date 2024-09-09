let user = prompt("Enter you have name");
let con ="@";
let New_user= con.concat(user);
console.log("\n");
console.log("Text Length\n"+ user.length);
document.getElementById("user").innerText = New_user;
document.getElementById("length").innerText = "Length: " + user.length;