
select recipes.id, recipes.name, recipe_directions.step, recipe_directions.description
from recipes
JOIN recipe_directions on recipe_directions.recipe_id = recipes.id


select * from recipe_directions



-- get steps for an id 
SELECT 
    r.id AS 'Recipe ID', 
    rd.id AS 'Step ID',
    rd.step, 
    rd.description
FROM recipes AS r
JOIN recipe_directions AS rd on rd.recipe_id = r.id
ORDER BY rd.id ASC


---join all see all
SELECT 
    r.id AS 'Recipe ID', 
    rd.id AS 'Step ID',
    ri.id AS 'Recipe Ingredients',
    i.id AS 'Ingredient ID',
    i.name,
    ri.quantity,
    ri.unit_measurement AS 'Unit of Measurement',
    rd.step, 
    rd.description
FROM recipes AS r
JOIN recipe_directions AS rd on rd.recipe_id = r.id
JOIN recipe_ingredients AS ri on ri.recipe_id = r.id
JOIN ingredients AS i on ri.ingredient_id = i.id
