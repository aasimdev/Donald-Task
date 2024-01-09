import React from 'react'

const Sidebar = ({ isOpen }) => {
    return (
        <aside className={`w-80 bg-purple-50 h-[calc(100vh_-_80px)] absolute md:fixed transition-all duration-300 ${isOpen ? "translate-x-0 md:-translate-x-full" : "-translate-x-full md:translate-x-0"}`}>
            <div className='p-6 space-y-4'>
                <p>Nunc semper, velit sit amet facilisis elementum, sem nisi sollicitudin lectus, auctor gravida dolor sapien et urna. </p>
                <p>Aliquam ultrices tortor libero, quis consequat massa porta a. Sed viverra in dui vel aliquet.</p>
                <p>Praesent dignissim lacus ut ipsum bibendum aliquet sed eu nisi. Praesent felis magna, aliquam placerat mollis in, mattis nec lectus</p>
                <p>Nam eu lacus id urna auctor eleifend quis sed nisl. Duis arcu odio, consectetur ac libero ut, aliquam euismod lectus.</p>
            </div>
        </aside>
    )
}

export default Sidebar