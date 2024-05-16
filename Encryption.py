from cryptography.fernet import Fernet as crypto

class encryption:

    def __init__(self) -> None:

        self.key = crypto.generate_key()
        self.mystery = crypto(self.key)
    
    def encrypt(self, str):
        
        self.mystery.encrypt(str.encode())

    def decrypt(self, str):

        self.mystery.decrypt(str).decode()

    
        





        
        

    