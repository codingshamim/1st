const menus = document.querySelector('.menus');
const closeBtn = document.querySelector('.close-btn');
const hamBurgerToggler = document.querySelector('.hamburger');
hamBurgerToggler.onclick = () =>{
    menus.classList.toggle('active-menu');
    hamBurgerToggler.style.visibility='hidden';

}
closeBtn.onclick = () =>{
    menus.classList.remove("active-menu");
    hamBurgerToggler.style.visibility='visible';
}

// skill section

const skill = document.querySelector('.skill');
const experience = document.querySelector('.experience');
const edu = document.querySelector('.edu');



skill.onclick = () =>{
    document.querySelector('.skill-wrapper').classList.remove('disable');
    document.querySelector('.experience-wrapper').classList.remove('active-experience');
    document.querySelector('.education-wrapper').classList.remove('active-education');
    experience.classList.remove('btn-active');
    skill.classList.add('btn-active');
    edu.classList.remove('btn-active');
    
}
experience.onclick = () =>{
    document.querySelector('.experience-wrapper').classList.add('active-experience');
    document.querySelector('.education-wrapper').classList.remove('active-education');
    document.querySelector('.skill-wrapper').classList.add('disable');
    experience.classList.add('btn-active');
    skill.classList.remove('btn-active');
    edu.classList.remove('btn-active');
    
}
edu.onclick = () =>{
    document.querySelector('.skill-wrapper').classList.add('disable');
    document.querySelector('.experience-wrapper').classList.remove('active-experience');
    document.querySelector('.education-wrapper').classList.add('active-education');
    experience.classList.remove('btn-active');
    skill.classList.remove('btn-active');
    edu.classList.add('btn-active');
}



// portfolio section

const allBtn = document.querySelector('.all-btn');
const webApplicationBtn = document.querySelector('.web-application-btn');
const photoshopBtn = document.querySelector('.photoshop-btn');
const mobileAppBtn = document.querySelector('.mobile-app-btn');
const eCommerceBtn = document.querySelector('.e-commerce-btn');


webApplicationBtn.onclick = () =>{
    document.querySelector('.photoshop').style.display = 'none';
    document.querySelector('.photoshop-2').style.display = 'none';
    document.querySelector('.web-application').style.display = 'block';
    document.querySelector('.web-application-2').style.display = 'block';
    document.querySelector('.web-application-3').style.display = 'block';
    document.querySelector('.mobile-app').style.display = 'none';
    document.querySelector('.e-commerce').style.display = 'none';
    document.querySelector('.e-commerce-2').style.display = 'none';
}
photoshopBtn.onclick = () =>{
    document.querySelector('.photoshop').style.display = 'block';
    document.querySelector('.photoshop-2').style.display = 'block';
    document.querySelector('.web-application').style.display = 'none';
    document.querySelector('.web-application-2').style.display = 'none';
    document.querySelector('.web-application-3').style.display = 'none';
    document.querySelector('.mobile-app').style.display = 'none';
    document.querySelector('.e-commerce').style.display = 'none';
    document.querySelector('.e-commerce-2').style.display = 'none';
}
mobileAppBtn.onclick = () =>{
    document.querySelector('.photoshop').style.display = 'none';
    document.querySelector('.photoshop-2').style.display = 'none';
    document.querySelector('.web-application').style.display = 'none';
    document.querySelector('.web-application-2').style.display = 'none';
    document.querySelector('.web-application-3').style.display = 'none';
    document.querySelector('.mobile-app').style.display = 'block';
    document.querySelector('.e-commerce').style.display = 'none';
    document.querySelector('.e-commerce-2').style.display = 'none';
}
eCommerceBtn.onclick = () =>{
    document.querySelector('.photoshop').style.display = 'none';
    document.querySelector('.photoshop-2').style.display = 'none';
    document.querySelector('.web-application').style.display = 'none';
    document.querySelector('.web-application-2').style.display = 'none';
    document.querySelector('.web-application-3').style.display = 'none';
    document.querySelector('.mobile-app').style.display = 'none';
    document.querySelector('.e-commerce').style.display = 'block';
    document.querySelector('.e-commerce-2').style.display = 'none';
}

allBtn.onclick = () =>{
    document.querySelector('.photoshop').style.display = 'block';
    document.querySelector('.photoshop-2').style.display = 'block';
    document.querySelector('.web-application').style.display = 'block';
    document.querySelector('.web-application-2').style.display = 'block';
    document.querySelector('.web-application-3').style.display = 'block';
    document.querySelector('.mobile-app').style.display = 'block';
    document.querySelector('.e-commerce').style.display = 'block';
    document.querySelector('.e-commerce-2').style.display = 'block';
}

const portfolioCard = document.querySelector('.portfolio-card');
const projectClose = document.querySelector('.project-close');

portfolioCard.onclick = () =>{
    document.querySelector('.portfolio-details').style.display='block';
}

projectClose.onclick = () =>{
    document.querySelector('.portfolio-details').style.display='none';
}



// testimonials section


const rightArrow = document.querySelector('.right-arrow');
const leftArrow = document.querySelector('.left-arrow');


rightArrow.onclick = () =>{
    document.querySelector('.testi-box-2').style.display='block';
    document.querySelector('.testi-box').style.display='none';

}


// color theme and color swithcer 


const themeBtn = document.querySelector('.theme-btn');

themeBtn.onclick = () =>{
    document.querySelector('body').classList.toggle('dark');
}

function favourite(el) {
    el.querySelector('ion-icon').setAttribute('name', 'minus-outline');
   }