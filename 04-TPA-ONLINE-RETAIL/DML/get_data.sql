use skilvul_online_retail;

/* ----------- Get User Data ----------- */

select * from  users;

select * from users where id = 1;

/* ----------- End Get User Data ----------- */


/* ----------- Get User Addres Data ----------- */

select * from users_address;

select * from users_address where id = 1;

select  *
from users_address 
left join users
on users_address.userId = users.id;

select  *
from users_address 
left join users
on users_address.userId = users.id
where userId = 1;

/* ----------- End Get User Addres Data ----------- */


/* ----------- Get Product Data ----------- */

select * from products;

select * from products where id = 1;

/* ----------- End Get Product Data ----------- */


/* ----------- Get Category Data ----------- */

select * from categories;

select * from categories where id = 1;

/* ----------- End Get Category Data ----------- */


/* ----------- Get Product Category Data ----------- */

select * from products_category;

select * from products_category where id = 1;

select  *
from products_category 
inner join products
on products_category.productId  = products.id
inner join categories
on products_category.categoryId = categories.id;

select  *
from products_category 
inner join products
on products_category.productId  = products.id
inner join categories
on products_category.categoryId = categories.id
where productId = 1;

/* ----------- End Get Product Category Data ----------- */


/* ----------- Get Transacation Data ----------- */

select * from transactions;

select * from transactions where id = 1;

select  *
from transactions 
inner join products
on transactions.productId  = products.id
inner join users
on transactions.userId = users.id;

select  *
from transactions 
inner join products
on transactions.productId  = products.id
inner join users
on transactions.userId = users.id
where userId = 1;

/* ----------- End Get Transacation Data ----------- */
