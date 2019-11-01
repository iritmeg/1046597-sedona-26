 var buttonSearch = document.querySelector(".hotel-search");

 var newForm = document.querySelector(".search");
 

 var newSubmit = document.querySelector(".submit-button");
 console.log(newSubmit);

 
 buttonSearch.addEventListener("click", function(evt){
 	newForm.classList.toggle('hidden-form');
 });

 newSubmit.addEventListener("mouseover", function(evt){
 	console.log("over");
 	newSubmit.classList.add('submit-animation');

 	setTimeout(function(){
 		newSubmit.classList.remove('submit-animation')
 		
 	}, 3000);

 });



