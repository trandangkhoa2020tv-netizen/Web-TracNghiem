const quizData = [
  {
    question: "VI SINH VẬT LÀ GÌ?",
    options: ["SINH VẬT ĐA BÀO", "SINH VẬT KÍCH THƯỚC NHỎ", "SINH VẬT NHÂN THỰC", "SINH VẬT LỚN"],
    answer: "SINH VẬT KÍCH THƯỚC NHỎ",
  },
  {
    question: "VI KHUẨN THUỘC KIỂU TẾ BÀO NÀO?",
    options: ["NHÂN THỰC", "NHÂN SƠ", "ĐA BÀO", "KHÔNG TẾ BÀO"],
    answer: "NHÂN SƠ",
  },
  {
    question: "THÀNH TẾ BÀO VI KHUẨN CHỦ YẾU LÀ?",
    options: ["CELLULOSE", "CHITIN", "PEPTIDOGLYCAN", "PROTEIN"],
    answer: "PEPTIDOGLYCAN",
  },
  {
    question: "VI KHUẨN SINH SẢN CHỦ YẾU BẰNG?",
    options: ["NẢY CHỒI", "PHÂN ĐÔI", "TIẾP HỢP", "BÀO TỬ"],
    answer: "PHÂN ĐÔI",
  },
  {
    question: "VIRUS CÓ CẤU TẠO GỒM?",
    options: ["TẾ BÀO", "NHÂN", "VỎ PROTEIN VÀ ACID NUCLEIC", "MÀNG SINH CHẤT"],
    answer: "VỎ PROTEIN VÀ ACID NUCLEIC",
  },
  {
    question: "VIRUS CHỈ SINH SẢN ĐƯỢC KHI?",
    options: ["CÓ NƯỚC", "CÓ OXY", "TRONG TẾ BÀO CHỦ", "ÁNH SÁNG"],
    answer: "TRONG TẾ BÀO CHỦ",
  },
  {
    question: "LOẠI KÍNH DÙNG QUAN SÁT VIRUS?",
    options: ["KÍNH QUANG HỌC", "KÍNH HIỂN VI ĐIỆN TỬ", "KÍNH LÚP", "KÍNH SOI"],
    answer: "KÍNH HIỂN VI ĐIỆN TỬ",
  },
  {
    question: "NẤM MEN SINH SẢN BẰNG HÌNH THỨC?",
    options: ["PHÂN ĐÔI", "NẢY CHỒI", "BÀO TỬ HỮU TÍNH", "TIẾP HỢP"],
    answer: "NẢY CHỒI",
  },
  {
    question: "NẤM MEN SỬ DỤNG TRONG SẢN XUẤT?",
    options: ["RƯỢU BIA", "KHÁNG SINH", "SỮA", "VACCINE"],
    answer: "RƯỢU BIA",
  },
  {
    question: "VI SINH VẬT NÀO DÙNG SẢN XUẤT SỮA CHUA?",
    options: ["E.COLI", "LACTOBACILLUS", "NẤM MEN", "TẢO"],
    answer: "LACTOBACILLUS",
  },
  {
    question: "VI KHUẨN CỐ ĐỊNH ĐẠM Ở RỄ CÂY HỌ ĐẬU?",
    options: ["E.COLI", "RHIZOBIUM", "BACILLUS", "SALMONELLA"],
    answer: "RHIZOBIUM",
  },
  {
    question: "BỆNH LAO DO VI KHUẨN NÀO GÂY RA?",
    options: ["E.COLI", "MYCOBACTERIUM TUBERCULOSIS", "SALMONELLA", "VIBRIO"],
    answer: "MYCOBACTERIUM TUBERCULOSIS",
  },
  {
    question: "BỆNH TẢ DO VI KHUẨN?",
    options: ["SALMONELLA", "E.COLI", "VIBRIO CHOLERAE", "SHIGELLA"],
    answer: "VIBRIO CHOLERAE",
  },
  {
    question: "VI KHUẨN GÂY BỆNH THƯƠNG HÀN?",
    options: ["E.COLI", "SALMONELLA TYPHI", "VIBRIO", "BACILLUS"],
    answer: "SALMONELLA TYPHI",
  },
  {
    question: "E.COLI THƯỜNG SỐNG Ở ĐÂU?",
    options: ["NƯỚC BIỂN", "ĐẤT", "RUỘT NGƯỜI", "KHÔNG KHÍ"],
    answer: "RUỘT NGƯỜI",
  },
  {
    question: "KHÁNG SINH PENICILLIN CHIẾT TỪ?",
    options: ["VI KHUẨN", "NẤM MỐC", "TẢO", "ĐỘNG VẬT"],
    answer: "NẤM MỐC",
  },
  {
    question: "NẤM MỐC CÓ CẤU TẠO?",
    options: ["ĐƠN BÀO", "ĐA BÀO DẠNG SỢI", "KHÔNG TẾ BÀO", "NHÂN SƠ"],
    answer: "ĐA BÀO DẠNG SỢI",
  },
  {
    question: "VI SINH VẬT GÂY BỆNH SỐT XUẤT HUYẾT?",
    options: ["VI KHUẨN", "NẤM", "VIRUS", "KÝ SINH TRÙNG"],
    answer: "VIRUS",
  },
  {
    question: "VIRUS CÚM LÂY TRUYỀN QUA?",
    options: ["THỨC ĂN", "NƯỚC", "ĐƯỜNG HÔ HẤP", "TIẾP XÚC DA"],
    answer: "ĐƯỜNG HÔ HẤP",
  },
  {
    question: "VI SINH VẬT PHÂN GIẢI CHẤT HỮU CƠ TRONG ĐẤT?",
    options: ["VI KHUẨN VÀ NẤM", "VIRUS", "TẢO", "ĐỘNG VẬT"],
    answer: "VI KHUẨN VÀ NẤM",
  },
  {
    question: "VI SINH VẬT GIÚP TĂNG ĐỘ PHÌ NHIÊU ĐẤT?",
    options: ["VIRUS", "VI KHUẨN CỐ ĐỊNH ĐẠM", "NẤM KÝ SINH", "VI KHUẨN GÂY BỆNH"],
    answer: "VI KHUẨN CỐ ĐỊNH ĐẠM",
  },
  {
    question: "VI SINH VẬT GÂY BỆNH CHO CÂY?",
    options: ["VI KHUẨN, VIRUS, NẤM", "CHỈ VIRUS", "CHỈ NẤM", "CHỈ VI KHUẨN"],
    answer: "VI KHUẨN, VIRUS, NẤM",
  },
  {
    question: "NẤM GÂY BỆNH NGOÀI DA Ở NGƯỜI?",
    options: ["CANDIDA", "LACTOBACILLUS", "E.COLI", "BACILLUS"],
    answer: "CANDIDA",
  },
  {
    question: "VI SINH VẬT SỬ DỤNG TRONG SẢN XUẤT KHÁNG SINH?",
    options: ["NẤM MỐC", "VIRUS", "TẢO", "ĐỘNG VẬT"],
    answer: "NẤM MỐC",
  },
  {
    question: "VI SINH VẬT CÓ LỢI CHO HỆ TIÊU HÓA NGƯỜI?",
    options: ["E.COLI GÂY BỆNH", "LACTOBACILLUS", "SALMONELLA", "VIBRIO"],
    answer: "LACTOBACILLUS",
  },
  {
    question: "HỆ VI SINH VẬT ĐƯỜNG RUỘT GIÚP?",
    options: ["GÂY BỆNH", "TIÊU DIỆT TẾ BÀO", "TIÊU HÓA VÀ TỔNG HỢP VITAMIN", "GÂY ĐỘC"],
    answer: "TIÊU HÓA VÀ TỔNG HỢP VITAMIN",
  },
  {
    question: "VIRUS KHÔNG CÓ KHẢ NĂNG?",
    options: ["SINH SẢN", "TRAO ĐỔI CHẤT ĐỘC LẬP", "ĐỘT BIẾN", "LÂY NHIỄM"],
    answer: "TRAO ĐỔI CHẤT ĐỘC LẬP",
  },
  {
    question: "VI KHUẨN HIẾU KHÍ LÀ?",
    options: ["SỐNG KHÔNG CẦN OXY", "CẦN OXY ĐỂ SỐNG", "KHÔNG SỐNG ĐƯỢC", "CHỈ SỐNG TRONG NƯỚC"],
    answer: "CẦN OXY ĐỂ SỐNG",
  },
  {
    question: "VI KHUẨN KỊ KHÍ LÀ?",
    options: ["CẦN OXY", "KHÔNG CẦN OXY", "CẦN ÁNH SÁNG", "SỐNG TRONG ĐẤT"],
    answer: "KHÔNG CẦN OXY",
  },
  {
    question: "NHIỄM TRÙNG LÀ DO?",
    options: ["VIRUS", "VI SINH VẬT GÂY BỆNH", "TẢO", "ĐỘNG VẬT"],
    answer: "VI SINH VẬT GÂY BỆNH",
  },
  {
    question: "KHÁNG KHÁNG SINH LÀ?",
    options: ["VI KHUẨN CHẾT", "VI KHUẨN KHÔNG BỊ TIÊU DIỆT", "VIRUS CHẾT", "NẤM BIẾN MẤT"],
    answer: "VI KHUẨN KHÔNG BỊ TIÊU DIỆT",
  },
  {
    question: "TIỆT TRÙNG LÀ?",
    options: ["GIẢM VI SINH VẬT", "TIÊU DIỆT HOÀN TOÀN VI SINH VẬT", "KHỬ TRÙNG", "LÀM SẠCH"],
    answer: "TIÊU DIỆT HOÀN TOÀN VI SINH VẬT",
  },
  {
    question: "KHỬ TRÙNG KHÁC TIỆT TRÙNG Ở ĐIỂM?",
    options: ["TIÊU DIỆT TẤT CẢ", "KHÔNG TIÊU DIỆT BÀO TỬ", "KHÔNG HIỆU QUẢ", "KHÔNG DÙNG HÓA CHẤT"],
    answer: "KHÔNG TIÊU DIỆT BÀO TỬ",
  },
  {
    question: "VACCINE CÓ TÁC DỤNG?",
    options: ["ĐIỀU TRỊ", "PHÒNG BỆNH", "GIẢM ĐAU", "DIỆT VI KHUẨN"],
    answer: "PHÒNG BỆNH",
  },
  {
    question: "VACCINE HOẠT ĐỘNG DỰA TRÊN?",
    options: ["KHÁNG SINH", "HỆ MIỄN DỊCH", "NHIỆT ĐỘ", "HÓA CHẤT"],
    answer: "HỆ MIỄN DỊCH",
  },
  {
    question: "VI SINH VẬT CÓ THỂ GÂY ĐỘT BIẾN?",
    options: ["VIRUS", "VI KHUẨN", "NẤM", "TẤT CẢ ĐỀU ĐÚNG"],
    answer: "TẤT CẢ ĐỀU ĐÚNG",
  },
];
export default quizData;
