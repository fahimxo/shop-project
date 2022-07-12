//    panel
$(document).ready(function () {
    $('#showdetail').click(function (e) { 
        $('.details').slideToggle();
        if($('#showdetail').hasClass('fas fa-angle-up')){
  
          $('#showdetail').attr('class', 'fas fa-angle-down');
  
        }else{
          $('#showdetail').attr('class', 'fas fa-angle-up');
        }
    });
  
    $('#menu-icon').click(function () { 
        if($('#panel').hasClass('panel')){
        $('#panel').attr('class','min-panel')
        active_img_name(0)
        active_text_btns(0)
        active_details()
      
    }
        else{
        $('#panel').attr('class','panel')
        active_img_name(1)
        active_text_btns(1)
       
        }
        
    });
    function active_img_name(flag){
        if (flag) {
            $('.img-name .name').css('display','block')
            $('.img-name i').css('display','block')  
            $('.img-name').css('justify-content','space-evenly')
        }else{
            $('.img-name .name').css('display','none')
            $('.img-name i').css('display','none')  
            $('.img-name').css({ 'display':'flex','justify-content': 'flex-end'})
           
        }
        
    }
    function active_text_btns(flag){
        if(flag){
            $('.menu-btns .item').css({'padding': '20px 30px 20px 0','display':'flex','justify-content':'flex-start'})
            $('.menu-btns .item span').css('display','block')
        }else{
            $('.menu-btns .item').css({ 'align-items': 'center','display':'flex'})
            $('.menu-btns .item span').css('display','none')
        }
       
    }
    function active_details(){
       

            $('.details').css('display','none');
            $('#showdetail').attr('class', 'fas fa-angle-down');
       
        

    }

   
      
  });