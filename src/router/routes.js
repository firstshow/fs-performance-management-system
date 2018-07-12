import * as async from './bundle'

// 根组件
const Home = async.asyncComponent(() => async.load('index/home/home.js'));

// 根组件
const List = async.asyncComponent(() => async.load('index/list/list.js'));


export default [
    {
        path: '/home',
        exact: true,
        component: Home,
        name: 'NodeJS论坛'
    },
    {
        path: '/list',
        component: List,
        name: '详情'
    }
]
