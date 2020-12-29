EP.6 การใช้ useState เพื่อเปลี่ยน Theme 1/2
ขั้นตอน 
1. แก้ไขไฟล์ App.js 
     import { Navbar,Form } from "react-bootstrap"; 
2. เพิ่มโค้ดในส่วน function App() 
  const [theme, setTheme] = React.useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
3. เพิ่ม Form.Check และกำหนด ให้ทำงานเมื่อมีการเปลี่ยนแปลง onChange={toggleTheme} 
   <Navbar.Collapse className="justify-content-end">
     <Form inline>
       <Form.Check 
         type="switch"
         id="custom-switch"
         label="Dark Mode" 
         onChange={toggleTheme} 
       />
     </Form>
   </Navbar.Collapse>
   