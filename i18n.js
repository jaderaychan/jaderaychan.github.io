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
    'nav.work': '项目',
    'nav.edu': '教育背景',
    'nav.intern': '实习经历',
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
    'now.note': '最近更新：2026 年 10 月 13 日',
    'now.1t': '第七届睿远基金高校研究分析大赛',
    'now.1d': '尝试阅读三中一华的行研报告，目前还在学习阶段。',
    'now.2t': 'ARTi供应链与合作关系研究',
    'now.2d': '借助 DeepSeek Harness 的帮助，初步进行分析和研究。',
    'now.3t': '学习线性代数和概率论',
    'now.3d': '在各大平台随机阅读相关笔记，目前基础薄弱。',
    'now.4t': '三角洲行动的技术提升',
    'now.4d': '每周四到五次，最近在练习侦查位。',

    /* ---- 项目 ---- */
    'work.title': '项目',
    'work.1t': '量化交易平台',
    'work.1d': '以 Python 独立搭建量化交易平台，完成行情数据获取、策略开发与回测、模拟/实盘交易及风险控制等核心模块，'
             + '实现策略执行与数据处理流程，支持多因子选股、技术指标策略等模型的快速验证，'
             + '并通过回测指标评估收益、回撤与夏普比率，持续优化交易逻辑与仓位管理。',
    'work.1m': 'Python',
    'work.2t': '南京大学地理协会网站',
    'work.2d': '基于 Streamlit 和 HTML 搭建协会线上门户，宣传协会相关信息和资讯。',
    'work.2m': 'HTML · 团队项目',
    'work.3t': '宁讯智鉴',
    'work.3d': '城市内涝「感知—建模—验证」自主智能体。',
    'work.3m': 'Agent',
    'work.foot': '更多零散的东西在 GitHub。',

    /* ---- 教育背景 ---- */
    'edu.title': '教育背景',
    'edu.1m': '本科',
    'edu.1t': '南京大学 · 地理与海洋科学学院',
    'edu.1s': '理学学士 · 2025.9 至今',
    'edu.2m': '高中',
    'edu.2t': '江苏省阜宁中学',

    /* ---- 实习经历 ---- */
    'intern.title': '实习经历',
    'intern.1p': '2026 至今',
    'intern.1t': 'ARTi 校园大使',
    'intern.1d': '围绕 AI 辅助投研功能设计校园宣传内容，通过院系社群与新媒体渠道推广；组织 AI 投研体验与金融科技研讨活动，搭建并维护学生用户社群；收集整理学生使用反馈并同步品牌方，为产品优化与校园运营提供参考。',
    'intern.1m': 'AI 投研平台 · 德林控股',

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
    'nav.work': 'Projects',
    'nav.edu': 'Education',
    'nav.intern': 'Internships',
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
    'now.note': 'Last updated: 13 October 2026',
    'now.1t': '7th Ruiyuan Fund Inter-University Research & Analysis Competition',
    'now.1d': 'Working through sell-side equity research from the big Chinese brokers (CITIC, CICC, Huatai, CSC) — still at the learning stage.',
    'now.2t': 'ARTi: supply chain and partnership research',
    'now.2d': 'A first pass at the analysis and research, with help from DeepSeek Harness.',
    'now.3t': 'Learning linear algebra and probability',
    'now.3d': 'Reading notes here and there across various platforms; my foundations are still shaky.',
    'now.4t': 'Getting better at Delta Force',
    'now.4d': 'Four or five times a week — currently practising the recon role.',

    'work.title': 'Projects',
    'work.1t': 'Quantitative Trading Platform',
    'work.1d': 'Built a quantitative trading platform on my own in Python: market data ingestion, strategy development and backtesting, paper and live trading, and risk control. '
             + 'It also supports quick validation of multi-factor stock selection and technical-indicator strategies, and scores backtests on return, drawdown and Sharpe ratio '
             + 'so the trading logic and position sizing keep improving.',
    'work.1m': 'Python',
    'work.2t': 'Nanjing University Geography Association Website',
    'work.2d': 'Built the association\u2019s online portal with Streamlit and HTML to share its information and news.',
    'work.2m': 'HTML · team project',
    'work.3t': '宁讯智鉴',
    'work.3d': 'An autonomous agent for urban waterlogging — sensing, modelling, validation.',
    'work.3m': 'Agent',
    'work.foot': 'More scattered things on GitHub.',

    'edu.title': 'Education',
    'edu.1m': 'Undergrad',
    'edu.1t': 'Nanjing University · School of Geography and Ocean Science',
    'edu.1s': 'BSc · Sep 2025 – present',
    'edu.2m': 'High school',
    'edu.2t': 'Funing High School, Jiangsu',

    'intern.title': 'Internships',
    'intern.1p': 'Since 2026',
    'intern.1t': 'ARTi Campus Ambassador',
    'intern.1d': 'Designed campus content around ARTi\u2019s AI-assisted research features and promoted it through department groups and social channels; '
               + 'ran AI research and fintech workshop events and kept the student user community going; '
               + 'collected student feedback for the brand team to inform product and campus operations.',
    'intern.1m': 'AI investment research platform · 德林控股',

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
