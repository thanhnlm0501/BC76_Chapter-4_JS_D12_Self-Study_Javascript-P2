// ----- DOM -----
var tagH3 = document.getElementById("title");

// .innerHTML: Phần nội dung ở giữa 2 thẻ html đóng mỏ
tagH3.innerHTML = "Cybersoft.edu.vn";

// .value: Phần nội dung của thẻ input thường chứa giá trị người dùng đăng nhập vào
var tagInput = document.getElementById("txt");
tagInput.value = "Hello Cybersoft";

// Truy xuất đến giá trị value của thẻ
var tagInputNumber = document.getElementById("number");
console.log(tagInputNumber.value);
// alert(tagInputNumber.value);

// .src: là nội dung hình ảnh của thẻ img
var tagImg = document.getElementById("hinhanh");
tagImg.src = "./../img/Hinh2.jpg";

// ----- Hàm (function) -----
// Định nghĩa hàm: Dùng để thực thi 1 loạt hành động sau khi thực hiện khai báo
function sayHello() {
  alert("Chào mọi người !");
}

// Lệnh gọi hàm
//sayHello()
