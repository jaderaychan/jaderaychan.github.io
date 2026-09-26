/* ==========================================================================
   中英双语词条
   用法：HTML 里写 data-i18n="键名"，元素文字会被替换成对应语言的内容。
   要改文案 → 只改本文件；中文加一条，一定要给英文也加同名的键。
   检查两边是否齐全：node i18n-check.js
   ========================================================================== */
window.I18N = {
  zh: {
    /* ---- 页面元信息 ---- */
    'meta.title': '陈琪睿（Jaderay Chan）',
    'meta.desc': '陈琪睿（Jaderay Chan）的个人主页。',

    /* ---- 顶栏 ---- */
    'nav.about': '关于',
    'nav.now': '在做的事',
    'nav.work': '作品',
    'nav.journey': '经历',
    'nav.writing': '写作',
    'nav.contact': '联系',
    'ui.theme': '切换深色 / 浅色',
    'ui.menu': '打开菜单',
    'ui.skip': '跳到正文',

    /* ---- 首屏 ---- */
    'hero.name': '陈琪睿（Jaderay Chan）',
    'hero.role': '南京大学地理与海洋科学学院',
    'hero.place': '地理信息科学（辅修金融工程）',
    'hero.bio1': '爱好文学艺术，经济金融，时事政治，',
    'hero.bio2': '思考是生命最大的意义。',
    'hero.cta': '给我写邮件',
    'hero.portraitAlt': '陈琪睿的照片',
    'hero.focusTitle': '最近在关注',
    'hero.focus1': '金融科技与量化交易',
    'hero.focus2': '二级市场与行业研究',
    'hero.focus3': '诗词文学和历史政治',
    'hero.focus4': '钢琴艺术和人类心灵',


    /* ---- 在做的事 ---- */
    'now.title': '在做的事',
    'now.note': '最近更新：2025 年 6 月',
    'now.1t': '习惯记录小工具',
    'now.1d': '自己用，也陆续有朋友在用。目前在改记录和统计的部分。',
    'now.2t': '补设计基础',
    'now.2d': '在读《写给大家看的设计书》，同时在临摹一些喜欢的网站排版。',
    'now.3t': '写技术笔记',
    'now.3d': '把踩过的坑记下来，一部分整理后发在博客上。',
    'now.4t': '跑步',
    'now.4d': '每周三次，最近在准备第一次半马。',

    /* ---- 作品 ---- */
    'work.title': '作品',
    'work.1t': '习惯记录',
    'work.1d': '一个记录每日习惯的小工具，重点是「打开就能记，不用思考」。目前有几十位朋友在用。',
    'work.1m': '小程序',
    'work.2t': '校园二手',
    'work.2d': '和三位同学一起做的校园二手交易网站。我负责前端，也参与了最初的原型讨论——最后砍掉了三分之二的功能，才变得好用。',
    'work.2m': '网站 · 团队项目',
    'work.3t': '数据看板',
    'work.3d': '把实验室手工整理的表格做成实时看板，让数据在采集后一秒内就能看到。',
    'work.3m': '内部工具',
    'work.foot': '更多零散的东西在 GitHub。',

    /* ---- 经历 ---- */
    'journey.title': '经历',
    'journey.1': '做一个习惯记录工具，边用边改',
    'journey.2': '在某某科技实习，参与内部后台的开发',
    'journey.3': '和同学一起做校园二手交易网站',
    'journey.4': '加入计算机协会，开始给新同学讲前端入门',
    'journey.5': '进入大学，读计算机科学与技术',

    /* ---- 写作 ---- */
    'writing.title': '写作',
    'writing.1': '为什么我把项目的功能砍掉了三分之二',
    'writing.2': '从零做一个数据看板，我踩过的排版坑',
    'writing.3': '写给刚开始学前端时的自己',

    /* ---- 联系 ---- */
    'contact.title': '联系',
    'contact.lead': '想聊聊、有合作想法，或者只是打个招呼，都可以找我。',
    'contact.lead2': '欢迎各位与我一起探索世界与自我。',
    'contact.email': '邮箱',
    'contact.wechat': '微信公众号',
    'contact.wechatName': '明栖集',

    /* ---- 页脚 ---- */
    'footer.text': '© 2025 陈琪睿（Jaderay Chan）'
  },

  en: {
    'meta.title': '陈琪睿（Jaderay Chan）',
    'meta.desc': 'Personal homepage of 陈琪睿（Jaderay Chan）.',

    'nav.about': 'About',
    'nav.now': 'Now',
    'nav.work': 'Work',
    'nav.journey': 'Timeline',
    'nav.writing': 'Writing',
    'nav.contact': 'Contact',
    'ui.theme': 'Toggle dark / light mode',
    'ui.menu': 'Open menu',
    'ui.skip': 'Skip to content',

    'hero.name': '陈琪睿（Jaderay Chan）',
    'hero.role': 'School of Geography and Ocean Science, Nanjing University',
    'hero.place': 'Major in GIS (Minor in FE)',
    'hero.bio1': 'Literature and art, economics and finance, current affairs and politics.',
    'hero.bio2': 'Thinking is the greatest meaning of life.',
    'hero.cta': 'Email me',
    'hero.portraitAlt': 'Portrait of 陈琪睿（Jaderay Chan）',
    'hero.focusTitle': 'Currently thinking about',
    'hero.focus1': 'Fintech and quantitative trading',
    'hero.focus2': 'Secondary markets and industry research',
    'hero.focus3': 'Poetry, literature, history and politics',
    'hero.focus4': 'Piano, and the human soul',

    'now.title': 'What I am doing',
    'now.note': 'Last updated: June 2025',
    'now.1t': 'A habit-tracking tool',
    'now.1d': 'I use it myself, and a few friends have picked it up. Currently reworking the logging and stats.',
    'now.2t': 'Learning design fundamentals',
    'now.2d': 'Reading The Non-Designer\u2019s Design Book and copying layouts I like.',
    'now.3t': 'Writing technical notes',
    'now.3d': 'I keep a record of problems I run into, and publish some of them on my blog.',
    'now.4t': 'Running',
    'now.4d': 'Three times a week. Training for my first half marathon.',

    'work.title': 'Work',
    'work.1t': 'Habit Tracker',
    'work.1d': 'A small tool for logging daily habits. The whole point is that you can open it and log something without thinking. A few dozen friends use it.',
    'work.1m': 'Mini program',
    'work.2t': 'Campus Marketplace',
    'work.2d': 'A second-hand marketplace for our campus, built with three classmates. I did the front end and took part in the early prototyping — we cut two thirds of the features before it actually became usable.',
    'work.2m': 'Website · team project',
    'work.3t': 'Data Dashboard',
    'work.3d': 'Turned a lab spreadsheet maintained by hand into a live dashboard, so readings show up within a second of being collected.',
    'work.3m': 'Internal tool',
    'work.foot': 'More scattered things on GitHub.',

    'journey.title': 'Timeline',
    'journey.1': 'Building a habit tracker, using it and changing it as I go',
    'journey.2': 'Interned at Some Tech, working on an internal admin panel',
    'journey.3': 'Built a campus marketplace with classmates',
    'journey.4': 'Joined the computing club and started teaching front-end basics',
    'journey.5': 'Started university, computer science',

    'writing.title': 'Writing',
    'writing.1': 'Why I cut two thirds of my project\u2019s features',
    'writing.2': 'Building a dashboard from scratch: the layout problems I hit',
    'writing.3': 'To myself when I was starting out in front end',

    'contact.title': 'Contact',
    'contact.lead': 'Happy to talk, collaborate, or just say hello.',
    'contact.lead2': 'You are all welcome to explore the world and the self with me.',
    'contact.email': 'Email',
    'contact.wechat': 'WeChat Official Account',
    'contact.wechatName': '明栖集',

    'footer.text': '© 2025 陈琪睿（Jaderay Chan）'
  }
};
