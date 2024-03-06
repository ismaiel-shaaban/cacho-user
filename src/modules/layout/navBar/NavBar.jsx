import { strings } from '@/utilis/Localization';
import { useState, useEffect } from 'react';

const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);


  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    setIsDarkMode(savedDarkMode === 'true' ? true : false);
    updateCssVariables(savedDarkMode === 'true');
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    updateCssVariables(newDarkMode);
  };

  const updateCssVariables = (darkMode) => {
    document.documentElement.style.setProperty('--text-color', darkMode ? '#fff' : '#333');
    document.documentElement.style.setProperty('--bg-color', darkMode ? '#333' : '#fff');
  };
  const toggleLanguage = (language) => {
    localStorage.setItem('lang', language);
    strings.setLanguage(language);
    window.location.reload(); // Reload the page to apply the new language
  };

  return (
    <>
  
      
      <div className="w-full flex justify-around">
      
      <div className='text-primary w-[100%] bg-gray-100 px-[100px] '>{strings.hello}</div>
      <button onClick={() => toggleLanguage('ar')}>Arabic</button>
      <button onClick={() => toggleLanguage('en')}>English</button>


      {/* <div onClick={toggleDarkMode}>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26a5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1"></path>
          </svg>
        </span>
      </div> */}
    </div>
      
    </>
   
  );
};

export default NavBar;
