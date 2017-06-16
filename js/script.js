var menu = document.querySelector(".main-menu");
var MainMenuClose=document.querySelector("#main-menu-close");
var sliderControlLeft=document.querySelector(".slider-desktop-controls.left");
var sliderControlRight=document.querySelector(".slider-desktop-controls.right");
var radio1=document.querySelector("#radio1");
var radio2=document.querySelector("#radio2");
var radio3=document.querySelector("#radio3");
var sliderReview=document.querySelector("#slider-review");

MainMenuClose.addEventListener("click", function(event) {
menu.classList.toggle("hidden");	
}
	);

function makeMenuHidden() {
menu.classList.add("hidden");	
	}

window.onload = makeMenuHidden;


/* перключние десктопного слайдера стрелочками */
$('#prev').on('click', function() { switchRadio(-1, getCheckedRadio()) });
$('#next').on('click', function() { switchRadio( 1, getCheckedRadio()) });

function switchRadio(direction, index) {
  var inputArr = $('input[name=review]').toArray();
  inputArr[index].checked = false;
  var targetIndex = index + direction;
  if (targetIndex < 0) {
	    targetIndex = inputArr.length - 1;
  } else if (targetIndex > inputArr.length - 1) {
	    targetIndex = 0;
  };  
  inputArr[targetIndex].checked = true;
};

function getCheckedRadio() {
  var radioIndex;
  $('input[name=review]').each(function( index ) {
    if (this.checked) {radioIndex = index};
  });
  return radioIndex;
};


$("#slider-review").on( "swipeleft", function( event ) {switchRadio(1, getCheckedRadio())} );
$("#slider-review").on( "swiperight", function( event ) {switchRadio(-1, getCheckedRadio())} );


$("#slider-price").on( "swipeleft", function( event ) {switchRadioPrice(1, getCheckedRadioPrice())} );
$("#slider-price").on( "swiperight", function( event ) {switchRadioPrice(-1, getCheckedRadioPrice())} );

function switchRadioPrice(direction, index) {
  var inputArr = $('input[name=price]').toArray();
  inputArr[index].checked = false;
  var targetIndex = index + direction;
  if (targetIndex < 0) {
	    targetIndex = inputArr.length - 1;
  } else if (targetIndex > inputArr.length - 1) {
	    targetIndex = 0;
  };  
  inputArr[targetIndex].checked = true;
};

function getCheckedRadioPrice() {
  var radioIndex;
  $('input[name=price]').each(function( index ) {
    if (this.checked) {radioIndex = index};
  });
  return radioIndex;
};