import React from 'react'
import '../styles/header.scss'

export default function Header() {
  return (
    <header className="site-header">
      <div className="brand">HUEMN</div>
      <nav className="nav">
        <a href="#">Features</a>
        <a href="#">Blog</a>
        <a href="#">Search</a>
      </nav>
    </header>
  )
}