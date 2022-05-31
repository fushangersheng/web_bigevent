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
                if()
            }
        })

    }
})