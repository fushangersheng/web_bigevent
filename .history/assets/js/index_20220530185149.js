const layer = layui.layer;
function  getUserInfo(){
    $.ajax({
        type: "GET",
        url: "/my/userinfo",
        success: function(res){
            
        }
    })
}