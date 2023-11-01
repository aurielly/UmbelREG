from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time  # Import modul time
import random
import os
from faker import Faker
from fake_useragent import UserAgent
from undetected_chromedriver import Chrome, ChromeOptions


# Inisialisasi objek UserAgent
ua = UserAgent()

# Tentukan jalur ke folder ekstensi uBlock Origin
ublock_origin_extension_path = '~/Documents/ext/ublock'

# Buat options untuk Chrome WebDriver
options = webdriver.ChromeOptions()
options.add_argument("--no-sandbox")
options.add_argument("--disable-blink-features=AutomationControlled")
options.add_argument("--disable-web-security")  # Opsi untuk menjaga browser tetap terbuka
options.add_argument(f'--load-extension={ublock_origin_extension_path}')
# Atur user agent dengan yang palsu
options.add_argument(f'user-agent={ua.random}')
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
driver.get("https://mail.tm/en/")

# Temukan dan klik tombol "Create Account" (dalam halaman bahasa Inggris)
# Tunggu sebentar untuk memuat halaman pendaftaran
time.sleep(3)

# Dapatkan alamat email yang ditampilkan pada halaman pendaftaran
email = driver.find_element(By.ID, "DontUseWEBuseAPI").get_attribute("value")
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
fake = Faker('en_AU')  # Menggunakan bahasa Inggris Australia

# Menampilkan 1 nama orang Australia secara acak
nama = fake.first_name() + ' ' + fake.last_name()

# Gabungkan nama acak dan kata kunci acak untuk membuat username
username = nama.lower().replace(" ", "") + str(random.randint(1, 100))

# Isi formulir pendaftaran
# email = username + "@gmail.com"
password = "Apaaja14"
country = "Australia"
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

# Tentukan folder tempat Anda ingin menyimpan file
folder_path = "email_data"
if not os.path.exists(folder_path):
    os.mkdir(folder_path)


# Simpan email_address ke dalam file .txt
nama_file = os.path.join(folder_path, email+".txt")

with open(nama_file, "w") as file:
    file.write(email)


input("Press Enter to close the browser...")
driver.quit()
