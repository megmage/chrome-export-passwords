// first part of executing script
out="";
out2="";
var dat=document.getElementsByClassName("password");

for(i=0;i<dat.length;i++){
chrome.send('requestShowPassword', [i]);
};

// second part of executing script
for(i=0;i<dat.length;i++){
x=dat[i].parentNode;
out+="\n"+x.childNodes[0].innerText+"|"+x.childNodes[1].innerText+"|"+x.childNodes[2].childNodes[0].value;
out2+="<br/>"+x.childNodes[0].innerText+"|"+x.childNodes[1].innerText+"|"+x.childNodes[2].childNodes[0].value;
};
console.log(out);
document.write(out2);
