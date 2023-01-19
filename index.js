//id="rating-num"  
//-number user will select - select all via query and listen for which one clicked - turn it grey
//id="submit" 
//- need event listener that grabs value of li selected and places it in the selected rating span; when button clicked the scale container adds hidden and the thanks container removes hidden class
//id="selected-rating" 
//-  this shows the rating the user selected

document.querySelectorAll(".rating-num").forEach((item) => {
    item.addEventListener('click', (e) => {
    e.currentTarget.style.backgroundColor = 'purple';

});
console.log(e.currentTarget.innerHTML);
})

