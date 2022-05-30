const layer = layui.layer;
function  getUserInfo(){
    $.ajax({
        type: "GET",
        url: "/my/userinfo",
        headers:{
            Authorization: localStorage.getItem("token"),
        },
        success: function(res){
            if(res.status !==0) return layer.msg("获取信息失败");
            layer.msg("获取信息成功")
        }
    })
}
$('#btnlogout')
getUserInfo()