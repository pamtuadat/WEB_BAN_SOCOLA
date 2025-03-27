function addCard() {
    document.getElementById("addCardBtn").addEventListener("click", function() {
        // Tạo một phần tử div mới cho card
        let card = document.createElement("div");
        card.className = "card p-3 shadow-sm"; // Thêm class Bootstrap cho đẹp
        card.style.width = "18rem"; // Đặt chiều rộng
    
        // Nội dung của card
        card.innerHTML = `
            <div class="card-header text-center">
                <img src="../img/product/dark-chocolates/ejfarm.png" alt="Sôcôla Đen" class="img-fluid"/>
            </div>
            <div class="card-body">
                <h5 class="card-title">Sôcôla Đen</h5>
                <p class="card-text">Sôcôla đen nguyên chất</p>
            </div>
            <div class="card-footer">
                <a href="#" class="btn btn-primary">Xem chi tiết</a>
            </div>
        `;
    
        // Thêm card vào container
        document.getElementById("card-container").appendChild(card);
    
        // Xử lý sự kiện xóa card
        card.querySelector(".delete-btn").addEventListener("click", function() {
            card.remove();
        });
    });
    
}
addCard();