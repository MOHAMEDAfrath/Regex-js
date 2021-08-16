//Zip code validation
var zipCode = ['600007','A400088','400088B','400 888'];
//Zip code with space and without space
var zipCodeRegex = RegExp("^[1-9][0-9]{2}\\s{0,1}[0-9]{3}$");
for(let i = 0;i<zipCode.length;i++){
    if(zipCodeRegex.test(zipCode[i])){
        console.log("Valid Zip: "+zipCode[i]);
    }else{
        console.log("Invalid Zip: "+zipCode[i]);
    }
}