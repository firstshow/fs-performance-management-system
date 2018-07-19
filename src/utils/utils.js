import queryString from 'query-string'
/**
 * 获取当前的年份
 * @returns {string}
 */
export const getFullYear = () => {
    return (new Date()).getFullYear().toString()
}

/**
 * 根据当前是几月份，来确定当前是第几季度
 */
export const getNowQuarter = () => {
    let month = (new Date()).getMonth() + 1
    let quarter = 'Q1'
    switch (month) {
        case 1:
        case 2:
        case 3:
            quarter = 'Q1'
            break
        case 4:
        case 5:
        case 6:
            quarter = 'Q2'
            break
        case 7:
        case 8:
        case 9:
            quarter = 'Q3'
            break
        case 10:
        case 11:
        case 12:
            quarter = 'Q4'
            break
        default:
    }
    return quarter
}

/**
 * 转换url后面的参数，本来?aa=1的字符串，转换为： {aa： 1}的json
 * @param url 需要转换的url
 * @param key 需要获取对应参数的key
 * @returns {*} 返回对应的值
 */
export const getUrlQuery = (url, key) => {
    return queryString.parse(url)[key]
}