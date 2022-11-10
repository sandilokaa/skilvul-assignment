use skilvul_online_retail;

/* ----------- Update User Data ----------- */

update users 
set name = 'Ronaldo jr'
where id = 1;

/* ----------- End Update User Data ----------- */


/* ----------- Update User Address Data ----------- */

update users_address 
set address = 'Jalan Kecapean'
where userId = 1;

/* ----------- End Update User Address Data ----------- */


/* ----------- Update Product Data ----------- */

update products 
set name = 'Iphone 14 Pro'
where id = 10;

/* ----------- End Update Product Data ----------- */


/* ----------- Update Category Data ----------- */

update categories 
set category = 'Alat Musik'
where id = 10;

/* ----------- End Update Category Data ----------- */