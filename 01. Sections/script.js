function create(words) {

   for (const string of words) {

      let divElement = document.createElement('div');
      let paragraphElement = document.createElement('p');
     
      paragraphElement.textContent = string;
      paragraphElement.style.display = 'none';
      divElement.appendChild(paragraphElement);

      divElement.addEventListener('click', (e) => {
         paragraphElement.style.display = 'block';
      });

      let divParentElement = document.querySelector('#content');
      divParentElement.appendChild(divElement);
   }
}