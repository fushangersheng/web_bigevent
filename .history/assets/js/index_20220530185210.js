const layer = layui.layer;
function  getUserInfo(){
    $.ajax({
        type: "GET",
        url: "/my/userinfo",
        headers:
        success: function(res){

        }
    })
}