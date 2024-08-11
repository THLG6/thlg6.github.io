import{_ as e,c as t,o as a,b as s}from"./app-Cmr-zA4R.js";const n={},i=s(`<p>linux 入门笔记 记录操作过程</p><h1 id="安装-node" tabindex="-1"><a class="header-anchor" href="#安装-node"><span>安装 node</span></a></h1><h2 id="下载安装包" tabindex="-1"><a class="header-anchor" href="#下载安装包"><span>下载安装包</span></a></h2><p><a href="https://nodejs.org/zh-cn/download/" target="_blank" rel="noopener noreferrer">Node 官网下载地址</a></p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>wegt https://nodejs.org/dist/v14.16.0/node-v14.16.0-linux-x64.tar.xz</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>或者把安装包下载到本地 再上传到服务器</p><h2 id="解压安装包" tabindex="-1"><a class="header-anchor" href="#解压安装包"><span>解压安装包</span></a></h2><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>tar -xvf node-v14.16.0-linux-x64.tar.xz</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="重命名安装目录" tabindex="-1"><a class="header-anchor" href="#重命名安装目录"><span>重命名安装目录</span></a></h2><p>将解压文件移动到你想要安装的文件夹下</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>mv node-v14.16.0-linux-x64/  /usr/local/node</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="配置环境变量" tabindex="-1"><a class="header-anchor" href="#配置环境变量"><span>配置环境变量</span></a></h2><p>此处为解压文件 node 的 bin 文件夹路径</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>echo &quot;export PATH=$PATH:/usr/local/node/bin&quot; &gt;&gt; /etc/profile</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>使环境变量生效</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>source /etc/profile</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="检查安装结果" tabindex="-1"><a class="header-anchor" href="#检查安装结果"><span>检查安装结果</span></a></h2><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>node -v</span></span>
<span class="line"><span>npm -v</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>未完 ......</p>`,19),l=[i];function d(o,r){return a(),t("div",null,l)}const p=e(n,[["render",d],["__file","Linux笔记.html.vue"]]),u=JSON.parse(`{"path":"/posts/Linux%E7%AC%94%E8%AE%B0.html","title":"Linux笔记","lang":"zh-CN","frontmatter":{"title":"Linux笔记","tags":["笔记","linux"],"categories":["linux"],"copyright":true,"top":null,"abbrlink":24884,"date":"2021-03-22T11:01:16.000Z","description":"linux 入门笔记 记录操作过程 安装 node 下载安装包 Node 官网下载地址 或者把安装包下载到本地 再上传到服务器 解压安装包 重命名安装目录 将解压文件移动到你想要安装的文件夹下 配置环境变量 此处为解压文件 node 的 bin 文件夹路径 使环境变量生效 检查安装结果 未完 ......","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://blog.thlg.xyz/hut/posts/Linux%E7%AC%94%E8%AE%B0.html"}],["meta",{"property":"og:site_name","content":"天火流光"}],["meta",{"property":"og:title","content":"Linux笔记"}],["meta",{"property":"og:description","content":"linux 入门笔记 记录操作过程 安装 node 下载安装包 Node 官网下载地址 或者把安装包下载到本地 再上传到服务器 解压安装包 重命名安装目录 将解压文件移动到你想要安装的文件夹下 配置环境变量 此处为解压文件 node 的 bin 文件夹路径 使环境变量生效 检查安装结果 未完 ......"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"笔记"}],["meta",{"property":"article:tag","content":"linux"}],["meta",{"property":"article:published_time","content":"2021-03-22T11:01:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux笔记\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-03-22T11:01:16.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"下载安装包","slug":"下载安装包","link":"#下载安装包","children":[]},{"level":2,"title":"解压安装包","slug":"解压安装包","link":"#解压安装包","children":[]},{"level":2,"title":"重命名安装目录","slug":"重命名安装目录","link":"#重命名安装目录","children":[]},{"level":2,"title":"配置环境变量","slug":"配置环境变量","link":"#配置环境变量","children":[]},{"level":2,"title":"检查安装结果","slug":"检查安装结果","link":"#检查安装结果","children":[]}],"readingTime":{"minutes":0.56,"words":167},"git":{"updatedTime":null,"contributors":[]},"autoDesc":true,"filePathRelative":"_posts/Linux笔记.md","categoryList":[{"id":"e2a2ff","sort":10000,"name":"_posts"}]}`);export{p as comp,u as data};
