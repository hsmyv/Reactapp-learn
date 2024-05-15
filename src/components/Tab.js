import { useEffect, useState } from "react";


function Tab({children, activeTab}){
    const [active, setActive] = useState(activeTab);
    useEffect(() => {
        setActive(activeTab)
    }, [activeTab])
    return (
        <div>
            <nav>
                {children.map((tab,index) => (
                    <button 
                    onClick={() => setActive(index)}
                    className={active == index ? 'bg-yellow-100' :'bg-gray-100'} 
                    key={index}>
                    {tab.props.title}
                    </button>
                ))}
            </nav>
            {children[active]}
        </div>
    )
}

Tab.Panel = function({children, title}){
    return(
        <div>{children}</div>
    )
}

export default Tab