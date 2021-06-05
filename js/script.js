$(document).ready(function(){
    $(".button1").click(function(){
        var texto = $(this).text();
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val(texto).select();
        document.execCommand("copy");
        $temp.remove();
    });
});