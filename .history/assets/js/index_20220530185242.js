const layer = layui.layer;
function  getUserInfo(){
    $.ajax({
        type: "GET",
        url: "/my/userinfo",
        headers:{
            Authorization: localStorage.getItem("token"),
        },
        success: function(res){
            console.log(res);
        }
    })
}