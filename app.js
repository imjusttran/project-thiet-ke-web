// Database simulation
let db = {
    users: [],
    products: [],
    chats: [],
    siteSettings: {
        ownerEmail: 'owner@example.com', // Email của owner
        aboutText: 'Chợ Online là nền tảng mua bán trực tuyến hiện đại, kết nối người mua và người bán một cách nhanh chóng và tiện lợi.\n\nVới giao diện thân thiện và dễ sử dụng, bạn có thể dễ dàng đăng bán sản phẩm hoặc tìm kiếm những món đồ yêu thích.',
        contactEmail: 'contact@choonline.vn',
        contactPhone: '0123 456 789',
        contactAddress: 'Hà Nội, Việt Nam'
    }
};

let currentUser = null;
let currentChat = null;
let allProducts = []; // Store all products for search

// Load data from localStorage
function loadData() {
    const saved = localStorage.getItem('marketplaceDB');
    if (saved) {
        db = JSON.parse(saved);
    }
}

// Save data to localStorage
function saveData() {
    localStorage.setItem('marketplaceDB', JSON.stringify(db));
}

// Initialize
loadData();

// Theme Management
const themeToggle = document.getElementById('themeToggle');
const themeModal = document.getElementById('themeModal');
const themeOptions = document.querySelectorAll('.theme-option');

themeToggle.addEventListener('click', () => {
    themeModal.classList.add('active');
});

themeOptions.forEach(option => {
    option.addEventListener('click', () => {
        const theme = option.dataset.theme;
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        closeModal('themeModal');
    });
});

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'summer';
document.body.setAttribute('data-theme', savedTheme);

// Language Management
const langToggle = document.getElementById('langToggle');
const langModal = document.getElementById('langModal');
const langOptions = document.querySelectorAll('.lang-option');

langToggle.addEventListener('click', () => {
    langModal.classList.add('active');
});

langOptions.forEach(option => {
    option.addEventListener('click', () => {
        const lang = option.dataset.lang;
        setLanguage(lang);
        closeModal('langModal');
        updateDynamicContent();
    });
});

// Update dynamic content based on language
function updateDynamicContent() {
    // Update navigation
    document.querySelectorAll('.nav-link').forEach((link, index) => {
        const keys = ['home', 'products', 'myProfile'];
        link.textContent = t(keys[index]);
    });
    
    // Update buttons
    document.getElementById('loginBtn').textContent = t('login');
    document.getElementById('registerBtn').textContent = t('register');
    document.getElementById('logoutBtn').textContent = t('logout');
    
    // Update hero
    const heroTitle = document.getElementById('heroTitle');
    const heroSubtitle = document.getElementById('heroSubtitle');
    if (heroTitle) heroTitle.textContent = t('heroTitle');
    if (heroSubtitle) heroSubtitle.textContent = t('heroSubtitle');
    
    // Update search placeholder
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.placeholder = t('searchPlaceholder');
    
    // Update buttons text
    const searchBtn = document.getElementById('searchBtn');
    const clearSearchBtn = document.getElementById('clearSearchBtn');
    if (searchBtn) searchBtn.textContent = t('search');
    if (clearSearchBtn) clearSearchBtn.textContent = t('clear');
    
    // Update page headers
    const pageHeaders = document.querySelectorAll('.page-header h1');
    pageHeaders.forEach(header => {
        if (header.textContent.includes('Tất cả') || header.textContent.includes('All') || header.textContent.includes('Todos') || header.textContent.includes('すべて')) {
            header.textContent = t('allProducts');
        }
    });
    
    // Reload current page content
    const currentPage = document.querySelector('.page:not([style*="display: none"])');
    if (currentPage) {
        const pageId = currentPage.id.replace('Page', '');
        if (pageId === 'home') {
            loadHomePage();
        } else if (pageId === 'profile' && currentUser) {
            loadProfilePage();
        }
    }
}

// Modal Management
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Auth
document.getElementById('loginBtn').addEventListener('click', () => openModal('loginModal'));
document.getElementById('registerBtn').addEventListener('click', () => openModal('registerModal'));

document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    
    const user = db.users.find(u => u.email === email && u.password === password);
    if (user) {
        currentUser = user;
        closeModal('loginModal');
        e.target.reset();
        updateUI();
        alert('Đăng nhập thành công!');
    } else {
        alert('Email hoặc mật khẩu không đúng!');
    }
});

document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const phone = e.target[2].value;
    const password = e.target[3].value;
    
    if (db.users.find(u => u.email === email)) {
        alert('Email đã được sử dụng!');
        return;
    }
    
    const newUser = {
        id: Date.now(),
        name,
        email,
        phone,
        password
    };
    
    db.users.push(newUser);
    saveData();
    currentUser = newUser;
    closeModal('registerModal');
    e.target.reset();
    updateUI();
    alert('Đăng ký thành công!');
});

document.getElementById('logoutBtn').addEventListener('click', () => {
    currentUser = null;
    updateUI();
});

// Update UI based on auth state
function updateUI() {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const userMenu = document.getElementById('userMenu');
    const userName = document.getElementById('userName');
    const addProductBtn = document.getElementById('addProductBtn');
    
    if (currentUser) {
        loginBtn.style.display = 'none';
        registerBtn.style.display = 'none';
        userMenu.style.display = 'flex';
        userName.textContent = currentUser.name;
        addProductBtn.style.display = 'block';
        
        // Show edit buttons if user is owner
        const isOwner = currentUser.email === db.siteSettings.ownerEmail;
        document.getElementById('editAboutBtn').style.display = isOwner ? 'block' : 'none';
        document.getElementById('editContactBtn').style.display = isOwner ? 'block' : 'none';
    } else {
        loginBtn.style.display = 'block';
        registerBtn.style.display = 'block';
        userMenu.style.display = 'none';
        addProductBtn.style.display = 'none';
        document.getElementById('editAboutBtn').style.display = 'none';
        document.getElementById('editContactBtn').style.display = 'none';
    }
    
    renderProducts();
}

// Navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = e.target.dataset.page;
        showPage(page);
    });
});

function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById(page + 'Page').style.display = 'block';
    
    if (page === 'products') {
        renderProducts();
    } else if (page === 'home') {
        loadHomePage();
    } else if (page === 'profile') {
        if (!currentUser) {
            alert('Vui lòng đăng nhập để xem trang này!');
            showPage('home');
            return;
        }
        loadProfilePage();
    }
}

// Product Management
document.getElementById('addProductBtn').addEventListener('click', () => {
    if (!currentUser) {
        alert('Vui lòng đăng nhập để đăng sản phẩm!');
        return;
    }
    openModal('addProductModal');
});

document.getElementById('addProductBtn2').addEventListener('click', () => {
    if (!currentUser) {
        alert('Vui lòng đăng nhập để đăng sản phẩm!');
        return;
    }
    openModal('addProductModal');
});

document.getElementById('productImages').addEventListener('change', (e) => {
    const preview = document.getElementById('imagePreview');
    preview.innerHTML = '';
    
    const files = Array.from(e.target.files).slice(0, 5);
    files.forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.className = 'image-preview-item';
            preview.appendChild(img);
        };
        reader.readAsDataURL(file);
    });
});

document.getElementById('addProductForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const title = e.target[0].value;
    const description = e.target[1].value;
    const price = e.target[2].value;
    const category = e.target[3].value;
    const contact = e.target[4].value;
    const images = Array.from(document.querySelectorAll('.image-preview-item')).map(img => img.src);
    
    const newProduct = {
        id: Date.now(),
        title,
        description,
        price: parseFloat(price),
        category,
        contact,
        images: images.length > 0 ? images : ['https://via.placeholder.com/300x200?text=No+Image'],
        sellerId: currentUser.id,
        sellerName: currentUser.name,
        createdAt: new Date().toISOString()
    };
    
    db.products.push(newProduct);
    saveData();
    closeModal('addProductModal');
    e.target.reset();
    document.getElementById('imagePreview').innerHTML = '';
    alert('Đăng sản phẩm thành công!');
    renderProducts();
});

// Render Products
function renderProducts(searchTerm = '') {
    const grid = document.getElementById('productsGrid');
    const noResults = document.getElementById('noResults');
    grid.innerHTML = '';
    
    allProducts = db.products;
    let filteredProducts = allProducts;
    
    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filteredProducts = allProducts.filter(product => 
            product.title.toLowerCase().includes(term) ||
            product.description.toLowerCase().includes(term) ||
            product.category.toLowerCase().includes(term) ||
            product.sellerName.toLowerCase().includes(term)
        );
    }
    
    if (filteredProducts.length === 0) {
        noResults.style.display = 'block';
        grid.style.display = 'none';
    } else {
        noResults.style.display = 'none';
        grid.style.display = 'grid';
        filteredProducts.forEach(product => {
            grid.appendChild(createProductCard(product));
        });
    }
}

// Search functionality
document.getElementById('searchBtn').addEventListener('click', () => {
    const searchTerm = document.getElementById('searchInput').value;
    renderProducts(searchTerm);
});

document.getElementById('searchInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const searchTerm = document.getElementById('searchInput').value;
        renderProducts(searchTerm);
    }
});

document.getElementById('clearSearchBtn').addEventListener('click', () => {
    document.getElementById('searchInput').value = '';
    renderProducts();
});

function renderMyProducts() {
    const grid = document.getElementById('myProductsGrid');
    const noProductsMessage = document.getElementById('noProductsMessage');
    grid.innerHTML = '';
    
    if (!currentUser) {
        noProductsMessage.style.display = 'block';
        grid.style.display = 'none';
        return;
    }
    
    const myProducts = db.products.filter(p => p.sellerId === currentUser.id);
    
    if (myProducts.length === 0) {
        noProductsMessage.style.display = 'block';
        grid.style.display = 'none';
    } else {
        noProductsMessage.style.display = 'none';
        grid.style.display = 'grid';
        myProducts.forEach(product => {
            grid.appendChild(createProductCard(product, true));
        });
    }
}

function renderFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    container.innerHTML = '<h2 style="margin: 2rem 0 1rem;">Sản phẩm nổi bật</h2><div class="products-grid"></div>';
    const grid = container.querySelector('.products-grid');
    
    const featured = db.products.slice(-6);
    featured.forEach(product => {
        grid.appendChild(createProductCard(product));
    });
}

// Home Page Functions
function loadHomePage() {
    // Load about text
    const aboutContent = document.getElementById('aboutContent');
    const paragraphs = db.siteSettings.aboutText.split('\n\n');
    aboutContent.innerHTML = paragraphs.map(p => `<p>${p}</p>`).join('');
    
    // Load contact info
    document.getElementById('contactEmail').textContent = db.siteSettings.contactEmail;
    document.getElementById('contactPhone').textContent = db.siteSettings.contactPhone;
    document.getElementById('contactAddress').textContent = db.siteSettings.contactAddress;
    
    // Show edit buttons if owner
    if (currentUser && currentUser.email === db.siteSettings.ownerEmail) {
        document.getElementById('editAboutBtn').style.display = 'block';
        document.getElementById('editContactBtn').style.display = 'block';
    }
}

// Edit About
document.getElementById('editAboutBtn').addEventListener('click', () => {
    document.getElementById('aboutTextarea').value = db.siteSettings.aboutText;
    openModal('editAboutModal');
});

document.getElementById('editAboutForm').addEventListener('submit', (e) => {
    e.preventDefault();
    db.siteSettings.aboutText = document.getElementById('aboutTextarea').value;
    saveData();
    loadHomePage();
    closeModal('editAboutModal');
    alert('Cập nhật giới thiệu thành công!');
});

// Edit Contact
document.getElementById('editContactBtn').addEventListener('click', () => {
    document.getElementById('contactEmailInput').value = db.siteSettings.contactEmail;
    document.getElementById('contactPhoneInput').value = db.siteSettings.contactPhone;
    document.getElementById('contactAddressInput').value = db.siteSettings.contactAddress;
    openModal('editContactModal');
});

document.getElementById('editContactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    db.siteSettings.contactEmail = document.getElementById('contactEmailInput').value;
    db.siteSettings.contactPhone = document.getElementById('contactPhoneInput').value;
    db.siteSettings.contactAddress = document.getElementById('contactAddressInput').value;
    saveData();
    loadHomePage();
    closeModal('editContactModal');
    alert('Cập nhật thông tin liên hệ thành công!');
});

function createProductCard(product, isOwner = false) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // Kiểm tra xem user hiện tại có phải là chủ sản phẩm không
    const isProductOwner = currentUser && currentUser.id === product.sellerId;
    
    // Kiểm tra xem có tin nhắn chưa đọc không
    const hasUnreadMessages = checkUnreadMessages(product.id);
    
    card.innerHTML = `
        <img src="${product.images[0]}" alt="${product.title}" class="product-image">
        <div class="product-info">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-price">${formatPrice(product.price)}</p>
            <p class="product-description">${product.description}</p>
            <p style="color: var(--color-text-light); font-size: 0.9rem;">Người bán: ${product.sellerName}</p>
            <div class="product-actions">
                ${currentUser && !isProductOwner ? 
                    `<button class="btn-primary" onclick="openChat(${product.id})">💬 Chat ngay</button>` : ''}
                ${isProductOwner ? 
                    `<button class="btn-primary" onclick="openChat(${product.id})">💬 Xem tin nhắn ${hasUnreadMessages ? '🔴' : ''}</button>
                     <button class="btn-secondary" onclick="deleteProduct(${product.id})">Xóa</button>` : ''}
            </div>
        </div>
    `;
    
    return card;
}

function checkUnreadMessages(productId) {
    if (!currentUser) return false;
    
    const chatKey = `product-${productId}`;
    const messages = db.chats.filter(c => c.chatKey === chatKey && c.senderId !== currentUser.id);
    
    return messages.length > 0;
}

function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}

// Chat System
function openChat(productId) {
    if (!currentUser) {
        alert('Vui lòng đăng nhập để chat!');
        return;
    }
    
    const product = db.products.find(p => p.id === productId);
    if (!product) return;
    
    // Xác định ai là người mua, ai là người bán
    const isSeller = currentUser.id === product.sellerId;
    
    currentChat = {
        productId,
        sellerId: product.sellerId,
        sellerName: product.sellerName,
        buyerId: isSeller ? null : currentUser.id, // null nếu là người bán
        buyerName: isSeller ? null : currentUser.name,
        productTitle: product.title,
        isSeller: isSeller
    };
    
    const chatPartner = isSeller ? 'người mua' : product.sellerName;
    document.getElementById('chatTitle').textContent = `Chat về: ${product.title} - với ${chatPartner}`;
    openModal('chatModal');
    renderChatMessages();
}

function renderChatMessages() {
    const container = document.getElementById('chatMessages');
    container.innerHTML = '';
    
    // Tạo chatKey duy nhất cho mỗi cuộc hội thoại (sắp xếp ID để đảm bảo consistency)
    const chatKey = `product-${currentChat.productId}`;
    const messages = db.chats.filter(c => c.chatKey === chatKey);
    
    if (messages.length === 0) {
        const welcomeMsg = document.createElement('div');
        welcomeMsg.className = 'message received';
        welcomeMsg.style.background = 'var(--color-accent)';
        welcomeMsg.style.color = 'white';
        welcomeMsg.textContent = 'Bắt đầu cuộc trò chuyện...';
        container.appendChild(welcomeMsg);
    }
    
    messages.forEach(msg => {
        const div = document.createElement('div');
        div.className = `message ${msg.senderId === currentUser.id ? 'sent' : 'received'}`;
        
        // Hiển thị tên người gửi nếu không phải tin nhắn của mình
        if (msg.senderId !== currentUser.id) {
            const senderName = document.createElement('div');
            senderName.style.fontSize = '0.8rem';
            senderName.style.opacity = '0.8';
            senderName.style.marginBottom = '0.3rem';
            senderName.textContent = msg.senderName;
            div.appendChild(senderName);
        }
        
        const textNode = document.createElement('div');
        textNode.textContent = msg.text;
        div.appendChild(textNode);
        
        const timeNode = document.createElement('div');
        timeNode.style.fontSize = '0.7rem';
        timeNode.style.opacity = '0.7';
        timeNode.style.marginTop = '0.3rem';
        timeNode.textContent = formatTime(msg.timestamp);
        div.appendChild(timeNode);
        
        container.appendChild(div);
    });
    
    container.scrollTop = container.scrollHeight;
}

function formatTime(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;
    
    if (diff < 60000) return 'Vừa xong';
    if (diff < 3600000) return `${Math.floor(diff / 60000)} phút trước`;
    if (diff < 86400000) return `${Math.floor(diff / 3600000)} giờ trước`;
    
    return date.toLocaleString('vi-VN', { 
        day: '2-digit', 
        month: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit' 
    });
}

document.getElementById('sendMessage').addEventListener('click', sendMessage);
document.getElementById('chatInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
    const input = document.getElementById('chatInput');
    const text = input.value.trim();
    
    if (!text) return;
    
    const chatKey = `product-${currentChat.productId}`;
    const message = {
        id: Date.now(),
        chatKey,
        senderId: currentUser.id,
        senderName: currentUser.name,
        text,
        timestamp: new Date().toISOString()
    };
    
    db.chats.push(message);
    saveData();
    input.value = '';
    renderChatMessages();
}

// Thêm chức năng xem danh sách chat
function viewMyChats() {
    if (!currentUser) {
        alert('Vui lòng đăng nhập!');
        return;
    }
    
    // Lấy tất cả các cuộc chat liên quan đến user
    const myChats = new Set();
    db.chats.forEach(chat => {
        if (chat.senderId === currentUser.id) {
            myChats.add(chat.chatKey);
        }
    });
    
    // Tìm sản phẩm tương ứng
    const chatProducts = [];
    myChats.forEach(chatKey => {
        const productId = parseInt(chatKey.replace('product-', ''));
        const product = db.products.find(p => p.id === productId);
        if (product) {
            chatProducts.push(product);
        }
    });
    
    return chatProducts;
}

// Delete Product
function deleteProduct(productId) {
    if (confirm('Bạn có chắc muốn xóa sản phẩm này?')) {
        db.products = db.products.filter(p => p.id !== productId);
        saveData();
        renderMyProducts();
        loadProfilePage(); // Refresh stats
    }
}

// Initialize
updateUI();
loadHomePage();

// Profile Page Functions
function loadProfilePage() {
    if (!currentUser) return;
    
    // Load avatar
    const avatarDisplay = document.getElementById('avatarDisplay');
    const avatarInitials = document.getElementById('avatarInitials');
    const avatarImage = document.getElementById('avatarImage');
    
    if (currentUser.avatar) {
        avatarImage.src = currentUser.avatar;
        avatarImage.style.display = 'block';
        avatarInitials.style.display = 'none';
    } else {
        const initials = currentUser.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
        avatarInitials.textContent = initials;
        avatarImage.style.display = 'none';
        avatarInitials.style.display = 'block';
    }
    
    // Load profile info
    document.getElementById('profileName').value = currentUser.name;
    document.getElementById('profileEmail').value = currentUser.email;
    document.getElementById('profilePhone').value = currentUser.phone;
    
    // Load stats
    const userProducts = db.products.filter(p => p.sellerId === currentUser.id);
    document.getElementById('totalProducts').textContent = userProducts.length;
    
    const userChats = new Set();
    db.chats.forEach(chat => {
        if (chat.senderId === currentUser.id) {
            userChats.add(chat.chatKey);
        }
    });
    document.getElementById('totalChats').textContent = userChats.size;
    
    const joinDate = new Date(currentUser.id);
    document.getElementById('memberSince').textContent = joinDate.toLocaleDateString('vi-VN', { 
        month: '2-digit', 
        year: 'numeric' 
    });
    
    // Load my products
    renderMyProducts();
}

// Avatar Upload
document.getElementById('avatarInput').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
        currentUser.avatar = e.target.result;
        saveData();
        loadProfilePage();
        alert('Cập nhật ảnh đại diện thành công!');
    };
    reader.readAsDataURL(file);
});

// Remove Avatar
document.getElementById('removeAvatar').addEventListener('click', () => {
    if (confirm('Bạn có chắc muốn xóa ảnh đại diện?')) {
        delete currentUser.avatar;
        saveData();
        loadProfilePage();
        alert('Đã xóa ảnh đại diện!');
    }
});

// Update Profile Form
document.getElementById('profileForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('profileName').value;
    const email = document.getElementById('profileEmail').value;
    const phone = document.getElementById('profilePhone').value;
    
    // Check if email is already used by another user
    const existingUser = db.users.find(u => u.email === email && u.id !== currentUser.id);
    if (existingUser) {
        alert('Email này đã được sử dụng bởi tài khoản khác!');
        return;
    }
    
    currentUser.name = name;
    currentUser.email = email;
    currentUser.phone = phone;
    
    // Update seller name in products
    db.products.forEach(product => {
        if (product.sellerId === currentUser.id) {
            product.sellerName = name;
        }
    });
    
    // Update sender name in chats
    db.chats.forEach(chat => {
        if (chat.senderId === currentUser.id) {
            chat.senderName = name;
        }
    });
    
    saveData();
    updateUI();
    alert('Cập nhật thông tin thành công!');
});

// Change Password Form
document.getElementById('passwordForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (currentPassword !== currentUser.password) {
        alert('Mật khẩu hiện tại không đúng!');
        return;
    }
    
    if (newPassword.length < 6) {
        alert('Mật khẩu mới phải có ít nhất 6 ký tự!');
        return;
    }
    
    if (newPassword !== confirmPassword) {
        alert('Mật khẩu xác nhận không khớp!');
        return;
    }
    
    currentUser.password = newPassword;
    saveData();
    
    // Clear form
    document.getElementById('currentPassword').value = '';
    document.getElementById('newPassword').value = '';
    document.getElementById('confirmPassword').value = '';
    
    alert('Đổi mật khẩu thành công!');
});
