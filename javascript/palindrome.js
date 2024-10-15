n=parseInt(prompt("enter a no."));
temp = n;
rev=0;
while (temp > 0) {
    digit = temp % 10;
    rev=rev*10+digit;
    temp = parseInt(temp / 10);
}
if (n == temp) {
    document.write("yes " + n + " is an Pallindrome no.");
}
else {
    document.write("no " + n + " is not an Pallindrome no.");
}