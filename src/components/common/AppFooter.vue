<template>
  <footer class="bg-gray-50 text-gray-600 pt-8 md:pt-12 pb-6">
    <div class="max-w-7xl mx-auto px-4 md:px-6">

      <!-- Mobile Layout -->
      <div class="md:hidden">
        <!-- Brand Section -->
        <div class="text-center mb-6">
          <div class="flex items-center justify-center gap-2 mb-3">
            <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">AI</div>
            <span class="text-gray-900 font-bold text-lg">AI薪引擎</span>
          </div>
          <p class="text-sm leading-relaxed text-gray-600 mb-4 px-4">抓住AI风口，迈出第一步。我们提供最专业的AI创业赋能工具与社区</p>

          <!-- Social Icons -->
          <div class="flex justify-center gap-3 mb-6">
            <a href="#" class="w-9 h-9 rounded-lg bg-green-500 hover:bg-green-600 flex items-center justify-center transition-colors">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348z"/></svg>
            </a>
            <a href="#" class="w-9 h-9 rounded-lg bg-orange-500 hover:bg-orange-600 flex items-center justify-center transition-colors">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02-.259-2.609 2.759-5.047 6.74-5.441 3.979-.394 7.413 1.404 7.671 4.018.259 2.6-2.759 5.049-6.739 5.443z"/></svg>
            </a>
            <a href="#" class="w-9 h-9 rounded-lg bg-blue-700 hover:bg-blue-800 flex items-center justify-center transition-colors">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"/></svg>
            </a>
            <a href="#" class="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 flex items-center justify-center transition-colors">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/></svg>
            </a>
          </div>
        </div>

        <!-- Links Grid - Mobile -->
        <div class="grid grid-cols-2 gap-6 mb-6">
          <!-- Left Column -->
          <div class="space-y-4">
            <!-- 关于 -->
            <div>
              <h4 class="text-gray-900 font-semibold mb-2 text-sm">关于</h4>
              <ul class="space-y-1.5 text-xs">
                <li><a href="#" class="hover:text-gray-900 transition-colors">关于我们</a></li>
                <li><a href="#" class="hover:text-gray-900 transition-colors">联系我们</a></li>
                <li><a href="#" class="hover:text-gray-900 transition-colors">加入我们</a></li>
              </ul>
            </div>

            <!-- 帮助 -->
            <div>
              <h4 class="text-gray-900 font-semibold mb-2 text-sm">帮助</h4>
              <ul class="space-y-1.5 text-xs">
                <li><a href="#" class="hover:text-gray-900 transition-colors">帮助中心</a></li>
                <li><a href="#" class="hover:text-gray-900 transition-colors">使用教程</a></li>
              </ul>
            </div>
          </div>

          <!-- Right Column -->
          <div class="space-y-4">
            <!-- 产品 -->
            <div>
              <h4 class="text-gray-900 font-semibold mb-2 text-sm">产品</h4>
              <ul class="space-y-1.5 text-xs">
                <li><a href="#" class="hover:text-gray-900 transition-colors">AI创业机会库</a></li>
                <li><a href="#" class="hover:text-gray-900 transition-colors">AI项目工作台</a></li>
                <li><a href="#" class="hover:text-gray-900 transition-colors">社区中心</a></li>
                <li><a href="#" class="hover:text-gray-900 transition-colors">定价</a></li>
              </ul>
            </div>

            <!-- 法律 -->
            <div>
              <h4 class="text-gray-900 font-semibold mb-2 text-sm">法律</h4>
              <ul class="space-y-1.5 text-xs">
                <li><a href="#" class="hover:text-gray-900 transition-colors">服务条款</a></li>
                <li><a href="#" class="hover:text-gray-900 transition-colors">隐私政策</a></li>
                <li><a href="#" class="hover:text-gray-900 transition-colors">社区规则</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Desktop Layout -->
      <div class="hidden md:block">
        <div class="grid grid-cols-5 gap-8 mb-10">
          <!-- Brand -->
          <div>
            <div class="flex items-center gap-2 mb-3">
              <div class="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">AI</div>
              <span class="text-gray-900 font-bold text-lg">AI薪引擎</span>
            </div>
            <p class="text-sm leading-relaxed mb-4">抓住AI风口，迈出第一步。我们提供最专业的AI创业赋能工具与社区</p>
            <div class="flex gap-2">
              <a href="#" class="w-8 h-8 rounded-lg bg-green-500 hover:bg-green-600 flex items-center justify-center transition-colors">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348z"/></svg>
              </a>
              <a href="#" class="w-8 h-8 rounded-lg bg-orange-500 hover:bg-orange-600 flex items-center justify-center transition-colors">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02-.259-2.609 2.759-5.047 6.74-5.441 3.979-.394 7.413 1.404 7.671 4.018.259 2.6-2.759 5.049-6.739 5.443z"/></svg>
              </a>
              <a href="#" class="w-8 h-8 rounded-lg bg-blue-700 hover:bg-blue-800 flex items-center justify-center transition-colors">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"/></svg>
              </a>
              <a href="#" class="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 flex items-center justify-center transition-colors">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/></svg>
              </a>
            </div>
          </div>

          <!-- 关于 -->
          <div>
            <h4 class="text-gray-900 font-semibold mb-3 text-sm">关于</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="#" class="hover:text-gray-900 transition-colors">关于我们</a></li>
              <li><a href="#" class="hover:text-gray-900 transition-colors">联系我们</a></li>
              <li><a href="#" class="hover:text-gray-900 transition-colors">加入我们</a></li>
            </ul>
          </div>

          <!-- 产品 -->
          <div>
            <h4 class="text-gray-900 font-semibold mb-3 text-sm">产品</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="#" class="hover:text-gray-900 transition-colors">AI创业机会库</a></li>
              <li><a href="#" class="hover:text-gray-900 transition-colors">AI项目工作台</a></li>
              <li><a href="#" class="hover:text-gray-900 transition-colors">社区中心</a></li>
              <li><a href="#" class="hover:text-gray-900 transition-colors">定价</a></li>
            </ul>
          </div>

          <!-- 帮助 -->
          <div>
            <h4 class="text-gray-900 font-semibold mb-3 text-sm">帮助</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="#" class="hover:text-gray-900 transition-colors">帮助中心</a></li>
              <li><a href="#" class="hover:text-gray-900 transition-colors">使用教程</a></li>
            </ul>
          </div>

          <!-- 法律 -->
          <div>
            <h4 class="text-gray-900 font-semibold mb-3 text-sm">法律</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="#" class="hover:text-gray-900 transition-colors">服务条款</a></li>
              <li><a href="#" class="hover:text-gray-900 transition-colors">隐私政策</a></li>
              <li><a href="#" class="hover:text-gray-900 transition-colors">社区规则</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-200 pt-4 md:pt-6 text-center text-xs md:text-sm text-gray-500">
        <p>© 2025 AI薪引擎. 保留所有权利. | ICP备案号：京ICP备16415621号</p>
      </div>
    </div>
  </footer>
</template>