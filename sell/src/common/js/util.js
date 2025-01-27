/**
 * 解析url参数
 * @example ?id=123456&a=b
 * @return Object {id:123456 a:b}
 */
export function urlParse() {
    let url = window.location.search;
    let object = {}
    let reg = /[?&][^?&]+=[^?&]+/g;
    let arr = url.match(reg);
    if (arr) {
        arr.forEach((item)=>{
            let tempArr = item.substring(1).split('=');
            let key = decodeURIComponent(tempArr[0]);
            let value = decodeURIComponent(tempArr[1]);
            object[key] = value;
        })
    }
    return object;
}