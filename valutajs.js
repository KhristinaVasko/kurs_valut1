$(document).ready(function(){
    $("button").click(function(){
        $.getJSON("https://old.bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json",function(data){
            let kurs_v= '';
            $.each(data,function(key,value){
                kurs_v+='<tr>';
                kurs_v+='<td>'+ value.r030 +'<td>';
                kurs_v+='<td>'+ value.txt +'<td>';
                kurs_v+='<td>'+ value.cc +'<td>';
                kurs_v+='<td>'+ value.exchangedate +'<td>';
                
            });
            $('#kurs_v').append(kurs_v);
        })
    })


});