import React, { useState } from 'react'

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("Home");
    const tabs = ["Home", "Profile", "Settings"];

    const renderContent = () => {
        switch(activeTab){
            case "Home" :
                return <p>Welcome back</p>;
            case "Profile" :
                    return <p>Your profile goes here</p>;
            case "Settings" :
                    return <p>change your preference</p>;
            default :
                    return null
        }
    }
  return (
    <>
    {
        tabs.map((tab) => (
            <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            >{tab}</button> 
        ))
    }
    <p>{renderContent(

    )}</p>
    </>
  )
}

export default Tabs