# chrome-export-passwords
Show all your chromium passwords in format ready to import in other browser like FireFox

Instructions:

I found a decision how to show all your passwords from Chromium. Tested on Ubuntu 14.04 and Chromium: Version 40.0.2214.111 Ubuntu 14.04 (64-bit). I used js script found early in search.

Output maked in format: 
url|login|pass\n

1. Open in Chromium browser link to Chrome password manager: chrome://settings-frame/passwords

2. Open console (F12) and insert this js code:


    out=""; out2="";
    var dat=document.getElementsByClassName("password");
    for(i=0;i&lt;dat.length;i++){
    chrome.send('requestShowPassword', [i]);
    };

2. After step 2 you will see all your passwords in Chromium Password manager Dialog.

3. And now insert this part of js code in console:


    for(i=0;i&lt;dat.length;i++){
    x=dat[i].parentNode;
    out+='\n'+x.childNodes[0].innerText+"|"+x.childNodes[1].innerText+"|"
    +x.childNodes[2].childNodes[0].value;
    out2+="&lt;br/&gt;"+x.childNodes[0].innerText+"|"+x.childNodes[1].innerText+"|"
    +x.childNodes[2].childNodes[0].value;};console.log(out);
    document.write(out2);

4. Now you see all your passwords in format i described early.

5. Write script on any language to import your passwords in browser like FireFox :)

6. Profit.

p.s. I Try to use all parts of code together, but it isnt work :(
