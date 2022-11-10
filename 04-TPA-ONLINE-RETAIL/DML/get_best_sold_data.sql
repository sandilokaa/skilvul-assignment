use skilvul_online_retail;

select products.name, COUNT(productId) as total_sold
from transactions
inner join products on transactions.productId = products.id
group by productId
order by total_sold desc limit 3;