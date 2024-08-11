import{_ as s,c as i,d as e,a,b as t,o as n}from"./app-Cmr-zA4R.js";const l={},d=a("img",{id:"id_25212",src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",alt:""},null,-1),h=t(`<ul><li>首先你要有一台服务器</li><li>安装好 git</li></ul><h3 id="创建用户" tabindex="-1"><a class="header-anchor" href="#创建用户"><span>创建用户</span></a></h3><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">useradd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> git</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">passwd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> git</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建一个仓库" tabindex="-1"><a class="header-anchor" href="#创建一个仓库"><span>创建一个仓库</span></a></h3><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /var/git</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> init</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --bare</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> test.git</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>到这里请先看 <a href="#%E6%B7%BB%E5%8A%A0%E9%92%A9%E5%AD%90">添加钩子</a></p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">chown</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -R</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> git:git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> test.git/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="添加钩子" tabindex="-1"><a class="header-anchor" href="#添加钩子"><span>添加钩子</span></a></h3><p>到仓库的钩子目录下创建 <code>post-receive</code> 文件(温馨提示：使用 vim 创建该文件，否则有可能不识别该文件/(ㄒ o ㄒ)/~~)</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /var/git/test.git/.git/hooks</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">vim</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> post-receive</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输入内容 可根据自己的需要调整</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#!/bin/sh</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">echo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">================开始自动部署================</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 在 git pull 的时候提示 Not a git repository: ‘.‘ 添加这一行</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">unset</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> GIT_DIR</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">DeployPath</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/var/www/test</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> $DeployPath</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> fetch</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --all</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> reset</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --hard</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> origin/master</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 重启项目</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">echo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">================自动部署完成================</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vim 的输入方式: <code>i</code> 切换到输入模式<br> vim 的保存方式: <code>:wq</code> Enter</p><p>修改文件权限 (可运行)</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># chmod +x post-receive</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">chmod</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -R</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 755</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> post-receive</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="项目文件夹" tabindex="-1"><a class="header-anchor" href="#项目文件夹"><span>项目文件夹</span></a></h3><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /var/www/test</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> clone</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /var/git/test.git</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 运行项目</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="拉到本地" tabindex="-1"><a class="header-anchor" href="#拉到本地"><span>拉到本地</span></a></h3><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> clone</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> git@{Your</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> IP}:/var/git/test.git</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>你在 push 的时候回看到 <code>开始自动部署...</code> 等字样</p><p>如有错误，敬请指正。</p><p>参考：<a href="https://git-scm.com/book/zh/v2" target="_blank" rel="noopener noreferrer">https://git-scm.com/book/zh/v2</a></p>`,22);function p(r,c){return n(),i("div",null,[d,e(" 什么事情最麻烦，不是敲代码，不是改bug，不是讨论需求，而是部署项目，重复的操作是我们所厌烦的，今天，也来搞一下自动部署。 "),h])}const o=s(l,[["render",p],["__file","自动化部署项目至服务器.html.vue"]]),g=JSON.parse(`{"path":"/posts/%E8%87%AA%E5%8A%A8%E5%8C%96%E9%83%A8%E7%BD%B2%E9%A1%B9%E7%9B%AE%E8%87%B3%E6%9C%8D%E5%8A%A1%E5%99%A8.html","title":"自动化部署项目至服务器","lang":"zh-CN","frontmatter":{"title":"自动化部署项目至服务器","tags":["自动部署","Git"],"categories":["Git"],"copyright":true,"abbrlink":25212,"date":"2021-06-10T14:54:37.000Z","top":null,"description":"什么事情最麻烦，不是敲代码，不是改bug，不是讨论需求，而是部署项目，重复的操作是我们所厌烦的，今天，也来搞一下自动部署。 首先你要有一台服务器 安装好 git 创建用户 创建一个仓库 到这里请先看 添加钩子 添加钩子 到仓库的钩子目录下创建 post-receive 文件(温馨提示：使用 vim 创建该文件，否则有可能不识别该文件/(ㄒ o ㄒ)/~...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://blog.thlg.xyz/hut/posts/%E8%87%AA%E5%8A%A8%E5%8C%96%E9%83%A8%E7%BD%B2%E9%A1%B9%E7%9B%AE%E8%87%B3%E6%9C%8D%E5%8A%A1%E5%99%A8.html"}],["meta",{"property":"og:site_name","content":"天火流光"}],["meta",{"property":"og:title","content":"自动化部署项目至服务器"}],["meta",{"property":"og:description","content":"什么事情最麻烦，不是敲代码，不是改bug，不是讨论需求，而是部署项目，重复的操作是我们所厌烦的，今天，也来搞一下自动部署。 首先你要有一台服务器 安装好 git 创建用户 创建一个仓库 到这里请先看 添加钩子 添加钩子 到仓库的钩子目录下创建 post-receive 文件(温馨提示：使用 vim 创建该文件，否则有可能不识别该文件/(ㄒ o ㄒ)/~..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"自动部署"}],["meta",{"property":"article:tag","content":"Git"}],["meta",{"property":"article:published_time","content":"2021-06-10T14:54:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"自动化部署项目至服务器\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-06-10T14:54:37.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":3,"title":"创建用户","slug":"创建用户","link":"#创建用户","children":[]},{"level":3,"title":"创建一个仓库","slug":"创建一个仓库","link":"#创建一个仓库","children":[]},{"level":3,"title":"添加钩子","slug":"添加钩子","link":"#添加钩子","children":[]},{"level":3,"title":"项目文件夹","slug":"项目文件夹","link":"#项目文件夹","children":[]},{"level":3,"title":"拉到本地","slug":"拉到本地","link":"#拉到本地","children":[]}],"readingTime":{"minutes":1.42,"words":426},"git":{"updatedTime":null,"contributors":[]},"autoDesc":true,"filePathRelative":"_posts/自动化部署项目至服务器.md","categoryList":[{"id":"e2a2ff","sort":10000,"name":"_posts"}]}`);export{o as comp,g as data};
