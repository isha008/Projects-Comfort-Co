

/////////////////////////////     Hamburger     ////////////////////////////////////


$(document).ready(function(){
    $(".hamburger_div").click(function(){
     
      $("#nav_responsive").slideToggle("slow");
      $(".hamburger_close").slideToggle();
      $(".hamburger").slideToggle()

      // if(img.attr("src") == img2) {
      //   img.attr("src" , img1)
      // }
      // else {
      //   img.attr("src" , img2)
      // }
     
    });

    ////////////////////////////       Product Slider     ////////////////////////////////

    $('.shoes').slick({
      
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
       
      ]
    });

    ///////////////////////////////   Banner Slider    ///////////////////////////////

    $('.banner2').slick();

    //////////////////////////////////    Accordion      ////////////////////////////////

  $(".p_top2").click(function(e) {

    $(this).closest("div").find(".section_drop").toggle("active")
    $(this).closest("div").find(".plus").toggle();
    $(this).closest("div").find(".minus").toggle();
   
  })

  ///////////////////////////////////    Popup Box   ////////////////////////////////////

  $('html, body').css({
    overflow: 'hidden',
    height: '100%'
});


  $(".popup").animate({height:"300px"},{duration:1000})

  $(".popup_close").click(function(){
    $(".popup").fadeOut()
    $('html, body').css({overflow: 'visible'});
   })

  $(".popup_button").click(function(){
  $(".popup").fadeOut()
  $('html, body').css({overflow: 'visible'});
  })
 

  //////////////////////////////////     Button Change     ////////////////////////////
  
  
  $(".button_same").each(function(){
   let i=0;
   
    $(this).click(function(){
    i=i+1;
    
    if(i===1)
    {
      $(this).css("background-color","red");
      check_button(this,i)
      
    }
    else if(i==2)
    {
      $(this).css("background-color","blue");
      check_button(this,i)
      
      
      
    }
    else {
      $(this).css("background-color","white");
      check_button(this,i)
      
      i=0;
    }
  })
})

function check_button(content,i){
  
  if(content.id=="button_one")
  {
    women(i)
  }
  else if(content.id=="button_two")
  {
    men(i)
    
  }
  else {
    brands(i)
  }
}


function women(i){
  if(i==1){
    $(".button1").text("SAREES")
  }
  else if(i==2){
    $(".button1").text("KURTAS")
  }
  else{
    $(".button1").text("WOMEN'S")
  }
  
}

function men(i) {
  if(i==1){
    $(".button2").text("SHIRTS")
  }
  else if(i==2){
    $(".button2").text("SHOES")
  }
  else{
    $(".button2").text("MEN'S")
  }
  
}

function brands(i) {
  if(i==1){
    $(".button3").text("NIKE")
  }
  else if(i==2){
    $(".button3").text("ADIDAS")
  }
  else{
    $(".button3").text("BRAND'S")
  }
  
}
  

  });


  