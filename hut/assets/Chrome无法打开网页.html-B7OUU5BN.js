import{_ as e,c as t,o,b as a}from"./app-Cmr-zA4R.js";const r={},s=a('<p>今天突然 Chrome 打不开任何网页，而其他浏览器依旧可以打开，这种体验非常不好 ......</p><p>首先当前环境如下</p><ul><li>没有使用代理</li><li>电脑可以联网</li></ul><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h2><p>简单粗暴 重置网络</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>netsh winsock reset</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>之后重启开机后，已经可以打开网页了</p>',7),i=[s];function n(c,l){return o(),t("div",null,i)}const p=e(r,[["render",n],["__file","Chrome无法打开网页.html.vue"]]),d=JSON.parse(`{"path":"/posts/Chrome%E6%97%A0%E6%B3%95%E6%89%93%E5%BC%80%E7%BD%91%E9%A1%B5.html","title":"Chrome无法打开网页","lang":"zh-CN","frontmatter":{"title":"Chrome无法打开网页","tags":["chrome"],"categories":["Net"],"copyright":true,"abbrlink":17786,"date":"2021-04-02T09:51:49.000Z","top":null,"description":"今天突然 Chrome 打不开任何网页，而其他浏览器依旧可以打开，这种体验非常不好 ...... 首先当前环境如下 没有使用代理 电脑可以联网 解决方案 简单粗暴 重置网络 之后重启开机后，已经可以打开网页了","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://blog.thlg.xyz/hut/posts/Chrome%E6%97%A0%E6%B3%95%E6%89%93%E5%BC%80%E7%BD%91%E9%A1%B5.html"}],["meta",{"property":"og:site_name","content":"天火流光"}],["meta",{"property":"og:title","content":"Chrome无法打开网页"}],["meta",{"property":"og:description","content":"今天突然 Chrome 打不开任何网页，而其他浏览器依旧可以打开，这种体验非常不好 ...... 首先当前环境如下 没有使用代理 电脑可以联网 解决方案 简单粗暴 重置网络 之后重启开机后，已经可以打开网页了"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"chrome"}],["meta",{"property":"article:published_time","content":"2021-04-02T09:51:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Chrome无法打开网页\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-04-02T09:51:49.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[]}],"readingTime":{"minutes":0.36,"words":109},"git":{"updatedTime":null,"contributors":[]},"autoDesc":true,"filePathRelative":"_posts/Chrome无法打开网页.md","categoryList":[{"id":"e2a2ff","sort":10000,"name":"_posts"}]}`);export{p as comp,d as data};
