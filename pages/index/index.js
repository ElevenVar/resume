// pages/index/index.js
Page({
  // 初始数据
  data: {
    width: "", //获取的容器宽度
    height: "", // 获取的容器高度
    name: "张浪",
    spell: "ZhangLang",
    job: "前端工程师",
    exp: "四年开发经验",
    tel: "18380214028",
    education: "大专",
    age: "27",
    email: "18380214028@163.com",
    address: "成都市锦江区",
    skill: [{
        name: "HTML/CSS",
        percent: 100
      },
      {
        name: "Flex/Grid页面布局",
        percent: 95
      },
      {
        name: "JavaScript",
        percent: 90
      },
      {
        name: "VUE/React/Jquery",
        percent: 96
      },
      {
        name: "小程序/APP",
        percent: 87
      },
      {
        name: "主流浏览器兼容",
        percent: 94
      }
    ],
    work: [{
        company: "顶呱呱企业服务",
        job: "项目组长",
        year: "2019/3-至今",
        desc: "参与会计记账工具项目开发，主要负责项目整体架构搭建，公用样式、公用请求、公用数据格式转换等方法的封装；前端开发任务的调配，项目进度的整体把控"
      }, {
        company: "鸿特普惠信息服务有限公司",
        job: "前端开发",
        year: "2017/7-2019/3",
        desc: "参与聚担保项目开发，主要负责项目的整体框架搭建，催收案件管理，权限管理，电催案件管理等板块的开发，协助前端伙伴处理一些棘手的问题"
      },
      {
        company: "隧唐科技股份有限公司",
        job: "前端开发",
        year: "2015/09-2017/7",
        desc: "参与甲天下项目的开发，参与项目的前期需求调研，独立完成项目的整体开发"
      },
    ],
    project: [
      {
        name: "记账工具",
        desc: "记账工具是互联网财税服务项目，融合移动互联网、大数据、等技术；现阶段主要为公司会计打造一个新型的财税服务工作方式，让会计可以轻松做账；下一步主要实现平台化，包含工具的外卖，加盟商入驻等；项目采用前后端分离架构设计；前端主要采用了VUE+ElementUI实现项目的整体架构；基于iview -- Modal封装了可以使用于每个页面的弹窗；让每个页面的操作相对独立"
      },
      {
        name: "企大宝专业公司生产",
        desc: "本系统是顶呱呱集团产业发展研究院业态下的生产消化中心，专业生产中心v1.0版本设置专业生产工作台，主要由订单、待办两大模块构成；订单：负责订单的抢单，接单及生产订单精细化管理，快速精准分配任务，实时追踪订单进度；待办：待办页面作任务列表汇总展示，任务列表清晰分类，全局任务清单式查阅；其他：企大宝现有功能模块（注册/登录、实名认证、店铺（团队）入驻、店铺（团队）管理、个人设置、通知等公共模块）；项目采用前后端分离，前端主要采用 VUE+ElementUI实现项目的整体架构；基本el-table 封装适合我们自己业务逻辑的组件（表格数据实时请求）；公用的筛选条件组件"
      },
      {
        name: "聚担保",
        desc: "项目主要是公司自己使用，公司旗下贷款案件管理，包含了：催收案件管理，权限菜单管理，委外案件管理，委外公司 等等 板块；主要方便公司人员催收贷款案件；项目采用前后端分离架构设计；前端主要采用VUE+Iview实现项目的整体架构，Less快速编译页面的细节样式布局"
      }
    ],
    morePorject:[
      {
        name:"记账工具(vue)",
        url:"https://ttools.dgg188.cn/login"
      },
      {
        name:"企大宝专业公司生产(vue)",
        url:"https://tqdb.dgg188.cn/#/loading"
      },
      {
        name: "聚担保（vue)",
        url: "http://jdmp.jdunet.com/login"
      },
      {
        name:"伍泰人员管理系统(vue)",
        url:"https://work.cninct.com/dist/#/"
      },
      {
        name: "华商理工(uni-app)",
        url: "软件下载市场直接搜索"
      },
      {
        name: "遂唐目标管理系统(小程序)",
        url:"微信小程序搜索甲天下"
      },
      {
        name:"宇众定制(Jquery ,bootstrap)",
        url:"http://www.sbsb.cn/ ",

      },
      {
        name: "海口绕城(vue)",
        url: "https://hkrct.cninct.com/html/#/login",
      },
      {
        name:"项目管家:(jquery)",
        url:"https://pm.cninct.com/pmwork/html/pmcenter/login.html"
      },
      {
        name:"智慧工地(vue)",
        url:"https://pm.cninct.com/chengle/html/fabrication/index.html#/dynamic",
      }
    ],
    introduction: "本人性格开朗、稳重、有活力，待人热情、真诚；对待工作认真负责，善于沟通、协调有较强的组织能力与团队精神；上进心强、勤于学习能不断提高自身的能力与综合素质。在未来的工作中，我将以充沛的精力，刻苦钻研的精神来努力工作，稳定地提高自己的工作能力，与企业同步发展。"
  },
  // 页面初始加载
  onShow: function() {
    var width = wx.getSystemInfoSync().windowWidth;
    var height = wx.getSystemInfoSync().windowHeight;
    this.setData({
      width: width,
      height: height
    })
  }
})