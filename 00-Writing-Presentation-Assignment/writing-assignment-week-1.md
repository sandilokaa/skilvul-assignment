# **Rangkuman Web Development Basic Week 1**

Web Development Basic merupakan salah satu kegiatan yang ada di Skilvul. Tujuannya untuk berbagi ilmu mengenai apa saja yang dibutuhkan dalam pembuatan sebuah website.

## **Unix Command Line**

Terminal adalah antarmuka di mana Anda dapat mengetik dan menjalankan perintah berbasis teks.  Adapun contoh-contoh dari command line nya yang sering dipakai dijelaskan di bawah.

 - **Navigasi**
   
   1. ls (berfungsi untuk menampilkan isi dari sebuah direktori) .
   2. ls -la (berfungsi untuk menampilkan semua file termasuk file yang hidden).
   
 - **File Manipulation**
   
   1. touch (berfungsi untuk membuah sebuah file).
        ```html
        touch <file-name>
        ```

    2. cp (berfungsi untuk melakukan salin pada sebuah file).
        ```html
        cp <src_file> <dest_file> 
        ```

    3.	mv (berfungsi untuk memindahkan file maupun rename sebuah file).
        ```html
        mv <file-name> <file-name-new>
        ```
        ```html
        mv <file-name> <directory>
        ```

    4.	rm (berfungsi untuk menghapus sebuah file).
        ```html
        rm <file-name>
        ```
 - **File Manipulation**

    1.	mkdir (berfungsi untuk membuat sebuah direktori baru).
        ```html
        mkdir <direction-name>
        ```

    2.	cd (berfungsi untuk melakukan masuk atau keluar dari sebuah direktori).
        ```html
        cd <direction-name>
        ```

    3.	pwd (berfungsi untuk mengetahui dimana lokasi saat ini dalam menjalankan terminal).
        ```html
        pwd
        ```
 - **Text**

    1.	echo (untuk print sesuatu).
        ```html
        echo “saya sedang belajar unix command line”
        ```

    2.	cat (untuk print sebuah file).
        ```html
        cat <file-name>
        ```

    3.	nano (hampir sama dengan cat, bedanya nano dapat melakukan edit).
        ```html
        nano <file-name>
        ```

## **Git dan Github**

Secara singkat, Git adalah tools atau control system yang gratis dan dapat digunakan oleh programmer dan developer untuk menjalankan sebuah proyek kecil maupun besar. Sedangkan GitHub adalah layanan hos web bersama untuk proyek pengembangan perangkat lunak yang menggunakan sistem kendali versi Git dan layanan hosting internet. Di bawah ini merupakan penggunaan Git dan Github.

 - **Git Init**

   Perintah ini digunakan untuk membuat repository pada file lokal yang nantinya akan terdapat folder .git.

    ```html
    git init <project-name>
    ```

 - **Git Add**

    Perintah ini berguna untuk menambahkan file baru pada repository yang telah dipilih.

    ```html
    git add <file-name>
    ```

    atau

    ```html
    git add .
    ```

- **Git Status**

    Perintah ini berguna untuk mengetahui status dari repository lokal.

    