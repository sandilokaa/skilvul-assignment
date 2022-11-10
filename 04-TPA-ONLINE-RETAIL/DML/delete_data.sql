use skilvul_online_retail;

/* ----------- Delete User Data ----------- */

delete from users where id = 1;

/* ----------- End Delete User Data ----------- */


/* ----------- Delete User Address Data ----------- */

delete from users_address where userId = 1;

/* ----------- End Delete User Address Data ----------- */


/* ----------- Delete Product Data ----------- */

delete from products where id = 1;

/* ----------- End Delete Product Data ----------- */


/* ----------- Delete Category Data ----------- */

delete from categories where id = 1;

/* ----------- End Delete Category Data ----------- */



/* ----------- Delete Product Category Data ----------- */

delete from products_category where productId = 1;

/* ----------- Delete Product Category Data ----------- */