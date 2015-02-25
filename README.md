# chrome-export-passwords
Show all your chromium passwords in format ready to import in other browser like FireFox

Instructions:

I found a decision how to show all your passwords from Chromium. Tested on Ubuntu 14.04 and Chromium: Version 40.0.2214.111 Ubuntu 14.04 (64-bit). I used js script found early in search.


Output format changed for ready to use in FireFox Export plugin 
Please install this plugin from https://addons.mozilla.org/en-Us/firefox/addon/password-exporter/

Output maked in format: 
"hostname","username","password","formSubmitURL","httpRealm","usernameField","passwordField"

Last 3 fields "httpRealm","usernameField","passwordField" filled empty because Chrome has no information about in his Chrome Password Manager.


1. Open in Chromium browser link to Chrome password manager: chrome://settings-frame/passwords

2. Open console (F12) and insert this js code:

    out="";
    out2="";
    var pm = PasswordManager.getInstance();
    var model = pm.savedPasswordsList_.dataModel;
    var pl = pm.savedPasswordsList_;

    for(i=0;i&lt;model.length;i++){
       PasswordManager.requestShowPassword(i);
    };

3. After step 2 you will see all your passwords in Chromium Password manager Dialog.

4. And now insert this part of js code in console:

    for(i=0;i&lt;model.length;i++){
    var item = pl.getListItemByIndex(i);
    out+="\n"+model.array_[i][0]+"|"+model.array_[i][1]+"|"+item.childNodes[0].childNodes[2].childNodes[0].value;
    out2+='&lt;br/&gt;"http://'+model.array_[i][0]+'","'+model.array_[i][1]+'","'+item.childNodes[0].childNodes[2].childNodes[0].value+'","http://'+model.array_[i][0]+'","","",""';
};
    console.log(out);
    document.write(out2);

5. Now you see all your passwords in format i described early.

6. Copy all data to csv file and import to FireFox :)

7. Profit.

p.s. I Try to use all parts of code together, but it isnt work :(
