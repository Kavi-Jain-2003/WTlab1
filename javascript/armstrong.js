n = parseInt(prompt("enter a no."));
var sum = 0;
temp = n;
while (temp > 0) {
    digit = temp % 10;
    sum = sum + digit*digit*digit;
    temp = parseInt(temp / 10);
}
if (n == sum) {
    document.write("yes " + n + " is an armstrong no.");
}
else {
    document.write("no " + n + " is not an armstrong no.");
}