var userName = prompt('whats you name?');
alert('welcome '+userName+'in our website');


var myCar = prompt('whats your car brand?')
document.write('<h2>' +'my car is'+ myCar +'</h2>');


function checkUp(){

var message = prompt('do you have credit card?');
if(message=='yes'){
     return alert('you can use our services');

}else
{ return alert('you can not use our services');

} 
}
function showingImage() {

var brand = prompt('whats carbrand would you like to rent: toyota or hyundai or ford?');



while(brand !=='toyota' && brand!=='ford' && brand!=='huyndai'){
 
    brand=prompt('please you have to write one of them  ')
}


var theCar='';
if(brand==='toyota'){
    theCar= '<img src="images/toyota.jpg" />';
}
else if(brand==='hyundai'){
    theCar= '<img src="images/hyundai.jpg" />';
}else if(brand==='ford'){
    theCar='<img src="images/ford.jpg" />'
}


allCars='';
allCars=theCar;
var numCar=prompt('how many cars would you like to rent');
for(var i = 1 ; i<numCar ; i++){
    
    allCars =allCars+ theCar;
}

 return document.write('here the cars that you want to rent'+'<br>'+allCars);
}