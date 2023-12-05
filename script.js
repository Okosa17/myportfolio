$(".burger").on("click", function(){
    $(".menubar").css("display", "block");
})
$(".cancel").on("click", function(){
    $(".menubar").css("display", "none");
})

$(document).on("mouseover", function(){
    $(".rot-img").css("transform","rotateX('45deg')")
})