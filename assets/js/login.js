const phrase ="Binary Brains";
        
const targetEL = document.getElementById("bubble-hover");
phrase.split("").map((char,idx) => {
    const el = document.createElement("span");
    el.innerText=char;
    el.setAttribute("data-index", idx.toString());
    el.classList.add("hover-char");
    targetEL.appendChild(el);


});

const hoverChars = [...document.getElementsByClassName("hover-char")];

const removeClasses = () => {
    hoverChars.map((char)=>{
        char.classList.remove("hovered");
        char.classList.remove("hovered-adjacent");
    });
};

hoverChars.map((char)=>{
    char.addEventListener("mouseover",(e)=> {
        removeClasses();
        const currentElement =e.target;
        const index =parseInt(currentElement.getAttribute("data-index"),10);
        const prevIndex= index === 0? null : index -1 ;
        const nextIndex = index ===phrase.length -1 ?  null :index +1;

        const prevEl=
        prevIndex !== null &&
        document.querySelector(`[data-index="${prevIndex}"]`);

        const nextEl=
        nextIndex !== null &&
        document.querySelector(`[data-index="${nextIndex}"]`);

        e.target.classList.add("hovered");
        prevEl && prevEl.classList.add("hovered-adjacent");
        nextEl && nextEl.classList.add("hovered-adjacent");


    });
});

document
.getElementById("bubble-hover")
.addEventListener("mouseleave",() => {
    removeClasses();
     
});

const users = [
    {
      email: 'user1@example.com',
      password: 'password1',
      name: 'User One'
    },
    {
      email: 'user2@example.com',
      password: 'password2',
      name: 'User Two'
    },
    {
      email: 'user3@example.com',
      password: 'password3',
      name: 'User Three'
    }
  ];

  const formBtn = document.querySelector('.form-btn');
  const errorDiv = document.getElementById('error');

  formBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.email === username && u.password === password);

    if (user) {
      // Login successful
      //alert(`Welcome, ${user.name}!`);
      try {
        window.location.href = 'home.html'; // Redirect to home page
      } catch (error) {
        console.error('Error redirecting to home page:', error);
        errorDiv.innerText = 'Error redirecting to home page.';
      }
    } else {
      // Login failed
      errorDiv.innerText = 'Invalid email or password.';
    }
  });