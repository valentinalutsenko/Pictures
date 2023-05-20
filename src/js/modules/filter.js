const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          menuItem = menu.querySelectorAll('li'),
          block = document.querySelectorAll('.portfolio-block'),
          noContent = document.querySelector('.portfolio-no');
   
    menu.addEventListener('click', (e) => {
        const target = e.target;
    
            if (target && target.nodeName == 'LI' && !target.classList.contains('active')) {
                noContent.style.display = 'none';
    
            block.forEach(item => {
                item.style.display = 'none';
                item.classList.remove('animated', 'fadeIn');
    
                if (item.classList.contains(target.className)) {
                    item.style.display = 'block';
                    item.classList.add('animated', 'fadeIn');
                } else {
                    noContent.style.display = 'block';
                }
            });
    
            menuItem.forEach(item => item.classList.remove('active'));
        
            target.classList.add('active');
        };
    });
};
   
  export default filter;