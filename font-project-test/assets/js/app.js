const onWindowscroll = (event) => {
  const nav = document.querySelector("nav");
  console.log(nav);

  if (nav) {
    if (pageYOffset > 100) {
      console.log("fixed");
      nav.className = "fixed";
    }
    else{
        nav.className="";
    }
  }
};

window.addEventListener("scroll", onWindowscroll);
