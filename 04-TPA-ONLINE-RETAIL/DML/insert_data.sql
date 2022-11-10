use skilvul_online_retail;

/* ----------- Insert User Data ----------- */

insert into users 
	(id, name, email, password, phoneNumber, dateOfBirth)
values
	(1, 'Ronaldo', 'ronaldo@gmail.com', 'ronaldo123.', '089123456789', '1992-05-05'),
	(2, 'Messi', 'messi@gmail.com', 'messi123.', '089098765432', '1993-05-12'),
	(3, 'Ricardo', 'ricardo@gmail.com', 'ricardo123.', '081234567898', '1992-12-05'),
	(4, 'Doe', 'doe@gmail.com', 'doeo123.', '081234321123', '1993-08-15'),
	(5, 'Musiala', 'musiala@gmail.com', 'musiala123.', '085678654321', '1998-02-05'),
	(6, 'Ozil', 'ozil@gmail.com', 'ozil123.', '089314243654', '1999-11-05'),
	(7, 'Benteke', 'benteke@gmail.com', 'benteke123.', '087890432123', '1995-05-27'),
	(8, 'Sancho', 'sancho@gmail.com', 'sancho123.', '089321678423', '1994-05-25'),
	(9, 'Neymar', 'neymar@gmail.com', 'neymar123.', '081745744321', '1992-10-15'),
	(10, 'Dalot', 'dalot@gmail.com', 'dalot123.', '089321219090', '1999-07-07')

/* ----------- End Insert User Data ----------- */


/* ----------- Insert User Address Data ----------- */

insert into users_address  
	(id, userId, country, city, address)
values
	(1, 1, 'Indonesia', 'Semarang', 'Jalan Berlian'),
	(2, 2, 'Indonesia', 'Jakarta', 'Jalan Mutiara'),
	(3, 3, 'Indonesia', 'Bandung', 'Jalan Kemangi'),
	(4, 4, 'Indonesia', 'Denpasar', 'Jalan Dipta'),
	(5, 5, 'Indonesia', 'Semarang', 'Jalan Mataram'),
	(6, 6, 'Indonesia', 'Jakarta', 'Jalan Semanggi'),
	(7, 7, 'Indonesia', 'Bandung', 'Jalan Dago'),
	(8, 8, 'Indonesia', 'Denpasar', 'Jalan Buleleng'),
	(9, 9, 'Indonesia', 'Semarang', 'Jalan Majapahit'),
	(10, 10, 'Indonesia', 'Jakarta', 'Jalan Rengasdengklok')

/* ----------- End Insert User Address Data ----------- */


/* ----------- Insert Product Data ----------- */

insert into products  
	(id, name, price, stock, color, description, picture)
values
	(1, 'Hoodie Nike', 350000, 151, 'beige', 'Bahan tebal dan halus, ukuran L', 'https:/nike.com'),
	(2, 'Crewneck Nike', 642000, 232, 'beige', 'Bahan enak dipakai, ukuran M', 'https:/nike.com'),
	(3, 'Tas Nike', 250000, 123, 'Black', 'Bahan nyaman, ukuran M', 'https:/nike.com'),
	(4, 'Jordan 1 Mid', 3250000, 34, 'Red', 'Insole bagus, siap pakai, ukuran 42.5', 'https:/nike.com'),
	(5, 'Bracelet Prigel', 15000, 21, 'Red', 'Bahan bagus', 'https:/prigel.com'),
	(6, 'Ring Maternal', 99000, 54, 'Gold', 'Bahan kuat', 'https:/maternal.com'),
	(7, 'Topi Filling', 75000, 10, 'Black', 'Bahan nyaman digunakan', 'https:/filling.com'),
	(8, 'Gitar Cort', 1650000, 31, 'Brown', 'Suara bagus, senar mantap, perlengkapan lengkap', 'https:/cort.com'),
	(9, 'Mesin Cuci Panasonic', 2300000, 32, 'Silver', 'Siap dipakai dan siap tempur', 'https:/panasonic.com'),
	(10, 'Hp Iphone 14', 12599000, 54, 'Black', 'Barang bagus', 'https:/iphone.com'),
	(11, 'Hoodie Adidas', 899000, 32, 'Black', 'Barang bagus ukuran M', 'https:/adidas.com'),
	(12, 'Roller BRT', 19000, 45, 'Orange', 'Barang bagus', 'https:/brt.com'),
	(13, 'Topi Lacoste', 1899000, 32, 'Silver', 'Barang bagus tinggi 14cm', 'https:/lacoste.com'),
	(14, 'Tepung Terigu', 9000, 65, 'WHite', 'Barang bagus, berat 2kg', 'https:/terigu.com'),
	(15, 'Masako', 2000, 12, 'Yellow', 'Barang bagus 100gr', 'https:/masako.com'),
	(16, 'Crewneck Adidas', 899000, 23, 'White', 'Barang bagus ukuran M', 'https:/adidas.com'),
	(17, 'Gitar Yamaha', 899000, 33, 'Yellow', 'Barang bagus', 'https:/yamaha.com'),
	(18, 'Knalpot WRX Aerox', 1299000, 21, 'Silver', 'Barang bagus bahan stainless', 'https:/wrx.com'),
	(19, 'Samsung Smart Tv', 1899000, 21, 'Black', 'Barang bagus ukuran 50inch', 'https:/samsung.com'),
	(20, 'Tas Export', 899000, 45, 'Blue', 'Barang bagus', 'https:/export.com'),
	(21, 'Convers Chuck', 899000, 31, 'Black', 'Barang bagus, ukuran 41', 'https:/converse.com')

/* ----------- End Insert Product Data ----------- */


/* ----------- Insert Category Data ----------- */

insert into categories  
	(id, category, itemCondition, description)
values
	(1, 'Hoodie', 'New', 'Hoodie dengan kualitas dan brand terbaik'),
	(2, 'Crewneck', 'New', 'Crewneck dengan kualitas dan brand terbaik'),
	(3, 'Aksesoris', 'New', 'Aksesoris dengan kualitas dan brand terbaik'),
	(4, 'Otomotif', 'New', 'Barang otomotif dengan kualitas dan brand terbaik'),
	(5, 'Sepatu', 'New', 'Sepatu dengan kualitas dan brand terbaik'),
	(6, 'Elektronik', 'New', 'Elektronik dengan kualitas dan brand terbaik'),
	(7, 'Topi', 'New', 'Topi dengan kualitas dan brand terbaik'),
	(8, 'Tas', 'New', 'Tas dengan kualitas dan brand terbaik'),
	(9, 'Bahan Dapur', 'New', 'Bahan dapur dengan kualitas dan brand terbaik'),
	(10, 'Musik', 'New', 'Alat Musik dengan kualitas dan brand terbaik')

/* ----------- End Insert Category Data ----------- */


/* ----------- Insert Prodict Category Data ----------- */

insert into products_category  
	(id, productId, categoryId)
values
	(1, 1, 1),
	(2, 2, 2),
	(3, 3, 8),
	(4, 4, 5),
	(5, 5, 3),
	(6, 6, 3),
	(7, 7, 7),
	(8, 8, 10),
	(9, 9, 6),
	(10, 10, 6),
	(11, 11, 1),
	(12, 12, 4),
	(13, 13, 7),
	(14, 14, 9),
	(15, 15, 9),
	(16, 16, 2),
	(17, 17, 10),
	(18, 18, 4),
	(19, 19, 6),
	(20, 20, 8),
	(21, 21, 5)

/* ----------- End Insert Prodict Category Data ----------- */


/* ----------- Insert Transaction Data ----------- */

insert into transactions  
	(id, userId, productId, transactionDate, totalPrice, quantity)
values
	(1, 1, 1, '2022-04-12', 700000, 2),
	(2, 1, 3, '2022-04-12', 1000000, 4),
	(3, 1, 10, '2022-04-12', 12599000, 1),
	(4, 2, 4, '2022-04-02', 6500000, 2),
	(5, 2, 11, '2022-04-03', 3596000, 4),
	(6, 2, 6, '2022-04-03', 495000, 5),
	(7, 3, 10, '2022-04-13', 12599000, 1),
	(8, 3, 8, '2022-04-14', 6600000, 4),
	(9, 3, 11, '2022-04-13', 4495000, 5),
	(10, 4, 13, '2022-04-21', 5697000, 3),
	(11, 4, 12, '2022-04-22', 57000, 3),
	(12, 4, 18, '2022-04-22', 2598000, 2),
	(13, 5, 10, '2022-04-22', 25198000, 2),
	(14, 5, 1, '2022-04-22', 1050000, 3),
	(15, 5, 13, '2022-04-22', 3798000, 2),
	(16, 6, 8, '2022-04-17', 8250000, 5),
	(17, 6, 17, '2022-04-17', 2697000, 3),
	(18, 6, 10, '2022-04-17', 25198000, 2),
	(19, 7, 16, '2022-04-01', 1798000, 2),
	(20, 7, 10, '2022-04-01', 12599000, 1),
	(21, 7, 8, '2022-04-02', 6600000, 4),
	(22, 8, 2, '2022-04-26', 3210000, 5),
	(23, 8, 8, '2022-04-26', 6600000, 4),
	(24, 8, 10, '2022-04-26', 12599000, 1),
	(25, 9, 17, '2022-04-26', 2697000, 3),
	(26, 9, 19, '2022-04-26', 7596000, 4),
	(27, 9, 21, '2022-04-26', 2697000, 3),
	(28, 10, 10, '2022-04-11', 12599000, 1),
	(29, 10, 17, '2022-04-11', 899000, 1),
	(30, 10, 8, '2022-04-12', 1650000, 1)

/* ----------- End Insert Transaction Data ----------- */