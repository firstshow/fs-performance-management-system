import * as async from './bundle'

// 首页
const Home = async.asyncComponent(() => async.load('index/home/home.js'))

// 绩效列表
const PerformanceList = async.asyncComponent(() => async.load('index/performanceList/performanceList.js'))

// 绩效详情列表
const PerformanceDetailList = async.asyncComponent(() => async.load('index/performanceList/performanceDetailList/performanceDetailList.js'))

// 绩效编辑页面
const PerformanceEdit = async.asyncComponent(() => async.load('index/performanceList/performanceDetailList/performanceEdit/performanceEdit.js'))

// 维度列表
const DimensionList = async.asyncComponent(() => async.load('index/dimensionList/dimensionList.js'))

// 维度编辑页面
const DimensionEdit = async.asyncComponent(() => async.load('index/dimensionList/dimensionEdit/dimensionEdit.js'))

// 团队列表
const TeamList = async.asyncComponent(() => async.load('index/teamList/teamList.js'))

// 团队编辑页面
const TeamEdit = async.asyncComponent(() => async.load('index/teamList/teamEdit/teamEdit.js'))

// 小组列表
const GroupList = async.asyncComponent(() => async.load('index/groupList/groupList.js'))

// 小组编辑页面
const GroupEdit = async.asyncComponent(() => async.load('index/teamList/groupEdit/groupEdit.js'))

// 成员列表
const UserList = async.asyncComponent(() => async.load('index/userList/userList.js'))

// 成员编辑页面
const UserEdit = async.asyncComponent(() => async.load('index/teamList/userEdit/userEdit.js'))

// 成员详情页面
const UserDetail = async.asyncComponent(() => async.load('index/teamList/userEdit/userEdit.js'))

export default [
    {
        path: '/home',
        exact: true,
        component: Home,
        name: '首页'
    },
    // 以下路由为绩效管理模块
    {
        path: '/performanceList',
        component: PerformanceList,
        name: '绩效列表'
    },
    {
        path: '/performanceDetailList',
        component: PerformanceDetailList,
        name: '绩效列表'
    },
    {
        path: '/performanceList/performanceDetailList/performanceEdit',
        component: PerformanceEdit,
        name: '绩效详情信息编辑页'
    },
    {
        path: '/dimensionList',
        component: DimensionList,
        name: '维度列表'
    },
    {
        path: '/dimensionList/dimensionEdit',
        component: DimensionEdit,
        name: '维度信息编辑'
    },
    // 以下路由为团队管理模块
    {
        path: '/teamList',
        component: TeamList,
        name: '团队列表'
    },
    {
        path: '/teamList/teamEdit',
        component: TeamEdit,
        name: '团队信息编辑'
    },
    {
        path: '/groupList',
        component: GroupList,
        name: '小组列表'
    },
    {
        path: '/groupList/groupEdit',
        component: GroupEdit,
        name: '小组信息编辑'
    },
    // 以下路由为人员管理模块
    {
        path: '/userList',
        component: UserList,
        name: '成员列表'
    },
    {
        path: '/userList/userEdit',
        component: UserEdit,
        name: '成员信息编辑'
    },
    {
        path: '/userList/userDetail',
        component: UserDetail,
        name: '成员信息详情'
    },
]
