n=parseInt(prompt("enter a limit"));
var sum=0;
for(var i=1; i<=n; i++)
{
    sum=sum+i;
}
document.write("sum of "+ n + " natural numbers: " + sum);