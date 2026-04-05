// Translations for the marketplace
const translations = {
    vi: {
        // Header & Navigation
        home: "Trang chủ",
        products: "Sản phẩm",
        myProfile: "Của tôi",
        login: "Đăng nhập",
        register: "Đăng ký",
        logout: "Đăng xuất",
        
        // Modals
        selectLanguage: "Chọn Ngôn Ngữ",
        selectTheme: "Chọn Theme",
        selectUIStyle: "Chọn Phong Cách UI",
        close: "Đóng",
        
        // Themes
        summerTheme: "Mùa Hè",
        winterTheme: "Mùa Đông",
        summerDesc: "Màu sắc ấm áp, tươi sáng",
        winterDesc: "Màu sắc mát mẻ, thanh lịch",
        
        // Login/Register
        loginTitle: "Đăng nhập",
        registerTitle: "Đăng ký",
        fullName: "Tên đầy đủ",
        email: "Email",
        phone: "Số điện thoại",
        password: "Mật khẩu",
        cancel: "Hủy",
        
        // Home Page
        heroTitle: "Chào mừng đến Chợ Online",
        heroSubtitle: "Nơi mua bán dễ dàng, an toàn và tiện lợi",
        aboutTitle: "Giới thiệu",
        contactTitle: "Thông tin liên hệ",
        featuresTitle: "Tính năng nổi bật",
        edit: "Chỉnh sửa",
        
        // Features
        feature1Title: "Đăng bán dễ dàng",
        feature1Desc: "Đăng sản phẩm chỉ trong vài phút với nhiều hình ảnh",
        feature2Title: "Chat trực tiếp",
        feature2Desc: "Liên hệ người bán ngay lập tức qua chat",
        feature3Title: "Giao diện đẹp",
        feature3Desc: "Nhiều theme màu sắc, responsive mọi thiết bị",
        feature4Title: "An toàn",
        feature4Desc: "Thông tin được bảo mật và lưu trữ an toàn",
        
        // Products Page
        allProducts: "Tất cả sản phẩm",
        addProduct: "+ Đăng sản phẩm",
        searchPlaceholder: "🔍 Tìm kiếm sản phẩm theo tên, mô tả, danh mục...",
        search: "Tìm kiếm",
        clear: "Xóa",
        noResults: "Không tìm thấy sản phẩm nào 😔",
        seller: "Người bán",
        chatNow: "💬 Chat ngay",
        viewMessages: "💬 Xem tin nhắn",
        delete: "Xóa",
        
        // Add Product
        addProductTitle: "Đăng sản phẩm mới",
        productName: "Tên sản phẩm",
        description: "Mô tả sản phẩm",
        price: "Giá (VNĐ)",
        category: "Danh mục",
        contactInfo: "Thông tin liên hệ",
        productImages: "Hình ảnh sản phẩm (tối đa 5)",
        
        // Profile Page
        accountInfo: "Thông tin tài khoản",
        avatar: "Ảnh đại diện",
        chooseImage: "Chọn ảnh",
        removeImage: "Xóa ảnh",
        personalInfo: "Thông tin cá nhân",
        updateInfo: "Cập nhật thông tin",
        changePassword: "Đổi mật khẩu",
        currentPassword: "Mật khẩu hiện tại",
        newPassword: "Mật khẩu mới",
        confirmPassword: "Xác nhận mật khẩu mới",
        statistics: "Thống kê",
        productsPosted: "Sản phẩm đã đăng",
        conversations: "Cuộc trò chuyện",
        memberSince: "Thành viên từ",
        myProducts: "Sản phẩm của tôi",
        noProducts: "Bạn chưa có sản phẩm nào",
        postFirstProduct: "Hãy đăng sản phẩm đầu tiên của bạn!",
        
        // Chat
        chatWith: "Chat về",
        withBuyer: "với người mua",
        startConversation: "Bắt đầu cuộc trò chuyện...",
        typeMessage: "Nhập tin nhắn...",
        send: "Gửi",
        justNow: "Vừa xong",
        minutesAgo: "phút trước",
        hoursAgo: "giờ trước",
        
        // Alerts
        loginSuccess: "Đăng nhập thành công!",
        loginError: "Email hoặc mật khẩu không đúng!",
        registerSuccess: "Đăng ký thành công!",
        emailUsed: "Email đã được sử dụng!",
        productAdded: "Đăng sản phẩm thành công!",
        productDeleted: "Đã xóa sản phẩm!",
        confirmDelete: "Bạn có chắc muốn xóa sản phẩm này?",
        avatarUpdated: "Cập nhật ảnh đại diện thành công!",
        avatarRemoved: "Đã xóa ảnh đại diện!",
        confirmRemoveAvatar: "Bạn có chắc muốn xóa ảnh đại diện?",
        infoUpdated: "Cập nhật thông tin thành công!",
        emailAlreadyUsed: "Email này đã được sử dụng bởi tài khoản khác!",
        passwordChanged: "Đổi mật khẩu thành công!",
        wrongPassword: "Mật khẩu hiện tại không đúng!",
        passwordTooShort: "Mật khẩu mới phải có ít nhất 6 ký tự!",
        passwordMismatch: "Mật khẩu xác nhận không khớp!",
        pleaseLogin: "Vui lòng đăng nhập!",
        pleaseLoginToPost: "Vui lòng đăng nhập để đăng sản phẩm!",
        pleaseLoginToChat: "Vui lòng đăng nhập để chat!",
        pleaseLoginToView: "Vui lòng đăng nhập để xem trang này!",
        
        // Contact
        contactEmail: "📧 Email:",
        contactPhone: "📱 Điện thoại:",
        contactAddress: "📍 Địa chỉ:",
        editAbout: "Chỉnh sửa giới thiệu",
        editContact: "Chỉnh sửa thông tin liên hệ",
        aboutPlaceholder: "Nhập nội dung giới thiệu...",
        saveChanges: "Lưu thay đổi",
        aboutUpdated: "Cập nhật giới thiệu thành công!",
        contactUpdated: "Cập nhật thông tin liên hệ thành công!"
    },
    
    en: {
        // Header & Navigation
        home: "Home",
        products: "Products",
        myProfile: "My Profile",
        login: "Login",
        register: "Register",
        logout: "Logout",
        
        // Modals
        selectLanguage: "Select Language",
        selectTheme: "Select Theme",
        selectUIStyle: "Select UI Style",
        close: "Close",
        
        // Themes
        summerTheme: "Summer",
        winterTheme: "Winter",
        summerDesc: "Warm, bright colors",
        winterDesc: "Cool, elegant colors",
        
        // Login/Register
        loginTitle: "Login",
        registerTitle: "Register",
        fullName: "Full Name",
        email: "Email",
        phone: "Phone Number",
        password: "Password",
        cancel: "Cancel",
        
        // Home Page
        heroTitle: "Welcome to Online Market",
        heroSubtitle: "Easy, safe and convenient trading place",
        aboutTitle: "About Us",
        contactTitle: "Contact Information",
        featuresTitle: "Key Features",
        edit: "Edit",
        
        // Features
        feature1Title: "Easy Listing",
        feature1Desc: "Post products in minutes with multiple images",
        feature2Title: "Direct Chat",
        feature2Desc: "Contact sellers instantly via chat",
        feature3Title: "Beautiful UI",
        feature3Desc: "Multiple color themes, responsive on all devices",
        feature4Title: "Secure",
        feature4Desc: "Your information is encrypted and stored safely",
        
        // Products Page
        allProducts: "All Products",
        addProduct: "+ Post Product",
        searchPlaceholder: "🔍 Search products by name, description, category...",
        search: "Search",
        clear: "Clear",
        noResults: "No products found 😔",
        seller: "Seller",
        chatNow: "💬 Chat now",
        viewMessages: "💬 View messages",
        delete: "Delete",
        
        // Add Product
        addProductTitle: "Post New Product",
        productName: "Product Name",
        description: "Product Description",
        price: "Price (VND)",
        category: "Category",
        contactInfo: "Contact Information",
        productImages: "Product Images (max 5)",
        
        // Profile Page
        accountInfo: "Account Information",
        avatar: "Avatar",
        chooseImage: "Choose Image",
        removeImage: "Remove Image",
        personalInfo: "Personal Information",
        updateInfo: "Update Information",
        changePassword: "Change Password",
        currentPassword: "Current Password",
        newPassword: "New Password",
        confirmPassword: "Confirm New Password",
        statistics: "Statistics",
        productsPosted: "Products Posted",
        conversations: "Conversations",
        memberSince: "Member Since",
        myProducts: "My Products",
        noProducts: "You don't have any products yet",
        postFirstProduct: "Post your first product!",
        
        // Chat
        chatWith: "Chat about",
        withBuyer: "with buyer",
        startConversation: "Start conversation...",
        typeMessage: "Type message...",
        send: "Send",
        justNow: "Just now",
        minutesAgo: "minutes ago",
        hoursAgo: "hours ago",
        
        // Alerts
        loginSuccess: "Login successful!",
        loginError: "Incorrect email or password!",
        registerSuccess: "Registration successful!",
        emailUsed: "Email already in use!",
        productAdded: "Product posted successfully!",
        productDeleted: "Product deleted!",
        confirmDelete: "Are you sure you want to delete this product?",
        avatarUpdated: "Avatar updated successfully!",
        avatarRemoved: "Avatar removed!",
        confirmRemoveAvatar: "Are you sure you want to remove your avatar?",
        infoUpdated: "Information updated successfully!",
        emailAlreadyUsed: "This email is already used by another account!",
        passwordChanged: "Password changed successfully!",
        wrongPassword: "Current password is incorrect!",
        passwordTooShort: "New password must be at least 6 characters!",
        passwordMismatch: "Password confirmation doesn't match!",
        pleaseLogin: "Please login!",
        pleaseLoginToPost: "Please login to post products!",
        pleaseLoginToChat: "Please login to chat!",
        pleaseLoginToView: "Please login to view this page!",
        
        // Contact
        contactEmail: "📧 Email:",
        contactPhone: "📱 Phone:",
        contactAddress: "📍 Address:",
        editAbout: "Edit About",
        editContact: "Edit Contact Info",
        aboutPlaceholder: "Enter about content...",
        saveChanges: "Save Changes",
        aboutUpdated: "About updated successfully!",
        contactUpdated: "Contact info updated successfully!"
    },
    
    es: {
        // Header & Navigation
        home: "Inicio",
        products: "Productos",
        myProfile: "Mi Perfil",
        login: "Iniciar Sesión",
        register: "Registrarse",
        logout: "Cerrar Sesión",
        
        // Modals
        selectLanguage: "Seleccionar Idioma",
        selectTheme: "Seleccionar Tema",
        selectUIStyle: "Seleccionar Estilo de UI",
        close: "Cerrar",
        
        // Themes
        summerTheme: "Verano",
        winterTheme: "Invierno",
        summerDesc: "Colores cálidos y brillantes",
        winterDesc: "Colores frescos y elegantes",
        
        // Login/Register
        loginTitle: "Iniciar Sesión",
        registerTitle: "Registrarse",
        fullName: "Nombre Completo",
        email: "Correo Electrónico",
        phone: "Número de Teléfono",
        password: "Contraseña",
        cancel: "Cancelar",
        
        // Home Page
        heroTitle: "Bienvenido al Mercado Online",
        heroSubtitle: "Lugar de comercio fácil, seguro y conveniente",
        aboutTitle: "Sobre Nosotros",
        contactTitle: "Información de Contacto",
        featuresTitle: "Características Principales",
        edit: "Editar",
        
        // Features
        feature1Title: "Publicación Fácil",
        feature1Desc: "Publica productos en minutos con múltiples imágenes",
        feature2Title: "Chat Directo",
        feature2Desc: "Contacta vendedores instantáneamente por chat",
        feature3Title: "Interfaz Hermosa",
        feature3Desc: "Múltiples temas de color, responsive en todos los dispositivos",
        feature4Title: "Seguro",
        feature4Desc: "Tu información está encriptada y almacenada de forma segura",
        
        // Products Page
        allProducts: "Todos los Productos",
        addProduct: "+ Publicar Producto",
        searchPlaceholder: "🔍 Buscar productos por nombre, descripción, categoría...",
        search: "Buscar",
        clear: "Limpiar",
        noResults: "No se encontraron productos 😔",
        seller: "Vendedor",
        chatNow: "💬 Chatear ahora",
        viewMessages: "💬 Ver mensajes",
        delete: "Eliminar",
        
        // Add Product
        addProductTitle: "Publicar Nuevo Producto",
        productName: "Nombre del Producto",
        description: "Descripción del Producto",
        price: "Precio (VND)",
        category: "Categoría",
        contactInfo: "Información de Contacto",
        productImages: "Imágenes del Producto (máx 5)",
        
        // Profile Page
        accountInfo: "Información de la Cuenta",
        avatar: "Avatar",
        chooseImage: "Elegir Imagen",
        removeImage: "Eliminar Imagen",
        personalInfo: "Información Personal",
        updateInfo: "Actualizar Información",
        changePassword: "Cambiar Contraseña",
        currentPassword: "Contraseña Actual",
        newPassword: "Nueva Contraseña",
        confirmPassword: "Confirmar Nueva Contraseña",
        statistics: "Estadísticas",
        productsPosted: "Productos Publicados",
        conversations: "Conversaciones",
        memberSince: "Miembro Desde",
        myProducts: "Mis Productos",
        noProducts: "Aún no tienes productos",
        postFirstProduct: "¡Publica tu primer producto!",
        
        // Chat
        chatWith: "Chat sobre",
        withBuyer: "con comprador",
        startConversation: "Iniciar conversación...",
        typeMessage: "Escribe un mensaje...",
        send: "Enviar",
        justNow: "Justo ahora",
        minutesAgo: "minutos atrás",
        hoursAgo: "horas atrás",
        
        // Alerts
        loginSuccess: "¡Inicio de sesión exitoso!",
        loginError: "¡Correo o contraseña incorrectos!",
        registerSuccess: "¡Registro exitoso!",
        emailUsed: "¡Correo ya en uso!",
        productAdded: "¡Producto publicado exitosamente!",
        productDeleted: "¡Producto eliminado!",
        confirmDelete: "¿Estás seguro de que quieres eliminar este producto?",
        avatarUpdated: "¡Avatar actualizado exitosamente!",
        avatarRemoved: "¡Avatar eliminado!",
        confirmRemoveAvatar: "¿Estás seguro de que quieres eliminar tu avatar?",
        infoUpdated: "¡Información actualizada exitosamente!",
        emailAlreadyUsed: "¡Este correo ya está siendo usado por otra cuenta!",
        passwordChanged: "¡Contraseña cambiada exitosamente!",
        wrongPassword: "¡La contraseña actual es incorrecta!",
        passwordTooShort: "¡La nueva contraseña debe tener al menos 6 caracteres!",
        passwordMismatch: "¡La confirmación de contraseña no coincide!",
        pleaseLogin: "¡Por favor inicia sesión!",
        pleaseLoginToPost: "¡Por favor inicia sesión para publicar productos!",
        pleaseLoginToChat: "¡Por favor inicia sesión para chatear!",
        pleaseLoginToView: "¡Por favor inicia sesión para ver esta página!",
        
        // Contact
        contactEmail: "📧 Correo:",
        contactPhone: "📱 Teléfono:",
        contactAddress: "📍 Dirección:",
        editAbout: "Editar Acerca de",
        editContact: "Editar Info de Contacto",
        aboutPlaceholder: "Ingresa contenido sobre nosotros...",
        saveChanges: "Guardar Cambios",
        aboutUpdated: "¡Acerca de actualizado exitosamente!",
        contactUpdated: "¡Info de contacto actualizada exitosamente!"
    },
    
    ja: {
        // Header & Navigation
        home: "ホーム",
        products: "商品",
        myProfile: "マイページ",
        login: "ログイン",
        register: "登録",
        logout: "ログアウト",
        
        // Modals
        selectLanguage: "言語を選択",
        selectTheme: "テーマを選択",
        selectUIStyle: "UIスタイルを選択",
        close: "閉じる",
        
        // Themes
        summerTheme: "夏",
        winterTheme: "冬",
        summerDesc: "暖かく明るい色",
        winterDesc: "涼しく上品な色",
        
        // Login/Register
        loginTitle: "ログイン",
        registerTitle: "登録",
        fullName: "氏名",
        email: "メールアドレス",
        phone: "電話番号",
        password: "パスワード",
        cancel: "キャンセル",
        
        // Home Page
        heroTitle: "オンラインマーケットへようこそ",
        heroSubtitle: "簡単、安全、便利な取引場所",
        aboutTitle: "私たちについて",
        contactTitle: "連絡先情報",
        featuresTitle: "主な機能",
        edit: "編集",
        
        // Features
        feature1Title: "簡単出品",
        feature1Desc: "複数の画像で数分で商品を投稿",
        feature2Title: "直接チャット",
        feature2Desc: "チャットで販売者に即座に連絡",
        feature3Title: "美しいUI",
        feature3Desc: "複数のカラーテーマ、すべてのデバイスでレスポンシブ",
        feature4Title: "安全",
        feature4Desc: "あなたの情報は暗号化され安全に保存されます",
        
        // Products Page
        allProducts: "すべての商品",
        addProduct: "+ 商品を投稿",
        searchPlaceholder: "🔍 名前、説明、カテゴリで商品を検索...",
        search: "検索",
        clear: "クリア",
        noResults: "商品が見つかりません 😔",
        seller: "販売者",
        chatNow: "💬 今すぐチャット",
        viewMessages: "💬 メッセージを見る",
        delete: "削除",
        
        // Add Product
        addProductTitle: "新しい商品を投稿",
        productName: "商品名",
        description: "商品説明",
        price: "価格（VND）",
        category: "カテゴリ",
        contactInfo: "連絡先情報",
        productImages: "商品画像（最大5枚）",
        
        // Profile Page
        accountInfo: "アカウント情報",
        avatar: "アバター",
        chooseImage: "画像を選択",
        removeImage: "画像を削除",
        personalInfo: "個人情報",
        updateInfo: "情報を更新",
        changePassword: "パスワードを変更",
        currentPassword: "現在のパスワード",
        newPassword: "新しいパスワード",
        confirmPassword: "新しいパスワードを確認",
        statistics: "統計",
        productsPosted: "投稿した商品",
        conversations: "会話",
        memberSince: "メンバー登録日",
        myProducts: "私の商品",
        noProducts: "まだ商品がありません",
        postFirstProduct: "最初の商品を投稿しましょう！",
        
        // Chat
        chatWith: "チャット：",
        withBuyer: "購入者と",
        startConversation: "会話を始める...",
        typeMessage: "メッセージを入力...",
        send: "送信",
        justNow: "たった今",
        minutesAgo: "分前",
        hoursAgo: "時間前",
        
        // Alerts
        loginSuccess: "ログイン成功！",
        loginError: "メールアドレスまたはパスワードが正しくありません！",
        registerSuccess: "登録成功！",
        emailUsed: "メールアドレスは既に使用されています！",
        productAdded: "商品が正常に投稿されました！",
        productDeleted: "商品が削除されました！",
        confirmDelete: "この商品を削除してもよろしいですか？",
        avatarUpdated: "アバターが正常に更新されました！",
        avatarRemoved: "アバターが削除されました！",
        confirmRemoveAvatar: "アバターを削除してもよろしいですか？",
        infoUpdated: "情報が正常に更新されました！",
        emailAlreadyUsed: "このメールアドレスは既に別のアカウントで使用されています！",
        passwordChanged: "パスワードが正常に変更されました！",
        wrongPassword: "現在のパスワードが正しくありません！",
        passwordTooShort: "新しいパスワードは少なくとも6文字必要です！",
        passwordMismatch: "パスワードの確認が一致しません！",
        pleaseLogin: "ログインしてください！",
        pleaseLoginToPost: "商品を投稿するにはログインしてください！",
        pleaseLoginToChat: "チャットするにはログインしてください！",
        pleaseLoginToView: "このページを表示するにはログインしてください！",
        
        // Contact
        contactEmail: "📧 メール：",
        contactPhone: "📱 電話：",
        contactAddress: "📍 住所：",
        editAbout: "について編集",
        editContact: "連絡先情報を編集",
        aboutPlaceholder: "について内容を入力...",
        saveChanges: "変更を保存",
        aboutUpdated: "についてが正常に更新されました！",
        contactUpdated: "連絡先情報が正常に更新されました！"
    }
};

// Current language
let currentLang = 'vi';

// Translation function
function t(key) {
    return translations[currentLang][key] || translations['vi'][key] || key;
}

// Update all text elements with data-i18n attribute
function updateLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = t(key);
        } else {
            element.textContent = t(key);
        }
    });
}

// Set language
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    updateLanguage();
    
    // Update dynamic content
    if (typeof updateDynamicContent === 'function') {
        updateDynamicContent();
    }
}

// Load saved language
const savedLang = localStorage.getItem('language') || 'vi';
setLanguage(savedLang);
