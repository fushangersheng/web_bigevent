$(function() {
    const form = layui.form;

    form.verify({
    pwd: [/^[\S]{6,12}$/, "密码必须6到12位，且不能出现空格"],
    samePwd: (val) => {
        if (val === $("[name=oldPwd]").val()) return "新旧密码不能相同！";
    },
    rePwd: (val) => {
        if (val !== $("[name=newPwd]").val()) return "两次密码不一致！";
    },
});
   $('.layui-form').submit((e))
})