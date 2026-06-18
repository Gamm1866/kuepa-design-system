import{j as n}from"./index-BBwQ-p2R.js";import{I as l}from"./iconComponent-DiVqBPNu.js";const d={lg:"dsk-text-title-m",m:"dsk-text-title-s",sm:"dsk-text-title-s"},m=i=>{var a,t,e,c;return i.darkMode?n.jsx("div",{className:`dark-button-container ${i.type} ${["primary","tertiary"].includes(i.type)&&!i.disabled?"dsk-border-color-alliance-gradient":""}`,children:n.jsxs("button",{className:`button-container ${i.className?i.className:""}
            dark
            ${i.type}
            button-${i.size}
            ${d[i.size]}
            ${i.children?i.iconData?"with-icon":"":"only-icon"}
            ${(a=i.iconData)!=null&&a.iconPosition?`icon-${(t=i.iconData)==null?void 0:t.iconPosition}`:""}`,onClick:i.onClick,disabled:i.disabled,children:[i.iconData?n.jsx(l,{className:`${["primary"].includes(i.type)?"dsk-color-alliance-gradient":""}`,icon:i.iconData.iconName,variant:i.iconData.variant}):null,i.children?typeof i.children=="string"?n.jsx("p",{className:`${["primary"].includes(i.type)?"dsk-color-alliance-gradient":""}`,children:i.children}):i.children:""]})}):n.jsxs("button",{className:`button-container ${i.className?i.className:""}
          ${i.type}
          button-${i.size}
          ${d[i.size]}
          ${i.children?i.iconData?"with-icon":"":"only-icon"}
          ${(e=i.iconData)!=null&&e.iconPosition?`icon-${(c=i.iconData)==null?void 0:c.iconPosition}`:""}`,onClick:i.onClick,disabled:i.disabled,children:[i.iconData?n.jsx(l,{icon:i.iconData.iconName,variant:i.iconData.variant}):null,i.children??i.children]})};export{m as B};
