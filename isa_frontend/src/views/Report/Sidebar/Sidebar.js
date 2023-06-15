import React from 'react';
import "./SidebarStyle.css"
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'L2范数下折线图分析'
    },
    {
      id: 2,
      title: 'L∞范数下折线图分析'
    },
    {
      id: 3,
      title: 'L2范数下雷达图分析'
    },
    {
      id: 4,
      title: 'L∞范数下雷达图分析'
    },
  ];

  return (
    <div id="sidebar">
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            {/* <NavLink to={`/post/${post.id}`}>{post.title}</NavLink> */}
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
