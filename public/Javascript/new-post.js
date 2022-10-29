async function Submit() {
    const response = await fetch('/api/dashboard/new-post', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
    console.log(response);
    
    if (response.ok) {
        document.location.replace('/dashboard/');
        } else {
        alert("Please fill out all fields");
        }
  }
  
  document.querySelector('#submit').addEventListener('submit', Submit);
  