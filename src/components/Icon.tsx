import React from 'react';
//import x from 'icons/money.svg'; //svgo-loader =>svg-sprite-loader
//console.log(x);//上面的不打印一下 就用不了 所以要用require
//下面写法 需要每用一个icon引入一个svg,所以需要require 一个目录/文件夹
// require('icons/money.svg');
// require('icons/tag.svg');
// require('icons/chart.svg');
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}
type Props = {
    name:string
}
const Icon = (props: Props) => {
    return(
        <svg className="icon">
            <use xlinkHref={'#'+props.name}></use>
        </svg>
    )
}
export default Icon;
