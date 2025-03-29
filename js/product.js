// danh sach cac san pham
const products = [
    {
        id: "SP1",
        name: "Socola Đen 70%",
        image: "../img/product/dark-chocolates/sp1.jpg",
        description: "Hương vị đậm đà, thơm ngon.",
        price: "70.000 VNĐ",
        type: 'dark'
    },
    {
        id: "SP2",
        name: "Thanh Socola Đen 70%",
        image: "../img/product/dark-chocolates/sp2.jpg",
        description: "Thanh socola đen 70% cacao, vị đắng nhẹ, thích hợp cho người ăn kiêng.",
        price: "120.000 VNĐ",
        type: 'dark'
    },
    {
        id: "SP3",
        name: "Socola Hộp Cao Cấp",
        image: "../img/product/dark-chocolates/sp3.jpg",
        description: "Hộp socola đen sang trọng, có thể là phiên bản cao cấp với vị đậm đà.",
        price: "175.000 VNĐ",
        type: 'dark'
    },
    {
        id: "SP4",
        name: "Hộp Socola Mix Nhiều Loại",
        image: "../img/product/dark-chocolates/sp4.jpg",
        description: "Hộp socola với nhiều hương vị khác nhau (có thể là sữa, đen, hoặc trái cây).",
        price: "150.000 VNĐ",
        type: 'dark'
    },
    {
        id: "SP5",
        name: "Hộp Socola Đỏ Sang Trọng",
        image: "../img/product/dark-chocolates/sp5.jpg",
        description: "Hộp socola cao cấp với thiết kế cổ điển, phù hợp làm quà biếu.",
        price: "200.000 VNĐ",
        type: 'dark'
    },
    {
        id: "SP6",
        name: "Thanh Socola 100% Cacao",
        image: "../img/product/dark-chocolates/sp6.jpg",
        description: "Socola nguyên chất 100% cacao, rất đắng và giàu dinh dưỡng.",
        price: "120.000 VNĐ",
        type: 'dark'
    },
    {
        id: "SP7",
        name: "Socola Đen Luxury",
        image: "../img/product/dark-chocolates/sp7.png",
        description: "Socola đen hảo hạng, thiết kế vỏ sang trọng với hình ảnh cacao nguyên chất.",
        price: "160.000 VNĐ",
        type: 'dark'
    },
    {
        id: "SP8",
        name: "Socola Đắng Figo",
        image: "../img/product/dark-chocolates/sp8.png",
        description: "Socola đen Figo, có thể là dòng socola thủ công với độ đắng vừa phải.",
        price: "140.000 VNĐ",
        type: 'dark'
    },
    {
        id: "SP9",
        name: "Socola Đen Nhân Hạnh Nhân",
        image: "../img/product/dark-chocolates/sp9.jpg",
        description: "Socola đen có nhân hạnh nhân hoặc hạt điều giòn rụm.",
        price: "130.000 VNĐ",
        type: 'dark'
    },
    {
        id: "SP10",
        name: "Socola Sữa & Giáng Sinh",
        image: "../img/product/dark-chocolates/sp10.png",
        description: "Socola sữa với bao bì mang phong cách Giáng Sinh, phù hợp làm quà tặng.",
        price: "100.000 VNĐ",
        type: 'dark'
    },
    {
        id: "SP1",
        name: "Socola Trắng Alluvia Hương Chanh",
        image: "../img/product/white-chocolates/sp1.jpg",
        description: "Socola trắng kết hợp với hương chanh tươi mát, mang đến vị chua nhẹ hòa quyện cùng vị béo ngậy.",
        price: "130.000 VNĐ",
        type: 'white'
    },
    {
        id: "SP2",
        name: "Hạnh Nhân Bọc Socola Trắng Beryl's",
        image: "../img/product/white-chocolates/sp2.jpg",
        description: "Hạnh nhân giòn rụm được bao phủ bởi lớp socola trắng mịn màng, tạo nên hương vị thơm ngon.",
        price: "150.000 VNĐ",
        type: 'white'
    },
    {
        id: "SP3",
        name: "Socola Trắng DARS",
        image: "../img/product/white-chocolates/sp3.jpg",
        description: "Thanh socola trắng DARS nổi tiếng với độ mịn và vị béo đặc trưng, tan chảy ngay khi thưởng thức.",
        price: "90.000 VNĐ",
        type: 'white'
    },
    {
        id: "SP4",
        name: "Socola Trắng Matcha",
        image: "../img/product/white-chocolates/sp4.jpg",
        description: "Sự kết hợp giữa vị béo ngậy của socola trắng và vị thanh mát của trà xanh matcha.",
        price: "120.000 VNĐ",
        type: 'white'
    },
    {
        id: "SP5",
        name: "Thanh Socola Trắng Nguyên Chất",
        image: "../img/product/white-chocolates/sp5.jpg",
        description: "Socola trắng nguyên chất, không chứa nhân, giữ trọn vẹn hương vị béo ngọt.",
        price: "140.000 VNĐ",
        type: 'white'
    },
    {
        id: "SP6",
        name: "Socola Trắng Nhân Hạnh Nhân",
        image: "../img/product/white-chocolates/sp6.jpg",
        description: "Thanh socola trắng với nhân hạnh nhân giòn rụm, tạo sự kết hợp hoàn hảo giữa béo và bùi.",
        price: "160.000 VNĐ",
        type: 'white'
    },
    {
        id: "SP7",
        name: "Hộp Socola Trắng Cao Cấp",
        image: "../img/product/white-chocolates/sp7.jpg",
        description: "Hộp socola trắng cao cấp với thiết kế sang trọng, thích hợp làm quà tặng.",
        price: "180.000 VNĐ",
        type: 'white'
    },
    {
        id: "SP1",
        name: "Hộp Socola Trái Tim Đặc Biệt",
        image: "../img/product/gift-box/sp1.jpg",
        description: "Hộp socola hình trái tim với nhiều viên socola nhỏ mang hương vị đặc biệt, thích hợp làm quà tặng.",
        price: "350.000 VNĐ",
        type: 'box'
    },
    {
        id: "SP2",
        name: "Hộp Socola Truffle Cao Cấp",
        image: "../img/product/gift-box/sp2.jpg",
        description: "Hộp quà với nhiều viên socola truffle thơm ngon, đa dạng hương vị, thích hợp làm quà tặng sang trọng.",
        price: "400.000 VNĐ",
        type: 'box'
    },
    {
        id: "SP3",
        name: "Bó Hoa Socola Ferrero Rocher",
        image: "../img/product/gift-box/sp3.jpg",
        description: "Sự kết hợp độc đáo giữa hoa hồng và socola Ferrero Rocher tạo nên món quà lãng mạn và ngọt ngào.",
        price: "550.000 VNĐ",
        type: 'box'
    },
    {
        id: "SP4",
        name: "Hộp Socola Handmade Cao Cấp",
        image: "../img/product/gift-box/sp4.jpg",
        description: "Hộp socola handmade với nhiều kiểu dáng đẹp mắt, mang hương vị tinh tế, thích hợp làm quà tặng đặc biệt.",
        price: "320.000 VNĐ",
        type: 'box'
    },
    {
        id: "SP5",
        name: "Hộp Socola Đỏ Sang Trọng",
        image: "../img/product/gift-box/sp5.jpg",
        description: "Hộp quà socola đỏ với nhiều thanh socola cao cấp, thể hiện sự tinh tế và sang trọng.",
        price: "450.000 VNĐ",
        type: 'box'
    },
    {
        id: "SP6",
        name: "Hộp Socola Tím Lãng Mạn",
        image: "../img/product/gift-box/sp6.jpg",
        description: "Hộp quà socola tím với thiết kế lãng mạn, chứa những viên socola thơm ngon, thích hợp cho những dịp đặc biệt.",
        price: "420.000 VNĐ",
        type: 'box'
    },
    {
        id: "SP7",
        name: "Hộp Quà Socola Nhiều Hương Vị",
        image: "../img/product/gift-box/sp7.jpg",
        description: "Hộp quà chứa nhiều thanh socola với các hương vị khác nhau, mang đến trải nghiệm đa dạng cho người thưởng thức.",
        price: "480.000 VNĐ",
        type: 'box'
    },
    {
        id: "SP1",
        name: "KitKat Matcha Nhật Bản",
        image: "../img/product/other-pro/sp1.jpg",
        description: "Thanh socola KitKat hương matcha Nhật Bản, thơm ngon và béo ngậy.",
        price: "90.000 VNĐ",
        type: 'other'
    },
    {
        id: "SP2",
        name: "Socola Kem Hộp Lớn",
        image: "../img/product/other-pro/sp2.jpg",
        description: "Hộp kem socola cao cấp, thơm ngon, thích hợp cho mọi lứa tuổi.",
        price: "180.000 VNĐ",
        type: 'other'
    },
    {
        id: "SP3",
        name: "Bánh Oreo Nhân Socola",
        image: "../img/product/other-pro/sp3.jpg",
        description: "Bánh Oreo giòn rụm với nhân kem socola ngọt ngào.",
        price: "55.000 VNĐ",
        type: 'other'
    },
    {
        id: "SP4",
        name: "Bộ Socola Kem & Bánh",
        image: "../img/product/other-pro/sp4.jpg",
        description: "Bộ sản phẩm gồm kem socola và bánh socola thơm ngon.",
        price: "210.000 VNĐ",
        type: 'other'
    },
    {
        id: "SP5",
        name: "Socola Choco-Pie Hàn Quốc",
        image: "../img/product/other-pro/sp5.jpg",
        description: "Bánh Choco-Pie Hàn Quốc với lớp socola phủ ngoài, mềm mại bên trong.",
        price: "75.000 VNĐ",
        type: 'other'
    },
    {
        id: "SP6",
        name: "Thanh Socola Snickers",
        image: "../img/product/other-pro/sp6.jpg",
        description: "Thanh socola Snickers với nhân đậu phộng và caramel thơm ngon.",
        price: "45.000 VNĐ",
        type: 'other'
    },
    {
        id: "SP7",
        name: "Bánh Socola Ngũ Cốc",
        image: "../img/product/other-pro/sp7.jpg",
        description: "Bánh ngũ cốc phủ socola, giàu dinh dưỡng, thích hợp cho bữa sáng.",
        price: "65.000 VNĐ",
        type: 'other'
    },
    {
        id: "SP8",
        name: "Oreo Phủ Socola",
        image: "../img/product/other-pro/sp8.jpg",
        description: "Bánh Oreo được phủ lớp socola sữa, tạo nên vị ngọt béo hấp dẫn.",
        price: "95.000 VNĐ",
        type: 'other'
    },
    {
        id: "SP9",
        name: "Snickers Mini Gói Nhỏ",
        image: "../img/product/other-pro/sp9.jpg",
        description: "Phiên bản Snickers mini tiện lợi, dễ dàng mang theo và thưởng thức.",
        price: "50.000 VNĐ",
        type: 'other'
    }
];

// dinh dang san pham o dang luoi grid va dang cot list
function toggleView(viewType) {
    const productContainer = document.getElementById("productContainer");
    const gridBtn = document.getElementById("gridView");
    const listBtn = document.getElementById("listView");

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

//  hien thi danh sach cac san pham theo loai
function showProductByType(type){
    const productContainer = document.getElementById("productContainer");
    productContainer.innerHTML = ""; // Xóa sản phẩm cũ trước khi hiển thị mới

    // Lọc sản phẩm theo loại hoặc hiển thị tất cả
    const filteredProducts = type === "all" ? products : products.filter(p => p.type === type);

    filteredProducts.forEach((product) => {
        const productHTML = `
            <div class="col-md-3 col-sm-6 mb-3 product-item">
                <div class="card">
                    <div class="card-header">
                        <img src="${product.image}" alt="${product.name}" class="img-fluid">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <span>Giá: ${product.price} <br></span>
                        <button type="button" class="btn btn-product">THÊM VÀO GIỎ HÀNG</button>
                    </div>
                </div>
            </div>
        `;
        productContainer.innerHTML += productHTML;
    });
}

