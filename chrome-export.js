/**
* Script ver 0.03beta
* Writing by Ruslan Kovalev : skidisaster@gmail.com
* Feb.25 2015
* output format changed for ready to use in FireFox Export plugin
* please install this plugin from https://addons.mozilla.org/en-Us/firefox/addon/password-exporter/
* changes:
* - version based on Chrome api objects not on DOM.
*/



// first part of executing script
out="";
out2="";
var pm = PasswordManager.getInstance();
var model = pm.savedPasswordsList_.dataModel;
var pl = pm.savedPasswordsList_;

for(i=0;i<model.length;i++){
PasswordManager.requestShowPassword(i);
};


// second part of executing script
for(i=0;i<model.length;i++){
var item = pl.getListItemByIndex(i);
out+="\n"+model.array_[i][0]+"|"+model.array_[i][1]+"|"+item.childNodes[0].childNodes[2].childNodes[0].value;
out2+='<br/>"http://'+model.array_[i][0]+'","'+model.array_[i][1]+'","'+item.childNodes[0].childNodes[2].childNodes[0].value+'","http://'+model.array_[i][0]+'","","",""';
};
console.log(out);
document.write(out2);
