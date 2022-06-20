(function () { 
    var names = ["Alli", "Alisha", "June", "jaquan", "jeniza", "jellen", "Jesus", "June", "Julia", "Juli"];
/*	var names =new Array();
names[0]=" Alli";
names[1]=" Alisha";
names[2]=" June";
names[3]=" jaquan";
names[4]=" jeniza";
names[5]=" jellen";
names[6]=" Julia";
names[7]=" Juli";
names[9]=" Jesus";
*/
for (var i = 0; i < names.length; i++) {

	if (names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
		console.log("Goodbye"+ names[i])
}

 else{
		console.log("Hello"+ names[i])
	} 
}
} )();