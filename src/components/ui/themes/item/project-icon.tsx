import React from "react";
import * as Icons from "react-icons/fa"; // Import tất cả các icons từ react-icons

// Định nghĩa kiểu cho props
type PjIconProps = {
  name: string; // 'name' là chuỗi tùy ý
  className?: string; // 'className' là tùy chọn
  [key: string]: any; // Các props khác
};

// Component Icon nhận tên của icon và trả về React icon tương ứng
const PjIcon: React.FC<PjIconProps> = ({ name, className, ...props }) => {
  // Kiểm tra xem tên icon có tồn tại trong Icons
  const IconComponent = (Icons as any)[name];

  // Nếu không có icon tương ứng, trả về một icon mặc định (hoặc null)
  return IconComponent ? (
    <IconComponent className={className} size={26} {...props} />
  ) : (
    <Icons.FaQuestionCircle className={className} size={26} />
  );
};

export default PjIcon;
