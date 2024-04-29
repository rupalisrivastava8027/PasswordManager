import random

def password(length):
    abc = "abcefd]ghijklmnopqrstuvwxyz"
    symbols = "`~!@#$%^&*()-_=+[]|;:',<.>/?"
    numbers = "0123456789"

    categories = [abc, symbols, numbers]

    randomPassword = ""

    for i in range(length):
        randomCategory = random.randint(0, 2)

        randomChar = random.randint(0, len(categories[randomCategory]) - 1)

        randomPassword += (categories[randomCategory])[randomChar]

    return randomPassword
        

print(password(5))
