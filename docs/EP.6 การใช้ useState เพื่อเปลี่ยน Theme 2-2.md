การใช้ useState และ localStorage เพื่อเปลี่ยน Theme 

วิธีทำ
1.สร้างไฟล์ useDarkMode.js 

import { useEffect, useState } from "react"; 
export const useDarkMode = () => {  
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme','dark')
      setTheme('dark');
    } else {
      window.localStorage.setItem('theme','light')
      setTheme('light');
    }
  }
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  },[]);
  return [theme,toggleTheme]
}; 

2. แก้ไขไฟล์ App.js 

import { useDarkMode } from "./useDarkMode";
.
.
function App() { 
 + const[theme, toggleTheme] = useDarkMode();
.
.
 + <Navbar bg={theme} variant={theme} > 
.
.

Success!!! 
