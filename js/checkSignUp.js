document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formSignUp");
    const inputs = form.querySelectorAll(".form-control");

    // Regex kiểm tra tên đăng nhập
    const requestNameInput = /^[a-z]{1}[a-z0-9]{5,26}$/;
    const message = document.getElementById("conditionUsername");

    // Regex kiểm tra mật khẩu
    const requestPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*.])[A-Za-z\d!@#$%^&*.]{8,12}$/;
    const messPass = document.getElementById("condPassword");

    // Regex kiểm tra lại mật khẩu đã nhập
    const messAgainPass = document.getElementById("againPass");

    // Hàm kiểm tra username
    function validateUsername(input) {
        let value = input.value.trim();
        if (value === "") {
            input.classList.remove("is-invalid", "is-valid");
            message.innerHTML = "";
        } else if (!requestNameInput.test(value)) {
            input.classList.add("is-invalid");
            input.classList.remove("is-valid");
            message.innerHTML = "<span style='color: red; font-size: 12px;'>Tên đăng nhập dài từ 6->27 ký tự gồm ký tự thường và số.</span>";
        } else {
            input.classList.remove("is-invalid");
            input.classList.add("is-valid");
            message.innerHTML = "";
        }
    }

    // Hàm kiểm tra password
    function validatePassword(input) {
        let value = input.value.trim();
        if (value === "") {
            input.classList.remove("is-invalid", "is-valid");
            messPass.innerHTML = "";
        } else if (!requestPassword.test(value)) {
            input.classList.add("is-invalid");
            input.classList.remove("is-valid");
            messPass.innerHTML = "<span style='color: red; font-size: 12px;'>Mật khẩu dài từ 8-12 kí tự gồm ít nhất 1 ký tự hoa, 1 ký tự thường, 1 chữ số và 1 ký tự đặc biệt.</span>";
        } else {
            input.classList.remove("is-invalid");
            input.classList.add("is-valid");
            messPass.innerHTML = "";
        }
    }

    // Kiểm tra nhập lại mật khẩu
    function validateAgainPassword(confirmPass, inputPass){
        let value = confirmPass.value.trim();
        if(value === ""){
            confirmPass.classList.remove("is-invalid", "is-valid");
            messAgainPass.innerHTML = "";
        }else if(inputPass.value !== value){
            confirmPass.classList.add("is-invalid");
            confirmPass.classList.remove("is-valid");
            messAgainPass.innerHTML ="<span style='color: red; font-size: 12px;'>Mật khẩu nhập lại không đúng.</span>";
        }else{
            confirmPass.classList.remove("is-invalid");
            confirmPass.classList.add("is-valid");
            messAgainPass.innerHTML = "";
        }
    }

    // Kiểm tra ngay khi nhập liệu
    inputs.forEach((input) => {
        input.addEventListener("input", function () {
            if (this.id === "username") {
                validateUsername(this);
            } else if (this.id === "password") {
                validatePassword(this);
            }else if(this.id === "againpass"){
                validateAgainPassword(this, document.getElementById("password"));
            }

        });
    });

    // Xử lý sự kiện submit
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Ngăn chặn gửi form nếu có lỗi
        let isValid = true;

        inputs.forEach((input) => {
            if (input.value.trim() === "") {
                input.classList.add("is-invalid");
                input.classList.remove("is-valid");
                isValid = false;
            } else {
                input.classList.remove("is-invalid");
                input.classList.add("is-valid");
            }
        });

        if (isValid) {
            alert("Đăng ký thành công! 🎉");
            form.submit(); // Nếu hợp lệ thì gửi form
        }
    });
});
