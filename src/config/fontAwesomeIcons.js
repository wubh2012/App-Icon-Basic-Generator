import {
  faCalendar,
  faHome,
  faBell,
  faCog,
  faShoppingCart,
  faImage,
  faVideo,
  faArrowRight,
  faArrowLeft,
  faArrowUp,
  faArrowDown,
  faFolder,
  faFile,
  faEnvelope,
  faComment,
  faUser,
  faHeart,
  faStar,
  faSearch,
  faDownload,
  faUpload,
  faTrash,
  faEdit,
  faCheck,
  faTimes,
  faPlus,
  faMinus,
  faChevronRight,
  faChevronLeft,
  faChevronUp,
  faChevronDown,
  faBars,
  faEllipsisV,
  faPlay,
  faPause,
  faStop,
  faPhone,
  faMapMarker,
  faBook,
  faBookmark,
  faTag,
  faTags,
  faGlobe,
  faWifi,
  faBattery,
  faPrint,
  faCopy,
  faCut,
  faPaste,
  faUndo,
  faRedo,
  faSave,
  faShare,
  faLock,
  faUnlock,
  faEye,
  faEyeSlash,
  faRefresh,
  faSync,
  faCloud,
  faCloudUpload,
  faCloudDownload,
  faDatabase,
  faServer,
  faDesktop,
  faLaptop,
  faMobile,
  faTablet,
  faKeyboard,
  faMouse,
  faHeadphones,
  faMicrophone,
  faCamera,
  faBolt,
  faFire,
  faSnowflake,
  faSun,
  faMoon,
  faUmbrella,
  faCoffee,
  faBirthdayCake,
  faGift,
  faTrophy,
  faMedal,
  faCrown,
  faRocket
} from '@fortawesome/free-solid-svg-icons';

import {
  faGithub,
  faTwitter,
  faFacebook,
  faLinkedin,
  faInstagram,
  faYoutube,
  faGoogle,
  faApple,
  faMicrosoft,
  faAmazon,
  faSpotify,
  faSlack,
  faDiscord,
  faTwitch
} from '@fortawesome/free-brands-svg-icons';

export const ICON_CATEGORIES = [
  {
    name: 'UI 界面',
    key: 'ui',
    icons: [
      { iconDef: faCalendar, name: '日历', iconName: 'calendar', keywords: ['日历','日程','calendar'] },
      { iconDef: faHome, name: '首页', iconName: 'home', keywords: ['home', 'start', '首页', '主页'] },
      { iconDef: faBell, name: '通知', iconName: 'bell', keywords: ['notice','alert', '通知', '铃铛'] },
      { iconDef: faCog, name: '设置', iconName: 'cog', keywords: ['settings', '设置', '齿轮'] },
      { iconDef: faUser, name: '用户', iconName: 'user', keywords: ['user', '用户', '账号'] },
      { iconDef: faSearch, name: '搜索', iconName: 'search', keywords: ['search', '搜索', '查找'] },
      { iconDef: faBars, name: '菜单', iconName: 'bars', keywords: ['menu', '菜单', '汉堡'] },
      { iconDef: faEllipsisV, name: '更多', iconName: 'ellipsis-v', keywords: ['more', '更多', '三点'] },
      { iconDef: faHeart, name: '喜欢', iconName: 'heart', keywords: ['heart', '喜欢', '爱心', '收藏'] },
      { iconDef: faStar, name: '星标', iconName: 'star', keywords: ['star', '星标', '收藏', '标记'] }
    ]
  },
  {
    name: '操作按钮',
    key: 'actions',
    icons: [
      { iconDef: faPlus, name: '添加', iconName: 'plus', keywords: ['add', 'plus', '添加', '新建'] },
      { iconDef: faMinus, name: '减少', iconName: 'minus', keywords: ['minus', '减少', '删除'] },
      { iconDef: faEdit, name: '编辑', iconName: 'edit', keywords: ['edit', '编辑', '修改'] },
      { iconDef: faTrash, name: '删除', iconName: 'trash', keywords: ['delete', 'trash', '删除', '垃圾桶'] },
      { iconDef: faCheck, name: '确认', iconName: 'check', keywords: ['check', '确认', '勾选', '完成'] },
      { iconDef: faTimes, name: '关闭', iconName: 'times', keywords: ['close', 'times', '关闭', '取消'] },
      { iconDef: faSave, name: '保存', iconName: 'save', keywords: ['save', '保存', '存储'] },
      { iconDef: faShare, name: '分享', iconName: 'share', keywords: ['share', '分享', '共享'] },
      { iconDef: faDownload, name: '下载', iconName: 'download', keywords: ['download', '下载'] },
      { iconDef: faUpload, name: '上传', iconName: 'upload', keywords: ['upload', '上传'] },
      { iconDef: faCopy, name: '复制', iconName: 'copy', keywords: ['copy', '复制'] },
      { iconDef: faCut, name: '剪切', iconName: 'cut', keywords: ['cut', '剪切'] },
      { iconDef: faPaste, name: '粘贴', iconName: 'paste', keywords: ['paste', '粘贴'] },
      { iconDef: faUndo, name: '撤销', iconName: 'undo', keywords: ['undo', '撤销', '返回'] },
      { iconDef: faRedo, name: '重做', iconName: 'redo', keywords: ['redo', '重做', '前进'] },
      { iconDef: faRefresh, name: '刷新', iconName: 'refresh', keywords: ['refresh', '刷新', '重载'] },
      { iconDef: faSync, name: '同步', iconName: 'sync', keywords: ['sync', '同步'] }
    ]
  },
  {
    name: '商业',
    key: 'business',
    icons: [
      { iconDef: faShoppingCart, name: '购物车', iconName: 'shopping-cart', keywords: ['shop','cart', '购物', '购物车'] },
      { iconDef: faTag, name: '标签', iconName: 'tag', keywords: ['tag', '标签', '价格'] },
      { iconDef: faTags, name: '多标签', iconName: 'tags', keywords: ['tags', '标签', '分类'] },
      { iconDef: faGift, name: '礼物', iconName: 'gift', keywords: ['gift', '礼物', '奖励'] },
      { iconDef: faTrophy, name: '奖杯', iconName: 'trophy', keywords: ['trophy', '奖杯', '成就'] },
      { iconDef: faMedal, name: '奖牌', iconName: 'medal', keywords: ['medal', '奖牌', '荣誉'] },
      { iconDef: faCrown, name: '皇冠', iconName: 'crown', keywords: ['crown', '皇冠', 'VIP'] }
    ]
  },
  {
    name: '媒体',
    key: 'media',
    icons: [
      { iconDef: faImage, name: '图片', iconName: 'image', keywords: ['image','gallery', '图片', '相册'] },
      { iconDef: faVideo, name: '视频', iconName: 'video', keywords: ['video','film', '视频', '电影'] },
      { iconDef: faCamera, name: '相机', iconName: 'camera', keywords: ['camera', '相机', '拍照'] },
      { iconDef: faPlay, name: '播放', iconName: 'play', keywords: ['play', '播放'] },
      { iconDef: faPause, name: '暂停', iconName: 'pause', keywords: ['pause', '暂停'] },
      { iconDef: faStop, name: '停止', iconName: 'stop', keywords: ['stop', '停止'] },
      { iconDef: faHeadphones, name: '耳机', iconName: 'headphones', keywords: ['headphones', '耳机', '音乐'] },
      { iconDef: faMicrophone, name: '麦克风', iconName: 'microphone', keywords: ['microphone', '麦克风', '语音'] }
    ]
  },
  {
    name: '箭头',
    key: 'arrows',
    icons: [
      { iconDef: faArrowRight, name: '右箭头', iconName: 'arrow-right', keywords: ['arrow','right', '箭头', '右'] },
      { iconDef: faArrowLeft, name: '左箭头', iconName: 'arrow-left', keywords: ['arrow','left', '箭头', '左'] },
      { iconDef: faArrowUp, name: '上箭头', iconName: 'arrow-up', keywords: ['arrow','up', '箭头', '上'] },
      { iconDef: faArrowDown, name: '下箭头', iconName: 'arrow-down', keywords: ['arrow','down', '箭头', '下'] },
      { iconDef: faChevronRight, name: '右尖角', iconName: 'chevron-right', keywords: ['chevron','right', '尖角', '右'] },
      { iconDef: faChevronLeft, name: '左尖角', iconName: 'chevron-left', keywords: ['chevron','left', '尖角', '左'] },
      { iconDef: faChevronUp, name: '上尖角', iconName: 'chevron-up', keywords: ['chevron','up', '尖角', '上'] },
      { iconDef: faChevronDown, name: '下尖角', iconName: 'chevron-down', keywords: ['chevron','down', '尖角', '下'] }
    ]
  },
  {
    name: '文件',
    key: 'files',
    icons: [
      { iconDef: faFolder, name: '文件夹', iconName: 'folder', keywords: ['file','folder', '文件夹', '目录'] },
      { iconDef: faFile, name: '文件', iconName: 'file', keywords: ['doc','document', '文件', '文档'] },
      { iconDef: faBook, name: '书籍', iconName: 'book', keywords: ['book', '书籍', '图书'] },
      { iconDef: faBookmark, name: '书签', iconName: 'bookmark', keywords: ['bookmark', '书签', '标记'] }
    ]
  },
  {
    name: '社交品牌',
    key: 'social',
    icons: [
      { iconDef: faGithub, name: 'GitHub', iconName: 'github', keywords: ['code','git','github'] },
      { iconDef: faTwitter, name: 'Twitter', iconName: 'twitter', keywords: ['social','twitter', 'X'] },
      { iconDef: faFacebook, name: 'Facebook', iconName: 'facebook', keywords: ['social','facebook'] },
      { iconDef: faLinkedin, name: 'LinkedIn', iconName: 'linkedin', keywords: ['social','linkedin', '领英'] },
      { iconDef: faInstagram, name: 'Instagram', iconName: 'instagram', keywords: ['social','instagram'] },
      { iconDef: faYoutube, name: 'YouTube', iconName: 'youtube', keywords: ['video','youtube'] },
      { iconDef: faGoogle, name: 'Google', iconName: 'google', keywords: ['google', '谷歌'] },
      { iconDef: faApple, name: 'Apple', iconName: 'apple', keywords: ['apple', '苹果'] },
      { iconDef: faMicrosoft, name: 'Microsoft', iconName: 'microsoft', keywords: ['microsoft', '微软'] },
      { iconDef: faAmazon, name: 'Amazon', iconName: 'amazon', keywords: ['amazon', '亚马逊'] },
      { iconDef: faSpotify, name: 'Spotify', iconName: 'spotify', keywords: ['music','spotify'] },
      { iconDef: faSlack, name: 'Slack', iconName: 'slack', keywords: ['chat','slack'] },
      { iconDef: faDiscord, name: 'Discord', iconName: 'discord', keywords: ['chat','discord'] },
      { iconDef: faTwitch, name: 'Twitch', iconName: 'twitch', keywords: ['stream','twitch'] }
    ]
  },
  {
    name: '通信',
    key: 'communications',
    icons: [
      { iconDef: faEnvelope, name: '邮件', iconName: 'envelope', keywords: ['email','mail', '邮件', '信封'] },
      { iconDef: faComment, name: '评论', iconName: 'comment', keywords: ['message','chat', '评论', '对话'] },
      { iconDef: faPhone, name: '电话', iconName: 'phone', keywords: ['phone', '电话', '通话'] }
    ]
  },
  {
    name: '设备',
    key: 'devices',
    icons: [
      { iconDef: faDesktop, name: '桌面', iconName: 'desktop', keywords: ['desktop', '桌面', '电脑'] },
      { iconDef: faLaptop, name: '笔记本', iconName: 'laptop', keywords: ['laptop', '笔记本', '电脑'] },
      { iconDef: faMobile, name: '手机', iconName: 'mobile', keywords: ['mobile', '手机', '移动'] },
      { iconDef: faTablet, name: '平板', iconName: 'tablet', keywords: ['tablet', '平板'] },
      { iconDef: faKeyboard, name: '键盘', iconName: 'keyboard', keywords: ['keyboard', '键盘'] },
      { iconDef: faMouse, name: '鼠标', iconName: 'mouse', keywords: ['mouse', '鼠标'] }
    ]
  },
  {
    name: '网络技术',
    key: 'tech',
    icons: [
      { iconDef: faGlobe, name: '地球', iconName: 'globe', keywords: ['globe', '地球', '网络', '国际'] },
      { iconDef: faWifi, name: 'WiFi', iconName: 'wifi', keywords: ['wifi', '无线', '网络'] },
      { iconDef: faCloud, name: '云', iconName: 'cloud', keywords: ['cloud', '云', '云端'] },
      { iconDef: faCloudUpload, name: '云上传', iconName: 'cloud-upload', keywords: ['cloud', 'upload', '云上传'] },
      { iconDef: faCloudDownload, name: '云下载', iconName: 'cloud-download', keywords: ['cloud', 'download', '云下载'] },
      { iconDef: faDatabase, name: '数据库', iconName: 'database', keywords: ['database', '数据库', '存储'] },
      { iconDef: faServer, name: '服务器', iconName: 'server', keywords: ['server', '服务器'] },
      { iconDef: faLock, name: '锁定', iconName: 'lock', keywords: ['lock', '锁定', '安全'] },
      { iconDef: faUnlock, name: '解锁', iconName: 'unlock', keywords: ['unlock', '解锁'] },
      { iconDef: faEye, name: '可见', iconName: 'eye', keywords: ['eye', '可见', '查看'] },
      { iconDef: faEyeSlash, name: '隐藏', iconName: 'eye-slash', keywords: ['hide', '隐藏'] }
    ]
  },
  {
    name: '其他',
    key: 'misc',
    icons: [
      { iconDef: faBattery, name: '电池', iconName: 'battery', keywords: ['battery', '电池', '电量'] },
      { iconDef: faPrint, name: '打印', iconName: 'print', keywords: ['print', '打印'] },
      { iconDef: faMapMarker, name: '位置', iconName: 'map-marker', keywords: ['location', 'map', '位置', '地图'] },
      { iconDef: faBolt, name: '闪电', iconName: 'bolt', keywords: ['bolt', '闪电', '快速'] },
      { iconDef: faFire, name: '火焰', iconName: 'fire', keywords: ['fire', '火焰', '热门'] },
      { iconDef: faSnowflake, name: '雪花', iconName: 'snowflake', keywords: ['snow', '雪花', '冬天'] },
      { iconDef: faSun, name: '太阳', iconName: 'sun', keywords: ['sun', '太阳', '白天'] },
      { iconDef: faMoon, name: '月亮', iconName: 'moon', keywords: ['moon', '月亮', '夜晚'] },
      { iconDef: faUmbrella, name: '雨伞', iconName: 'umbrella', keywords: ['umbrella', '雨伞', '雨天'] },
      { iconDef: faCoffee, name: '咖啡', iconName: 'coffee', keywords: ['coffee', '咖啡', '饮品'] },
      { iconDef: faBirthdayCake, name: '蛋糕', iconName: 'birthday-cake', keywords: ['cake', '蛋糕', '生日'] },
      { iconDef: faRocket, name: '火箭', iconName: 'rocket', keywords: ['rocket', '火箭', '发射'] }
    ]
  }
];
