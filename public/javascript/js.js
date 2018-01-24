$(".configure_tab li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    if($(this).attr("data-id")=='config'){
        $(".configure_server").addClass("hide");
        $(".configure_config").removeClass("hide")
    }else{
        $(".configure_config").addClass("hide");
        $(".configure_server").removeClass("hide")
    }
})
$('#btn').click(function(){
    if($(".configure_tab .active").attr("data-id")=='config'){
        config();
    }else{
        interface();
    }
})
function interface(){
    var hostList=[];
    var portList=[];
    var obj_interface = $('.configure_server li');
    var host_len=obj_interface.length;
    for(var i=0;i<host_len;i++){
        hostList.push(obj_interface.eq(i).find("input[name=host]").val())
        portList.push(obj_interface.eq(i).find("input[name=port]").val())
    }
    hostList=hostList.join(",");
    portList=portList.join(",");
    $.ajax({
        url:'/api/interface',
        dataType:'json',
        type:'POST',
        data:{
            hostList:hostList,
            portList:portList
        },
        success:function(data){
            console.log(data)
            alert(data.desc)
        }
    })
}
function config(){
    var list=[];
    for(var i=0;i<$('.list').length;i++){
        list.push($('.list').eq(i).val())
    }
    list=list.join(",");
    $.ajax({
        url:'/api/config',
        dataType:'json',
        type:'POST',
        data:{
            list:list
        },
        success:function(data){
            console.log(data)
            alert(data.desc)
        }
    })
}