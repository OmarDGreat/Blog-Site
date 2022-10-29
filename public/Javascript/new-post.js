async function Submit() {
    const response = await fetch('/api/dashboard', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
    console.log(response);
    
    if (response.ok) {
        document.location.replace('/');
        } else {
        alert("Please fill out all fields");
        }
  }
  
  document.querySelector('#submit').addEventListener('submit', Submit);
  