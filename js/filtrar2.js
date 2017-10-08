$(document).ready(function(){
   //add clase al primer enlace 
    $('.category_list .category_item[category="all"]').addClass('ct_item-active');
    //Filtrando productos
    $('.category_item').click(function(){
        var catProduct=$(this).attr('category');
        console.log(catProduct);
        //add clase active al enlace seleccionaado
        $('.category_item').removeClass('ct_item-active');
        $(this).addClass('ct_item-active');
        
        //ocultando productos
        $('.product-item').css('transform','scale(0)'); 
        function hideProduct(){
            $('.product-item').hide();
         } setTimeout(hideProduct,400);
        //mostrando
         function showProduct(){
        $('.product-item[category="'+catProduct+'"]').show();
        $('.product-item[category="'+catProduct+'"]').css('transform','scale(1)');
         }  setTimeout(showProduct,400);
       // $('.product-item[category="'+catProduct+'"]').css('transform','scale(1)');
      //  $('.product-item[category="'+catProduct+'"]').show();
    });
    
     //mostrando ftodos los prod
    $('.category_item[category="all"]').click(function(){
        function showAll(){
         $('.product-item').show();  
         $('.product-item').css('transform','scale(1)');
        }setTimeout(showAll,400);
     });
});


