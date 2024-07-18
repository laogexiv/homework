function QQlogin() {
    open("/QQlogin.html", "QQ登录", "width=300 , height = 500")
}

function login() {
    var id = document.getElementById("id")
    var pwd = document.getElementById("pwd")
    if (id.value == "") {
        alert("请输入账户")
    }
    else if (pwd.value == "") {
        alert("请输入密码")
    }
    else {
        alert("正在登录")
        alert("登陆失败( 无法连接到服务器 )")
        open("index2.html")
    }
}

function register() {
    var email = document.getElementById("email")
    var pwd = document.getElementById("pwd")
    var name = document.getElementById("name")
    var xbman = document.getElementById("xb-man")
    var xbwoman = document.getElementById("xb-woman")
    var date = document.getElementById("date")
    var city = document.getElementById("city")
    var tk = document.getElementById("tk")
    // var emailindexOFat = email.value.indexOf("@")
    // var emailindexOFdot = email.value.indexOf(".")
    // alert(emailindexOF)
    // alert(emailindexOFdot)
    if (email.value == "") {
        alert("请输入邮箱")
        return false
    }
    else if (pwd.value == "") {
        alert("请输入密码")
        return false
    }
    else if (name.value == "") {
        alert("请输入真实姓名")
    }
    else if (xbman.checked == false && xbwoman.checked == false) {
        alert("请选择真实性别")
        return false
    }
    else if (date.value == "") {
        alert("请选择出生日期")
        return false
    }
    else if (city.value == "") {
        alert("请选择所在城市")
        return false
    }
    else if (tk.checked == false) {
        alert("请勾选同意条款")
        return false
    }
    else {
        alert("正在注册")
        alert("注册失败( 无法连接到服务器 )")
        open("index2.html")
        return true
    }
}

function timer() {
    var DATEDATE = new Date()
    var time = DATEDATE.toTimeString()
    var date = DATEDATE.toLocaleDateString()
    var timer = time + date
    document.getElementById("timer").innerHTML = timer
}

function tk() {
    open("xz.html", "青鸟学生须知", "width=300px,height:700px")
}

// function menu5color(classname) {
//     document.getElementsByClassName(classname).style.color = "white"
//     document.getElementsByClassName(classname).style.background = "orange"
// }