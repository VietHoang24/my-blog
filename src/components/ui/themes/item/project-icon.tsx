import React from 'react';
import * as Icons from 'react-icons/fa'; // Import tất cả các icons từ react-icons

// Component Icon nhận tên của icon và trả về React icon tương ứng
const PjIcon = ({ name, className, ...props }) => {
  // Kiểm tra xem tên icon có hợp lệ không
  const IconComponent = Icons[name];

  // Nếu không có icon tương ứng, trả về một icon mặc định (hoặc null)
  return IconComponent ? <IconComponent  className={className} size={26} {...props} /> : <Icons.FaQuestionCircle />;
};

export default PjIcon;
