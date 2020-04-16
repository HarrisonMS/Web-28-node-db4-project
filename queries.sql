
select recipes.id, recipes.name, recipe_directions.step, recipe_directions.description
from recipes
JOIN recipe_directions on recipe_directions.recipe_id = recipes.id


select * from recipe_directions