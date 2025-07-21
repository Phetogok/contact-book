// Global variables
let apiKey = '';
const rootPath = 'https://mysite.itvarsity.org/api/contactBook/';

// Cheack if api key exists when page loads
function checkApikey(){
    const storedApiKey = localStorage.getItem('apiKey');

    if(storedApiKey){
        apiKey = storedApiKey
        // Show contacts page
        showContacts();
        // Get contact (API call)
        getContact()
    }
}

