import React from 'react'

const SidebarItem = ({Icon,title}) => {
    return (
         <div className="sidebar_item">
            <Icon className="h-8 w-8 text-blue-500 cursor-pointer" />
            <p className="hidden md:inline-flex">{title}</p>
        </div>
    )
}

export default SidebarItem
