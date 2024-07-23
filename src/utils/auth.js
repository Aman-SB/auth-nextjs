import Cookies from "js-cookie";

export const getToken = () => {
    return Cookies.get('authToken'); // Replace 'authToken' with your cookie name
  };
  
  // Function to set the token in cookies
  export const setToken = (token) => {
    Cookies.set('authToken', token, { expires: 7 }); // Expires in 7 days, adjust as needed
  };
  
  // Function to remove the token from cookies
  export const removeToken = () => {
    Cookies.remove('authToken');
  };
  