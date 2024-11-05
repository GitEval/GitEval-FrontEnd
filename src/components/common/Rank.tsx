import React, { useState } from 'react';

export interface UserInfo {
  avatar: string;
  name: string;
  email: string;
  score: number;
}

interface LeaderboardProps {
  data: UserInfo[];
  itemsPerPage?: number;
}

const Rank: React.FC<LeaderboardProps> = ({ data, itemsPerPage = 5 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-4 shadow-md rounded-lg bg-white w-[40vw]">
      <h2 className="text-2xl font-bold mb-4">排行榜</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="p-2 border-b">头像</th>
            <th className="p-2 border-b">姓名</th>
            <th className="p-2 border-b">邮箱</th>
            <th className="p-2 border-b">分数</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((user, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="p-2 border-b">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full"
                />
              </td>
              <td className="p-2 border-b">{user.name}</td>
              <td className="p-2 border-b">{user.email}</td>
              <td className="p-2 border-b">{user.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          上一页
        </button>
        <span>
          页码 {currentPage} / {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          下一页
        </button>
      </div>
    </div>
  );
};

export default Rank;