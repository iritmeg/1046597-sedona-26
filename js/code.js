 var buttonSearch = document.querySelector(".hotel-search");

 var newForm = document.querySelector(".search");

 var isClose; 
 
 var myForm = document.querySelector(".form");

 var arrivalDate = document.querySelector(".arrival-date");

 var departureDate = document.querySelector(".departure-date");



 buttonSearch.addEventListener("click", function(evt){

 	isClose = newForm.classList.contains("hidden-form");

 	if (isClose==false){

 		newForm.classList.remove("submit-animation");
 	}else {	

 		newForm.classList.add("submit-animation");

 	}

 	newForm.classList.toggle("hidden-form");
 });



 myForm.addEventListener("submit",function(evt) {

 	if (!arrivalDate.value || !departureDate.value ){	

 		newForm.classList.remove("submit-animation");
 		newForm.classList.add("submit-error");

 		setTimeout(function(){

 			newForm.classList.remove("submit-error");

 		},3000);

 		evt.preventDefault();	
 	} 
 	
 });


