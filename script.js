
$(".h").on("click",function(event){
    
      if(!this.dataset.clicked)
      {
        $(this).find("img").attr("src","./icon-minus.svg");
        $(this).next("h4").slideDown(300);
        this.setAttribute("data-clicked","true");
      }
    else{
        $(this).find("img").attr("src","./icon-plus.svg");
        $(this).next("h4").slideUp(300);
        this.removeAttribute("data-clicked");
}
});
