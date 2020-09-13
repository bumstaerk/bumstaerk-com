import React from 'react';
import classNames from'classnames';

import { Group, Main, Sub } from './PageHeader.style';

/* interface ITHeader {
  classes:String;
  children:Object;
} */

export function PageHeader({ classes=String, children=Object, ...restProps }){
  return (
    <Group className={classNames('header__group', classes )} {...restProps} >
      { children }
    </Group>
  )
}

PageHeader.Main = function HeaderMain({ classes=String, children=Object, ...restProps }){
  return (
    <Main className={classNames('header__main', classes )} {...restProps} >
      { children }
    </Main>
  )
}

PageHeader.Sub = function HeaderSub({ classes=String, children=Object, ...restProps }){
  return (
    <Sub className={classNames('header__sub', classes )} {...restProps} >
      { children }
    </Sub>
  )
}