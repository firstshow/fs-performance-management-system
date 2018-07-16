import * as async from './bundle'

// 首页
const Home = async.asyncComponent(() => async.load('index/home/home.js'));

// 绩效列表
const PerformanceList = async.asyncComponent(() => async.load('index/performanceList/performanceList.js'));

// 绩效详情列表
const PerformanceDetailList = async.asyncComponent(() => async.load('index/performanceList/performanceDetailList/performanceDetailList.js'));

// 绩效编辑页面
const PerformanceEdit = async.asyncComponent(() => async.load('index/performanceList/performanceDetailList/performanceEdit/performanceEdit.js'));


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
        path: '/performanceList/performanceDetailList',
        component: PerformanceDetailList,
        name: '绩效列表'
    },
    {
        path: '/performanceList/performanceDetailList/performanceEdit',
        component: PerformanceEdit,
        name: '绩效列表'
    }
]
