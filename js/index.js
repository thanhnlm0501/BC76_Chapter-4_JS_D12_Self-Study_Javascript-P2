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

// Ví dụ 1: Viết chương trình yêu cầu người dùng nhập vào 1 giá trị và khi người dùng bấm hiển thị thì giá trị sẽ in ra tại span#ketQuaHienThi

// handleEvent: Xử lý sự kiện
function hienThiThongTin() {
  // Lấy giá trị nhập khi gọi hàm hiển thị thông tin
  // Input: luôn là string
  var input = document.getElementById("giaTriNhap");
  console.log(input.value);

  // Output: string
  var output = "";

  // Progress:
  output = input.value;

  // Xử lý kết quả hiển thị lên giao diện
  var tagSpanKetQua = document.getElementById("ketQuaHienThi");
  tagSpanKetQua.innerHTML = output;
}

// Ví dụ 2: Nhập vào số tiền lương(1h) và số giờ làm In ra tổng lương bằng số giờ nhận tiền lương

function tinhTongLuong() {
  // alert(123);
  // Input: tienLuong1h:number , soGioLam:number
  var tienLuong = document.getElementById("tienLuong1h").value;
  var soGioLam = document.getElementById("soGioLam").value;

  // Kiểm tra Input
  // console.log("Tiền lương:", tienLuong);
  // console.log("Số giờ làm:", soGioLam);

  // Output: tongLuong: number
  var tongLuong = 0;

  // Progress:
  tongLuong = tienLuong * soGioLam;

  // .toLocaleString() giúp ngăn giữa các số vd: 50,000
  document.getElementById("tongLuong").innerHTML = tongLuong.toLocaleString();
}

// Ví dụ 3: Xây dựng form thông báo đăng nhập

// function xuLyDangNhap() {}

var btnDangNhap = document.getElementById("btnDangNhap");

// C1: Gọi function
// Thường sử dụng khi function cần tái sử dụng
// btnDangNhap.onclick = xuLyDangNhap;

// C2: Anonymous function
btnDangNhap.onclick = function () {
  // anonymous function
  // Input: taiKhoan: string, matKhau: string
  var taiKhoan = document.getElementById("taiKhoan").value;
  var matKhau = document.getElementById("matKhau").value;

  // Output: thongBao: string
  var thongBao = "";

  // Progress
  thongBao = "Tài khoản: " + taiKhoan + " - Mật khẩu: " + matKhau;
  // alt + z hoặc option + z => Xuống dòng

  var tagKetQua = document.getElementById("ketQuaDangNhap");

  tagKetQua.innerHTML = thongBao;
  // Thay đổi về style của thẻ
  // tagKetQua.style.backgroundColor = "green";
  // tagKetQua.style.padding = "15px";
  // tagKetQua.style.color = "#fff";
  // tagKetQua.style.margin = "15px";

  tagKetQua.className = "bg-success p-2 m-2 text-white";
};
