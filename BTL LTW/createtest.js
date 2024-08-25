document.getElementById("examForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Handle form submission here
    // You can collect form data and perform further actions like sending it to server or saving to local storage
    // Example: 
    var formData = new FormData(this);
    var examData = {};
    formData.forEach(function(value, key){
        examData[key] = value;
    });
    console.log(examData);
});

document.getElementById("submit").addEventListener("click", function() {
    alert("Tạo kỳ thi thành công");
});

function redirectToAdminPage() {
    window.location.href = "admin.html";
}

// Sử dụng event listener để gọi hàm redirectToAdminPage khi nút được nhấn
document.getElementById("home").addEventListener("click", redirectToAdminPage);