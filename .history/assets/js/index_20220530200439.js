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
// 渲染用户头像
const renderAvatar = (user) => {
    // 获取用户名字
    let name = user.nickname || user.username;
    // 设置欢迎文本
    $("#welcome").html(`欢迎 ${name}`);
    // 按需渲染用户头像
    if (user.user_pic !== null) {
        // 渲染图片头像
        $(".layui-nav-img").attr("src", user.user_pic).show();
        $(".text-avatar").hide();
    } else {
        // 渲染文本头像
        $(".layui-nav-img").hide();
        let firstName = name[0].toUpperCase();
        $(".text-avatar").html(firstName);
    }
};
$('#btnlogout').click(function(){
    layer.confirm('是否退出'),{ icon : 3, title : "提示"},function(index){
        localStorage.removeItem('token');
        location.href ="/login.html";
    }
})
getUserInfo()