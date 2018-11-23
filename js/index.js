const home = document.querySelector('.home')
const connectBtn = document.querySelector('.connect-btn')
const disconnectBtn = document.querySelector('.disconnect-btn')
const globe = document.querySelector('.globe')
const searchPin6Wave = document.querySelector('.search-pin-6 .pin-wave')

connectBtn.addEventListener('click', function () {
  home.classList.add('connecting-begin')
})

disconnectBtn.addEventListener('click', function () {
  home.className = 'home'
})

home.addEventListener('transitionend', function (e) {
  if (e.target === globe 
    && e.propertyName === 'opacity' 
    && !home.classList.contains('connecting-search-locations')
    && home.className !== 'home'
  ) {
    setTimeout(function() {
      home.classList.add('connecting-search-locations')
    }, 200)
  }

  if (e.target === searchPin6Wave
    && e.propertyName === 'height'
    && !home.classList.contains('connected')
    && home.className !== 'home'
  ) {
    setTimeout(function() {
      home.classList.add('connected')
    }, 500)
  }
})