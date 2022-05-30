$(function() {
    $('#link_reg').click(() => {
        $('.login-box').hide();
        $('.reg-box').show();
    })
    $('#link_login').click(() => {
        $('.reg-box').hide();
        $('.login-box').show();
    })
    const form=layui.form;
    const layer = layui.layer;
    form.verify({
        pwd: [/^[\S]{6,12}$/, "密码必须6到12位，且不能出现空格"],
        repwd:(value)=>{
            const pwd=$('#form_reg [name=password]').val();
            if(pwd !== value) return "两次密码不一致";
        }
    })
    const baseUrl = "http://www.liulongbin.top:3007";
    $("#form_reg").on("submit", (e) => {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: baseUrl + "/api/reguser",
            data: {
                username: $("#form_reg [name=username").val(),
                password: $("#form_reg [name=password").val(),
            },
            success: (res) => {
                if (res.status !== 0) return layer.msg(res.message);
                layer.msg("注册成功！");
                // 注册成功后跳转到登录界面
                $("#link_login").click();
            },
        });
    });
    $('#form_login').on('submit', (e) => {
        e.
    })
})