'Use script';
const FeatureBars = document.querySelector('.features');
const featureNavs = document.querySelector('.feature-nav');
const companyBars = document.querySelector('.company');
const companyNavs = document.querySelector('.company-nav');
const menuNav = document.querySelector('.burger');
const MobNav = document.querySelector('.mobnav');
const cancelNav = document.querySelector('.cancel');
const overLay = document.querySelector('.overlay');
const MobileFeature = document.querySelector('.mob-features');
const mobNavFeatures = document.querySelector('.mob-feature-nav');
const MobileCompany = document.querySelector('.mob-company');
const mobNavCompany = document.querySelector('.company-mob-nav');

// mob-feature-nav
// mob-features

// function
overLay.addEventListener('click', () => {
  if (
    !companyNavs.classList.contains('hidden') ||
    !featureNavs.classList.contains('hidden')
  )
    featureNavs.classList.add('hidden');
  companyNavs.classList.add('hidden');
});

FeatureBars.addEventListener('click', () => {
  {
    if (!companyNavs.classList.contains('hidden')) {
      featureNavs.classList.toggle('hidden');
      companyNavs.classList.add('hidden');
    } else {
      featureNavs.classList.toggle('hidden');
    }
  }
  console.log('clicked');
});

companyBars.addEventListener('click', () => {
  {
    if (!featureNavs.classList.contains('hidden')) {
      companyNavs.classList.toggle('hidden');
      featureNavs.classList.add('hidden');
    } else {
      companyNavs.classList.toggle('hidden');
    }
  }
});
// ==================================
// MOBILE VIEW

MobileFeature.addEventListener('click', () => {
  // if (!companyNavs.classList.contains('hidden')) {
  mobNavFeatures.classList.toggle('hidden');
  // companyNavs.classList.add('hidden');
  // } else {
  // featureNavs.classList.toggle('hidden');
  // }

  console.log('clicked');
});

MobileCompany.addEventListener('click', () => {
  // if (!companyNavs.classList.contains('hidden')) {
  mobNavCompany.classList.toggle('hidden');
  // companyNavs.classList.add('hidden');
  // } else {
  // featureNavs.classList.toggle('hidden');
  // }
  console.log('clicked');
});

menuNav.addEventListener('click', () => {
  MobNav.classList.toggle('hidden');
});

cancelNav.addEventListener('click', () => {
  MobNav.classList.toggle('hidden');
});

// menuBtn.classList.toggle('fa-bars');
// menuBtn.classList.toggle('fa-xmark');
// mobileMenu.classList.toggle('hidden');
