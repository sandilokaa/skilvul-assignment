use skilvul_online_retail;

select category, count(categoryId) as total_stuff 
from products_category inner join categories
on products_category.categoryId = categories.id
group by categoryId
order by total_stuff desc limit 1;
