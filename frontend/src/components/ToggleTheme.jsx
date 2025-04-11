import { useEffect, useState }  from "react";
export default function ToggleTheme(){
    const [theme,setTheme] = useState(localStorage.getItem("theme") || "light");
    
}