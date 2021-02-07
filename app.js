document.getElementById('searchFood').addEventListener('click', function () {
   const inputValue = document.getElementById('inputFood').value;

   fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputValue}`)
      .then(res => res.json())
      .then(data => dislplayData(data))
      .catch(error => {
         alert("Sorry " + inputValue + " is incurrect! Please Try Again");
      });

   const dislplayData = data => {
      data.meals.forEach(dataloop => {
         const FoodmainDiv = document.getElementById('FoodDiv');
         //console.log(dataloop.strMeal)
         const FoodDiv = document.createElement("div");
         FoodDiv.classList = 'FoodListDiv';

         const FoodInfo = `
         <span onclick="FoodDetailShow('${dataloop.idMeal}')">
            <img class="FoodListDiv-img" src='${dataloop.strMealThumb}'>
            <h3>${dataloop.strMeal}</h3>
         </span>
         `

         FoodDiv.innerHTML = FoodInfo;
         FoodmainDiv.appendChild(FoodDiv);
      });

   }
});

//signle food dispaly 
const FoodDetailShow = Foodid => {

   fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${Foodid}`)
      .then(res => res.json())
      .then(data => dislplayDataDetails(data.meals[0]))
}
const dislplayDataDetails = FoodDetailsShow => {
   //console.log('gg', FoodDetailsShow);
   const FoodmainDiv = document.getElementById('product-details');
   FoodmainDiv.className = 'FoodListDiv1';
   FoodmainDiv.innerHTML = `
            <img src='${FoodDetailsShow.strMealThumb}'>
            <h3>${FoodDetailsShow.strMeal}</h3>
            <h4>Ingredient</h4>
            <p>${FoodDetailsShow.strIngredient1}</p>
            <p>${FoodDetailsShow.strIngredient2}</p>
            <p>${FoodDetailsShow.strIngredient3}</p>
            <p>${FoodDetailsShow.strIngredient4}</p>
            <p>${FoodDetailsShow.strIngredient5}</p>
            <p>${FoodDetailsShow.strIngredient6}</p>
            <p>${FoodDetailsShow.strIngredient7}</p>
            <p>${FoodDetailsShow.strIngredient8}</p>
            <p>${FoodDetailsShow.strIngredient9}</p>
            `
}







