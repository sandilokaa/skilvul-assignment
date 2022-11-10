use skilvul_online_retail;

/* ----------- Create User Table ----------- */

create table users (
	id int not null primary key auto_increment,
	name varchar(50),
	email varchar(50),
	password varchar(50),
	phoneNumber varchar(12),
	dateOfBirth date
);

/* ----------- End Create User Table ----------- */


/* ----------- Create User Address Table ----------- */

create table users_address (
	id int not null primary key auto_increment,
	userId int,
	country varchar(35),
	city varchar(25),
	address text,
	foreign key (userId) references users(id)
);

/* ----------- End Create User Address Table ----------- */


/* ----------- Create Product Table ----------- */

create table products (
	id int not null primary key auto_increment,
	name varchar(55),
	price varchar(20),
	stock varchar(20),
	color varchar(25),
	description text,
	picture text
);

/* ----------- End Create Product Table ----------- */


/* ----------- Create Category Table ----------- */

create table categories (
	id int not null primary key auto_increment,
	category varchar(25),
	brand varchar(20),
	description text
);

/* ----------- End Create Category Table ----------- */


/* ----------- Create Product Category Table ----------- */

create table products_category (
	id int not null primary key auto_increment,
	productId int,
	categoryId int,
	foreign key (productId) references products(id),
	foreign key (categoryId) references categories(id)
);

/* ----------- End Create Product Category Table ----------- */


/* ----------- Create Transaction Table ----------- */

create table transactions (
	id int not null primary key auto_increment,
	userId int,
	productId int,
	transactionDate timestamp,
	totalPrice varchar(25),
	quantity varchar(25),
	foreign key (userId) references users(id),
	foreign key (productId) references products(id)
);

/* ----------- End Create Transaction Table ----------- */