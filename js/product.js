
document.addEventListener("DOMContentLoaded", function () {
    function toggleView(viewType) {
        const productContainer = document.getElementById("productContainer");
        const gridBtn = document.getElementById("gridView");
        const listBtn = document.getElementById("listView");

        // Xóa tất cả class cũ
        productContainer.classList.remove("grid-view", "list-view");

        if (viewType === "grid") {
            productContainer.classList.add("grid-view");
            gridBtn.classList.add("active");
            listBtn.classList.remove("active");
        } else {
            productContainer.classList.add("list-view");
            listBtn.classList.add("active");
            gridBtn.classList.remove("active");
        }
    }

    // Gán sự kiện cho nút bấm
    document.getElementById("gridView").addEventListener("click", function () {
        toggleView("grid");
    });

    document.getElementById("listView").addEventListener("click", function () {
        toggleView("list");
    });

    // Mặc định hiển thị dạng lưới
    toggleView("grid");
});
