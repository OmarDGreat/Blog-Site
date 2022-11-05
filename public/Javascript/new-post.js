const Submit = async function (event) {
    event.preventDefault();

    const title = document.querySelector("input[name='title']").value.trim();
    const content = document.querySelector("textarea[name='content']").value.trim();
    
    // console.log(title, content);

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { "Content-Type": "application/json" },
    });
    // console.log(response);

    if (response.ok) {
      doucument.location.replace("/")
    } else {
      alert("Please fill out all fields");
    }
    
  };
  
  document.querySelector(".new-post-form").addEventListener("submit", Submit);
