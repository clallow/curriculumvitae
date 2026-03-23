import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 头部 */}
      <header className="bg-white shadow">
        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">张三</h1>
          <p className="mt-2 text-lg text-gray-600">前端开发工程师</p>
          <div className="mt-4 flex space-x-4">
            <span className="text-gray-500">邮箱: zhangsan@example.com</span>
            <span className="text-gray-500">电话: 13800138000</span>
          </div>
        </div>
      </header>

      {/* 主体内容 */}
      <main className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* 个人简介 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">个人简介</h2>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-700 leading-relaxed">
              我是一名前端开发工程师，拥有3年的前端开发经验，熟悉 React、TypeScript、Tailwind CSS 等技术栈。
              我热爱编程，善于解决问题，具有良好的团队协作能力。
              我致力于构建高质量、用户友好的前端应用。
            </p>
          </div>
        </section>

        {/* 项目经历 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">项目经历</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-medium text-gray-900">电商网站前端开发</h3>
              <p className="mt-1 text-sm text-gray-500">2023年1月 - 2023年12月</p>
              <p className="mt-3 text-gray-700">
                使用 React、TypeScript、Tailwind CSS 开发电商网站前端，实现了商品展示、购物车、订单管理等功能。
                优化了网站性能，提升了用户体验。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-medium text-gray-900">企业管理系统</h3>
              <p className="mt-1 text-sm text-gray-500">2022年1月 - 2022年12月</p>
              <p className="mt-3 text-gray-700">
                参与开发企业管理系统前端，使用 React、TypeScript、Ant Design 等技术栈，实现了用户管理、权限控制、数据统计等功能。
              </p>
            </div>
          </div>
        </section>

        {/* 学历 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">学历</h2>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-medium text-gray-900">本科 - 计算机科学与技术</h3>
            <p className="mt-1 text-sm text-gray-500">2016年9月 - 2020年6月</p>
            <p className="mt-3 text-gray-700">
              某某大学，主修计算机科学与技术专业，成绩优异，获得优秀毕业生称号。
            </p>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">© 2024 张三的个人简历</p>
        </div>
      </footer>
    </div>
  );
};

export default App;