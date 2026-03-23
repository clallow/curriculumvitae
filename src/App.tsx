import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* 头部 */}
      <header className="bg-white shadow-md">
        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 text-2xl font-bold">
                  张
                </div>
                <div className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                  前端开发
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">张三</h1>
                <p className="mt-1 text-lg text-gray-600">前端开发工程师</p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span>zhangsan@example.com</span>
            </div>
            <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <span>13800138000</span>
            </div>
          </div>
        </div>
      </header>

      {/* 主体内容 */}
      <main className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* 个人简介 */}
        <section className="mb-10">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 mr-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">个人简介</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
            <p className="text-gray-700 leading-relaxed">
              我是一名前端开发工程师，拥有3年的前端开发经验，熟悉 React、TypeScript、Tailwind CSS 等技术栈。
              我热爱编程，善于解决问题，具有良好的团队协作能力。
              我致力于构建高质量、用户友好的前端应用。
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">React</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">TypeScript</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Tailwind CSS</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Ant Design</span>
            </div>
          </div>
        </section>

        <div className="border-t border-gray-200 my-8"></div>

        {/* 项目经历 */}
        <section className="mb-10">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-500 mr-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">项目经历</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-medium text-gray-900">电商网站前端开发</h3>
              <p className="mt-1 text-sm text-gray-500">2023年1月 - 2023年12月</p>
              <p className="mt-3 text-gray-700">
                使用 React、TypeScript、Tailwind CSS 开发电商网站前端，实现了商品展示、购物车、订单管理等功能。
                优化了网站性能，提升了用户体验。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-medium text-gray-900">企业管理系统</h3>
              <p className="mt-1 text-sm text-gray-500">2022年1月 - 2022年12月</p>
              <p className="mt-3 text-gray-700">
                参与开发企业管理系统前端，使用 React、TypeScript、Ant Design 等技术栈，实现了用户管理、权限控制、数据统计等功能。
              </p>
            </div>
          </div>
        </section>

        <div className="border-t border-gray-200 my-8"></div>

        {/* 学历 */}
        <section className="mb-10">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-500 mr-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">学历</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
            <h3 className="text-xl font-medium text-gray-900">本科 - 计算机科学与技术</h3>
            <p className="mt-1 text-sm text-gray-500">2016年9月 - 2020年6月</p>
            <p className="mt-3 text-gray-700">
              某某大学，主修计算机科学与技术专业，成绩优异，获得优秀毕业生称号。
            </p>
          </div>
        </section>

        {/* 技能 */}
        <section className="mb-10">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 mr-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">技能</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">前端技术</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>React</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">精通</span>
                  </div>
                  <div className="flex justify-between">
                    <span>TypeScript</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">熟练</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tailwind CSS</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">熟练</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">其他技能</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Git</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">熟练</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Node.js</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs font-medium">熟悉</span>
                  </div>
                  <div className="flex justify-between">
                    <span>UI/UX设计</span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs font-medium">基础</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm font-medium hover:bg-blue-600 transition-colors mr-2">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                联系我
              </span>
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded-md text-sm font-medium hover:bg-green-600 transition-colors">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                查看项目
              </span>
            </button>
            <p className="mt-4 text-gray-500">© 2024 张三的个人简历</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;