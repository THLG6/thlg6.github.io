// build time:Tue Oct 24 2023 22:48:27 GMT+0800 (China Standard Time)
$(document).ready(function(){$(document).trigger("bootstrap:before");NexT.utils.isMobile()&&window.FastClick.attach(document.body);NexT.utils.lazyLoadPostsImages();NexT.utils.registerESCKeyEvent();NexT.utils.registerBackToTop();$(".site-nav-toggle button").on("click",function(){var $siteNav=$(".site-nav");var ON_CLASS_NAME="site-nav-on";var isSiteNavOn=$siteNav.hasClass(ON_CLASS_NAME);var animateAction=isSiteNavOn?"slideUp":"slideDown";var animateCallback=isSiteNavOn?"removeClass":"addClass";$siteNav.stop()[animateAction]("fast",function(){$siteNav[animateCallback](ON_CLASS_NAME)})});CONFIG.fancybox&&NexT.utils.wrapImageWithFancyBox();CONFIG.tabs&&NexT.utils.registerTabsTag();NexT.utils.embeddedVideoTransformer();NexT.utils.addActiveClassToMenuItem();NexT.motion.integrator.add(NexT.motion.middleWares.logo).add(NexT.motion.middleWares.menu).add(NexT.motion.middleWares.postList).add(NexT.motion.middleWares.sidebar);$(document).trigger("motion:before");CONFIG.motion.enable&&NexT.motion.integrator.bootstrap();$(document).trigger("bootstrap:after")});
//rebuild by neat 