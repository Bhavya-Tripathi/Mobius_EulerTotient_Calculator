// function to check if number is prime or not
function isPrime(n) {
  var i;
  if (n < 2) return false;
  for (i = 2; i <= Math.sqrt(n); i += 2) if (n % i == 0) return false;
  return true;
}
// Function to calculate value of mu(n)
function mobius(n) {
  var i;
  var p = 0;

  if (n == 1) return 1;

  for (i = 1; i <= n; i++) {
    if (n % i == 0 && isPrime(i)) {
      if (n % (i * i) == 0) return 0;
      else p++;
    }
  }
  return p % 2 != 0 ? -1 : 1;
}
// Function to calculate gcd
function gcd(a, b) {
  if (a == 0) return b;
  return gcd(b % a, a);
}
// function to calculate phi(n)
function totient(n) {
  var cop = 0;
  // since 1 is counted as coprime we start from 2
  for (let i = 2; i < n; i++) {
    if (gcd(n, i) == 1) cop++;
  }
  // including 1 now
  return cop + 1;
}

// FUNCTIONS TO DISPLAY OUTPUT

function output_mu() {
  var num = $("#n1").val();
  if ($("#n1").val().length == 0) {
    alert("Please enter a number or a list of space separated numbers.");
    return;
  } 
  num = String(num).trim().split(" ");
  
  if (isNaN(num.join("")) == true) {
    alert("Invalid entry. Please enter a positive integer.");
    return;
  }
  else {
    
    
    var result = [];
    var i;
    for (i = 0; i < num.length; i++) {
      if (Number(num[i])<=0){
          result.push("undefined");
      }  
      else{
        result.push(mobius(Number(num[i])));
      }
      
    }

    var strText = "\u03BC(n) = " + result.join(", ");
    $("#display_mu").text(strText);
  }
}
function output_phi() {
  var num = $("#n2").val();
  num = String(num).trim().split(" ");
  if (isNaN(num.join(""))==true) {
    alert("Invalid entry. Please enter a positive integer.");
    return;
  }
  if ($("#n2").val().length == 0) {
    alert("Please enter a number or a list of space separated numbers.");
    return;
  } else {
    
    var result = [];
    var i;
    for (i = 0; i < num.length; i++) {
        if (Number(num[i])<=0){
            result.push("undefined");
        }  
        else{
          result.push(totient(Number(num[i])));
        }
        
    }

    var strText = "\u03C6(n) = " + result.join(", ");
    $("#display_phi").text(strText);
  }
}
$(".reset-btn-mu").click(function () {
  $("#display_mu").text(" ");
});
$(".reset-btn-phi").click(function () {
  $("#display_phi").text(" ");
});
