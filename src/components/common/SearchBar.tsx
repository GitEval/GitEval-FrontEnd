import { get } from '@/fetch';
import { ModelUser, ResponseSearchs } from '@/type';
import { useState } from 'react';

export default function SearchBar() {
  const [nation, setNation] = useState('');
  const [domain, setDomain] = useState('');
  const [results, setResults] = useState<ModelUser[]>([]);

  const field = [
    '前端开发',
    '后端开发',
    '数据科学',
    '人工智能',
    '移动开发',
    '区块链',
    '网络安全',
    '游戏开发',
    '数据库开发',
    '云计算',
  ];

  const handleSearch = () => {
    get<ResponseSearchs>(
      '/api/v1/user/search?nation=' + nation + '&domain=' + domain + '&page=1&page_size=10',
      true,
    ).then((res) => {
      setResults(res.data.users);
    });
  };

  return (
    <div className="p-6 min-w-[25vw] mx-auto">
      <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
        {/* 国家输入框 */}
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">
            国家
          </label>
          <input
            type="text"
            id="nation"
            value={nation}
            onChange={(e) => setNation(e.target.value)}
            placeholder="请输入国家"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-black focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="field" className="block text-sm font-medium text-gray-700">
            选择领域
          </label>
          <select
            id="field"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="" disabled>
              选择一个领域
            </option>
            {field.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleSearch}
          className="w-full bg-slate-900 text-white py-2 rounded-md hover:bg-slate-500  focus:bg-slate-500"
        >
          搜索
        </button>
      </div>
      <div className="mt-6 bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">搜索结果</h3>
        {results.length > 0 ? (
          <ul className="space-y-2">
            {results.map((result, index) => (
              <li key={index} className="text-gray-700 m-auto">
                <tr key={index} className="hover:bg-gray-100">
                  <td className="p-2 border-b">
                    <img
                      src={result.avatar_url}
                      alt={result.avatar_url}
                      className="w-10 h-10 rounded-full"
                    />
                  </td>
                  <td className="p-2 border-b">{result.name}</td>
                  {/* <td className="p-2 border-b">{user.email}</td> */}
                  <td className="p-2 border-b">{result.score?.toFixed(1)}</td>
                </tr>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">暂无结果</p>
        )}
      </div>
    </div>
  );
}
