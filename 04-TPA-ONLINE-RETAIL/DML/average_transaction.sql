use skilvul_online_retail;

select avg(totalPrice)
from transactions
where transactionDate like '2022-04-%';

