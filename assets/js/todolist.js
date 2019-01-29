//check an li (ToDo)
$('ul').on('click', "li", function(){
   $(this).toggleClass("completed");
});
//Remove TODO Button
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    }); 
    e.stopPropagation();
});
//If User Entered a new toDO 
$("input[type=text]").on("keypress",function(e){
    if(e.which === 13){
        //catch input string when user hit enter 
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i><span> "+todoText+"</li>");

    }
})
$(".fa-plus").on("click",function(){
    $("input[type=text]").fadeToggle();
})