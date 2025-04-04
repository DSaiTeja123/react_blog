import React from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf } from 'react-icons/fa'; // optional icon

function Logo({ width = '100px', showIcon = false }) {
  return (
    <Link to="/" className="flex items-center gap-2 justify-center" style={{ width }}>
      {showIcon && <FaLeaf className="text-green-500 text-2xl" />}
      <span className="text-2xl font-extrabold text-blue-600 tracking-tight">BlogIt</span>
    </Link>
  );
}

export default Logo;
