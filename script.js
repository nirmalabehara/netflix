document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const enteredEmail = document.getElementById("emailInput").value;
    const allowedEmail = "nirmalabehara143@gmail.com";
    const enteredPwd = document.getElementById("pwd").value;
    const allowedPwd = "N1i1r1m1a1l1a"

    if (enteredEmail === allowedEmail && enteredPwd === allowedPwd) {
        window.location.href = "homepage.html";
    }
    else if(enteredEmail != allowedEmail){
        alert("Access denied. This email is not authorized.");
    }
    else if(enteredPwd != allowedPwd){
        alert("Password is incorrect");
    }else {
        alert("This mail is not registered");
    }
});
const translations = {
    en: {
      title: "My Watchlist",
      subtitle: "Favorites, Telugu, Trending, Series, and more.",
      description: "Discover your favorite shows and movies, watch trailers, and read reviews curated by you.",
      signInButton: "Sign In",
      emailPlaceholder: "Enter your email to login",
      loginButton: "Login"
    },
    hi: {
      title: "मेरी वॉचलिस्ट",
      subtitle: "पसंदीदा, तेलुगु, ट्रेंडिंग, सीरीज, और अधिक।",
      description: "अपने पसंदीदा शो और फिल्में खोजें, ट्रेलर देखें, और आपके द्वारा क्यूरेट की गई समीक्षाएँ पढ़ें।",
      signInButton: "साइन इन करें",
      emailPlaceholder: "लॉगिन के लिए अपना ईमेल दर्ज करें",
      loginButton: "लॉगिन करें"
    }
  };

  const languageSelector = document.getElementById("languageSelector");
  const title = document.getElementById("title");
  const subtitle = document.getElementById("subtitle");
  const description = document.getElementById("description");
  const signInButton = document.getElementById("signInButton");
  const emailInput = document.getElementById("emailInput");
  const loginButton = document.getElementById("loginButton");

  languageSelector.addEventListener("change", () => {
    const selectedLanguage = languageSelector.value;
    const translation = translations[selectedLanguage];

    title.textContent = translation.title;
    subtitle.textContent = translation.subtitle;
    description.textContent = translation.description;
    signInButton.textContent = translation.signInButton;
    emailInput.placeholder = translation.emailPlaceholder;
    loginButton.textContent = translation.loginButton;
  });