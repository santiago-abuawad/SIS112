class Entero:
    def __init__(self, Numero):
        self.Num = Numero

    def setNum(self):
        input_value = input("Enter a number: ")
        self.Num = int(input_value)

    def getNum(self):
        return self.Num

    def showNum(self):
        print(f"El número actual es: {self.getNum()}")

    def incrementarNum(self):
        self.Num += 1

    def decrementarNum(self):
        self.Num -= 1

    def esParImpar(self):
        return self.Num % 2 == 0

    def esPerfecto(self):
        suma = 0
        for i in range(1, self.Num):
            if self.Num % i == 0:
                suma += i
        return suma == self.Num

    def esPrimo(self):
        if self.Num <= 1:
            return False
        if self.Num <= 3:
            return True
        if self.Num % 2 == 0 or self.Num % 3 == 0:
            return False
        i = 5
        while i * i <= self.Num:
            if self.Num % i == 0 or self.Num % (i + 2) == 0:
                return False
            i += 6
        return True

    def fibonacci(self):
        limit = self.Num
        if limit < 0:
            return []
        
        fib_secuencia = []
        a, b = 0, 1
        
        while a <= limit:
            fib_secuencia.append(a)
            a, b = b, a + b
        
        return fib_secuencia

    def menu(self):
        while True:
            print("\nMenu")
            print("1. Establecer un nuevo número")
            print("2. Mostrar el número actual")
            print("3. Incrementar el número")
            print("4. Decrementar el número")
            print("5. Verificar si es par o impar")
            print("6. Verificar si es perfecto")
            print("7. Verificar si es primo")
            print("8. Mostrar la secuencia de Fibonacci")
            print("9. Botame")

            opcion = input("Ingrese una opción: ")

            if opcion == "1":
                self.setNum()
            elif opcion == "2":
                self.showNum()
            elif opcion == "3":
                self.incrementarNum()
                self.showNum()
            elif opcion == "4":
                self.decrementarNum()
                self.showNum()
            elif opcion == "5":
                if self.esParImpar():
                    print("El número es par.")
                else:
                    print("El número es impar.")
            elif opcion == "6":
                if self.esPerfecto():
                    print("El número es perfecto.")
                else:
                    print("El número no es perfecto.")
            elif opcion == "7":
                if self.esPrimo():
                    print("El número es primo.")
                else:
                    print("El número no es primo.")
            elif opcion == "8":
                fib_sequence = self.fibonacci()
                print(f"Secuencia de Fibonacci: {fib_sequence}")
            elif opcion == "9":
                print("Me voy, chau pescau. ")
                break
            else:
                print("Opción inválida, intente nuevamente.")

numero = Entero(10)
numero.menu()
