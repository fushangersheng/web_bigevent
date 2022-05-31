$(function() {
    const form = layui.form;
    // 自定义校验规则
    form.verify({
        nickname: (val) => {
            if (val.length > 6) return "昵称长度必须在 1 ~ 6 个字符之间！";
        },
    });
    const initUserInfo=()=> {
        $.ajax({
            type: "GET",
            url:"/my/userinfo",
            success:(res)=>{
                if(res.status !== 0) return layer.msg('获取信息失败');
                form.val("formUserInfo", res.data);
            }
           
        })

    }
    $('#btnReset').click((e)=>{
        e.preventDefault();
        initUserInfo();
    })
    initUserInfo();
    $('.layout-form').summit(function(e){
        e.preventDefault();
        $.ajax()
    })
})