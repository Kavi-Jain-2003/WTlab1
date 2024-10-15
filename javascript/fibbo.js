a=0;
b=1;
document.write(a +' '+ b+' ');
n = parseInt(prompt("enter a no."));
for (let i = 1; i <= n; i++) {
    c = a + b;
    document.write(" " + c);
    a = b;
    b = c;
}