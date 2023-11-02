#!/usr/bin/env python3


from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time  
import random
import os
from faker import Faker
from fake_useragent import UserAgent
from undetected_chromedriver import Chrome, ChromeOptions
import keyboard
import shutil
from selenium.webdriver.common.action_chains import ActionChains
from selenium.common.exceptions import TimeoutException  # Menambahkan ini



def register_new_account():
    print("-" * 40)  # Garis pemisah atau pesan kosong

    def delete_folders(folder_paths):
        for folder_path in folder_paths:
            try:
                # Dapatkan nama folder terakhir dari jalur folder
                folder_name = os.path.basename(folder_path)

                # Hapus folder dan seluruh isinya
                shutil.rmtree(folder_path)
                print(f"Folder {folder_name} berhasil dihapus.")
            except Exception as e:
                print(f"Folder {folder_name} tidak ditemukan")

    # Contoh penggunaan:
    folder1_path = "/Users/triagung/Documents/RumblePy-main/Chrome/Profile 80/Sessions"  # Ganti dengan jalur folder pertama yang ingin Anda hapus
    folder2_path = "/Users/triagung/Documents/RumblePy-main/Chrome/Profile 80/Cache"  # Ganti dengan jalur folder kedua yang ingin Anda hapus

    folders_to_delete = [folder1_path, folder2_path]
    delete_folders(folders_to_delete)

    # Inisialisasi objek UserAgent
    ua = UserAgent()

    # Tentukan jalur ke folder ekstensi uBlock Origin

    # Buat options untuk Chrome WebDriver
    options = webdriver.ChromeOptions()
    #options.add_argument("--window-size=1743,1320")
    #options.add_argument('--headless')
    options.add_argument('--user-data-dir=/Users/triagung/Documents/RumblePy-main/Chrome')
    options.add_argument('--profile-directory=Profile 80')
    options.add_argument("--incognito");
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-blink-features=AutomationControlled")
    options.add_argument("--disable-web-security")  # Opsi untuk menjaga browser tetap terbuka

    # Atur user agent dengan yang palsu
    options.add_argument(f'user-agent={ua.random}')
    # Configure the proxy with authentication
    # Inisialisasi Chrome WebDriver dengan options
    driver = webdriver.Chrome(options=options)


    ''' MOHMAL
    # 1. Buka tab pertama untuk Mohmal dan dapatkan alamat email acak
    driver.get("https://www.mohmal.com/en/inbox")

    try:
        # Tunggu hingga elemen dengan atribut "data-email" muncul (alamat email)
        email_element = driver.find_element(By.CSS_SELECTOR, '[data-clipboard-target="#email .email"]')
        email = email_element.get_attribute("data-email")  # Ambil alamat email dari atribut data-email

        if email:
            print("Alamat Email Mohmal:", email)
        else:
            print("Alamat email tidak ditemukan.")
    except Exception as e:
        print(f"Terjadi kesalahan saat mengambil alamat email: {str(e)}")
    '''

    # Buka situs web mail.tm
    time.sleep(8)
    driver.set_window_size(1743, 1320)  # Sesuaikan dengan resolusi yang Anda inginkan

    driver.get("https://mail.gw/en/")

    # Temukan dan klik tombol "Create Account" (dalam halaman bahasa Inggris)
    # Tunggu sebentar untuk memuat halaman pendaftaran
    time.sleep(5)

    # Dapatkan alamat email yang ditampilkan pada halaman pendaftaran
    #email = driver.find_element(By.ID, "DontUseWEBuseAPI").get_attribute("value")
    email = driver.find_element(By.ID, "address").get_attribute("value")

    print("Alamat Email: " + email)





    # 2. Buka tab kedua untuk situs web Rumble
    driver.execute_script("window.open('https://rumble.com/register.php', 'new tab')")  # Buka tab baru

    # 3. Isi formulir pendaftaran di situs web Rumble dengan alamat email dari Mohmal
    main_window = driver.window_handles[0]  # Handle tab utama (Mohmal)
    new_tab = driver.window_handles[1]  # Handle tab baru (Rumble)
    driver.switch_to.window(new_tab)


    def generate_random_day():
        return str(random.randint(1, 28))

    # Daftar nama bulan
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    # Fungsi untuk memilih bulan acak dari daftar nama bulan
    def generate_random_month():
        return random.choice(months)

    # Fungsi untuk menghasilkan tahun acak antara 1995 dan 2003
    def generate_random_year():
        return str(random.randint(1995, 2003))

    # Inisialisasi objek Faker
    fake = Faker('en_US')  # Menggunakan bahasa Inggris Australia

    # Menampilkan 1 nama orang Australia secara acak
    nama = fake.first_name() + ' ' + fake.last_name()

    # Gabungkan nama acak dan kata kunci acak untuk membuat username
    username = nama.lower().replace(" ", "") + str(random.randint(1, 100))

    # Isi formulir pendaftaran
    # email = username + "@gmail.com"
    password = "P455word"
    country = "United State"
    day = generate_random_day()
    month = generate_random_month()
    year = generate_random_year()

    # name_field = driver.find_element_by_name("name")
    name_field = driver.find_element(By.NAME, "name")
    username_field = driver.find_element(By.NAME, "username")
    email_field = driver.find_element(By.NAME, "email")
    confirm_email_field = driver.find_element(By.NAME, "retype_email")
    password_field = driver.find_element(By.NAME, "password")
    confirm_password_field = driver.find_element(By.NAME, "retype_password")
    country_field = driver.find_element(By.NAME, "countryID")
    day_field = driver.find_element(By.NAME, "birthday-day")
    month_field = driver.find_element(By.NAME, "birthday-month")
    year_field = driver.find_element(By.NAME, "birthday-year")

    name_field.send_keys(nama)
    username_field.send_keys(username)
    email_field.send_keys(email)
    confirm_email_field.send_keys(email)
    password_field.send_keys(password)
    confirm_password_field.send_keys(password)
    country_field.send_keys(country)
    day_field.send_keys(day)
    month_field.send_keys(month)
    year_field.send_keys(year)


    try:
        checkbox = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, 'label[for="terms"]')))
        
        # Periksa apakah checkbox saat ini tidak dicentang
        if not checkbox.is_selected():
            checkbox.click()  # Lakukan centang pada checkbox jika belum dicentang
    except:
        print("Gagal menemukan atau mengklik checkbox")

    time.sleep(1)

    # Temukan tombol "Register" menggunakan metode yang sesuai (misalnya, dengan ID atau CSS selector)
    register_button = driver.find_element(By.ID, "registerBtn")

    # Klik tombol "Register"
    register_button.click()
    time.sleep(5)
    
    #BUSTER BYPASS CAPCAY
    # Temukan titik koordinat yang ingin Anda klik (misalnya, X=100, Y=200)
    x_coordinate = 797
    y_coordinate = 555
   
    # Buat objek ActionChains
    actions = ActionChains(driver)
    # Klik pada koordinat yang ditentukan
    actions.move_by_offset(x_coordinate, y_coordinate).click().perform()

   
    time.sleep(10)

    
    
    driver.switch_to.window(main_window)
    timeout = 2

    attempts = 0  # Inisialisasi hitungan percobaan

    while attempts < 10:
        try:
            rumble_link = WebDriverWait(driver, timeout).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, 'a[href*="view"]'))
            )
            rumble_link.click()
            break  # Keluar dari loop jika tautan berhasil ditemukan dan diklik
        except TimeoutException:
            print("Email verif belum masuk, tunggu 5detik lagi.")
            time.sleep(5)  # Menunggu beberapa detik sebelum mencoba lagi
            attempts += 1  # Menginkremen hitungan percobaan

    if attempts == 10:
        print("Percobaan mencari tautan email verifikasi mencapai batas maksimal. Melanjutkan ke registrasi akun baru...")
        driver.quit()
        time.sleep(5)
        register_new_account()
    
    time.sleep(3)

    # Temukan iframe berdasarkan ID
    iframe = driver.find_element(By.ID, "iFrameResizer0")

    # Beralih (switch) ke iframe
    driver.switch_to.frame(iframe)

    # Sekarang Anda dapat mencari dan mengklik tautan di dalam iframe
    rumble_link = driver.find_element(By.PARTIAL_LINK_TEXT, "Click here to activate your account")
    rumble_link.click()

    # Kembali ke luar iframe jika diperlukan
    driver.switch_to.default_content()

    time.sleep(1)

    # Kunjungi situs web yang memberikan informasi IP
    driver.get("https://icanhazip.com/")

    # Alamat IP diberikan dalam body halaman, jadi ambil seluruh isi body
    ip = driver.find_element(By.TAG_NAME, "body").text

    # Cetak alamat IP
    print("IP Address:", ip)
    time.sleep(1)
    # Tentukan folder tempat Anda ingin menyimpan file
    folder_path = "/Users/triagung/Desktop/email_data"
    if not os.path.exists(folder_path):
        os.mkdir(folder_path)


    # Simpan email_address ke dalam file .txt
    nama_file = os.path.join(folder_path, email+".txt")

    with open(nama_file, "w") as file:
        file.write(email)


    # Hitung mundur timeout (dalam detik)
    timeout = 30
    for i in range(timeout, 0, -1):
        print(f"Timeout in {i} seconds. Press Space to skip.", end='\r')
        time.sleep(1)
        if keyboard.is_pressed("space"):
            print("\nTimeout skipped.")
            break
    else:
        print("\nRestart Process.")

    # Melakukan driver.quit() setelah timeout atau skip
    driver.quit()
    time.sleep(5)

# Loop utama
while True:
    register_new_account()
