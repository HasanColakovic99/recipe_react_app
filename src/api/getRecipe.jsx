const API_KEY = '9ef0af15c34e4ff2b9c193dcd7241a6e';

export const getRecipe = async (id) => {
    return fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        if(res.status === 200){
            return res.json();
        }
    })
    .catch(err => {
        console.log(err);
    });
};