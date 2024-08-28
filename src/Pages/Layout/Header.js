import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { activeTabAtom, tabsAtom } from "../../Recoil/AdminRecoil";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

function Header () {

    const tabs = useRecoilValue(tabsAtom)
    const [activeTab, setActiveTab] = useRecoilState(activeTabAtom)
    
    const navigate = useNavigate()

    return <div className="header">
        {tabs.length > 0 && 
        tabs.map(tab => {
            return <div 
            key={tab}
            onClick={()=> setActiveTab(tab)}
            className={classNames({active : activeTab === tab})}
            >{tab}</div>
        })}
        <button onClick={()=>navigate('/user/login')}>로그인</button>
        <button onClick={()=>navigate('/user/login')}>회원가입</button>
    </div>
}

export default Header