import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
//import x from 'icons/money.svg'; //svgo-loader =>svg-sprite-loader
//console.log(x);//上面的不打印一下 就用不了 所以要用require
require('icons/money.svg');
require('icons/tag.svg');
require('icons/chart.svg');
const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow:0 0 3px rgba(0,0,0,0.25);
  >ul{
    display:flex;
    >li{
      width: 33.3333%;
      text-align: center;
      display: flex;
      padding: 4px 0;
      flex-direction: column;
      align-items: center;
      .icon{
          width: 24px;
          height: 24px;
      }
     
    }
  }
`
const Nav = ()=>{
    return(
        <NavWrapper>
            <ul>
                <li>
                    <svg className="icon">
                        <use xlinkHref="#tag"></use>
                    </svg>
                    <Link to="/tags">标签页</Link>
                </li>
                <li>
                    <svg className="icon">
                        <use xlinkHref="#money"></use>
                    </svg>
                    <Link to="/money">记账页</Link>
                </li>
                <li>
                    <svg className="icon">
                        <use xlinkHref="#chart"></use>
                    </svg>
                    <Link to="/statistics">统计页</Link>
                </li>
            </ul>
        </NavWrapper>
    )
};
export default Nav;
