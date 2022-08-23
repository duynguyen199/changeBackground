$(document).ready(function (){
    $('#color-range').on('input change',function(){
        //change body background color
        $("body").css("background-color",$(this).val());
        //change h1 to white if body color is black
        if($('#color-range').val()<="#242424"){
            $("h1").css("color","white")

        }else{
            $("h1").css("color","black")
        }
    })
})