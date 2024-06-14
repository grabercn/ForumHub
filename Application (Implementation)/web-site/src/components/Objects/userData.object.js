import { checkCustomerAuth, getCustomerId } from '../Helpers/authApiCalls.js';
import { checkStaffAuth } from '../Helpers/authApiCalls.js';
import { getStaffById } from '../Helpers/userApiCalls.js';

// Function to set a cookie
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// delete a cookie
function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

// Function to get a cookie value by name
function getCookie(name) {
    const cookieName = `${name}=`;
    const cookieArray = document.cookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return null;
}

// Function to check if a cookie exists
function checkCookie(name) {
    const cookieValue = getCookie(name);
    return cookieValue !== null;
}

function setAuthCookieValues(id, email, password) {
    const userId = id    // Hardcoded for now
    const userEmail = email;
    const userPassword = password;

    setCookie('id', userId, 0.1)
    setCookie('email', userEmail, 0.1);
    setCookie('password', userPassword, 0.1);
}

//remove auth cookie values
function removeAuthCookieValues() {
    deleteCookie('id');
    deleteCookie('email');
    deleteCookie('password');
}

function getAuthCookieValues() {
    const userEmail = getCookie('email');
    const userPassword = getCookie('password');
    const userId = Number(getCookie('id'));
    return { userId, userEmail, userPassword };
}

/**
 * Checks the customer authentication cookie.
 * @returns {Promise<boolean>} A promise that resolves to a boolean indicating whether the customer is authenticated or not.
 */
async function checkCustomerAuthCookie() {
    const { userEmail, userPassword } = getAuthCookieValues();
    return checkCustomerAuth(userEmail, userPassword)
        .then((customerAuth) => {
            if (customerAuth === true) {
                getCustomerId(userEmail, userPassword).then((id) => {
                    setAuthCookieValues(id, userEmail, userPassword);
                });
                return true;
            } else {
                //removeAuthCookieValues();
                return false;
            }
        });
}

async function checkStaffAuthCookie() {
    const { userEmail, userPassword } = getAuthCookieValues();
    return checkStaffAuth(userEmail, userPassword)
        .then((staffAuth) => {
            if (staffAuth === true) {
                getStaffById(userEmail, userPassword).then((id) => {
                    setAuthCookieValues(id, userEmail, userPassword);
                });
                return true;
            } else {
                //removeAuthCookieValues();
                return false;
            }
        });
}

// Function to check if the user is authenticated
function checkAuthLocal(userType) {
    return new Promise((resolve, reject) => {
        Promise.all([checkCustomerAuthCookie(), checkStaffAuthCookie()])
            .then(([customerAuth, staffAuth]) => {
                if (userType === 'customer' && customerAuth) {
                    resolve(true);
                } else if (userType === 'staff' && staffAuth) {
                    resolve(true);
                } else if (userType=== undefined) {
                    if (customerAuth || staffAuth) {
                        resolve(true);
                    } else {
                        resolve(false);
                    }    
                } else {
                    resolve(false);
                }
            })
            .catch((error) => {
                console.error('Error checking authentication:', error);
                resolve(false);
            });
    });
}

export {  checkAuthLocal, setAuthCookieValues, getAuthCookieValues, checkCustomerAuthCookie, checkStaffAuthCookie, removeAuthCookieValues };