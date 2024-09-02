class Persona:
    def __init__(self, nombre=None, edad=None, carrera=None, universidad=None):
        self.nombre = nombre
        self.edad = edad
        self.carrera = carrera
        self.universidad = universidad

    def saludar(self):
        if self.nombre is None:
            return "Error: Primero debes crear un nombre."
        return f"Hola, mi nombre es {self.nombre} y tengo {self.edad} años."

    def cumpleanios(self):
        if self.edad is None:
            return "Error: Primero debes crear la edad."
        return f"¡Felicidades! tienes {self.edad} años."

    def estudiar(self):
        if self.carrera is None:
            return "Error: Primero debes crear la carrera."
        return f"Estoy estudiando {self.carrera}"

    def universidad_info(self):
        if self.universidad is None:
            return "Error: Primero debes crear la universidad."
        return f"Estoy en la {self.universidad}, la universidad con convenio con más de 300 países."

    def eliminar_saludo(self):
        if self.nombre is None:
            return "Error: El nombre ya ha sido eliminado."
        self.nombre = None
        return "Nombre eliminado."

    def eliminar_cumpleanios(self):
        if self.edad is None:
            return "Error: La edad ya ha sido eliminada."
        self.edad = None
        return "Edad eliminada."

    def eliminar_estudiar(self):
        if self.carrera is None:
            return "Error: La carrera ya ha sido eliminada."
        self.carrera = None
        return "Carrera eliminada."

    def eliminar_universidad(self):
        if self.universidad is None:
            return "Error: La universidad ya ha sido eliminada."
        self.universidad = None
        return "Universidad eliminada."


def validar_texto(input_text):
    return input_text.isalpha()


def validar_edad(input_text):
    try:
        numero = int(input_text)
        if numero < 0:
            return False, "La edad no puede ser negativa."
        if numero > 120:
            return False, "Esa edad es imposible. Intenta de nuevo."
        return True, None
    except ValueError:
        return False, "Por favor, ingresa un número válido."


def crear_nombre(persona):
    while True:
        nuevo_nombre = input("Ingresa tu nombre:")
        if validar_texto(nuevo_nombre):
            persona.nombre = nuevo_nombre
            print(persona.saludar())
            break
        else:
            print("Por favor, no ingreses caracteres especiales ni números.")


def crear_edad(persona):
    while True:
        nueva_edad = input("Ingresa tu edad:")
        es_valido, mensaje = validar_edad(nueva_edad)
        if es_valido:
            persona.edad = nueva_edad
            print(persona.cumpleanios())
            break
        else:
            print(mensaje)


def crear_carrera(persona):
    while True:
        nueva_carrera = input("Ingresa tu carrera:")
        if validar_texto(nueva_carrera):
            persona.carrera = nueva_carrera
            print(persona.estudiar())
            break
        else:
            print("Por favor, no ingreses caracteres especiales ni números.")


def crear_universidad(persona):
    while True:
        nueva_universidad = input("Ingresa tu universidad:")
        if validar_texto(nueva_universidad):
            persona.universidad = nueva_universidad
            print(persona.universidad_info())
            break
        else:
            print("Por favor, no ingreses caracteres especiales ni números.")


def modificar_nombre(persona):
    while True:
        if persona.nombre is None:
            print("Error: Primero debes crear un nombre.")
            return
        nuevo_nombre = input("Ingresa tu nueva identidad:")
        if validar_texto(nuevo_nombre):
            persona.nombre = nuevo_nombre
            print(persona.saludar())
            break
        else:
            print("Por favor, no ingreses caracteres especiales ni números.")


def modificar_edad(persona):
    while True:
        if persona.edad is None:
            print("Error: Primero debes crear la edad.")
            return
        nueva_edad = input("Ingresa tu nueva edad:")
        es_valido, mensaje = validar_edad(nueva_edad)
        if es_valido:
            persona.edad = nueva_edad
            print(persona.cumpleanios())
            break
        else:
            print(mensaje)


def modificar_carrera(persona):
    while True:
        if persona.carrera is None:
            print("Error: Primero debes crear la carrera.")
            return
        nueva_carrera = input("Ingresa la nueva carrera:")
        if validar_texto(nueva_carrera):
            persona.carrera = nueva_carrera
            print(persona.estudiar())
            break
        else:
            print("Por favor, no ingreses caracteres especiales ni números.")


def modificar_universidad(persona):
    while True:
        if persona.universidad is None:
            print("Error: Primero debes crear la universidad.")
            return
        nueva_universidad = input("Ingresa la nueva universidad:")
        if validar_texto(nueva_universidad):
            persona.universidad = nueva_universidad
            print(persona.universidad_info())
            break
        else:
            print("Por favor, no ingreses caracteres especiales ni números.")


def menu_persona():
    persona = Persona('Mateo', 18, 'Ingeniería Industrial', 'UCB')
    
    while True:
        print("\n--- Estado Actual ---")
        print(persona.saludar())
        print(persona.cumpleanios())
        print(persona.estudiar())
        print(persona.universidad_info())

        accion = input("\n¿Qué quieres hacer? (modificar/eliminar/crear/finalizar): ").lower()

        if accion == 'modificar':
            opcion = input("¿Qué quieres modificar? (nombre/edad/carrera/universidad): ").lower()
            if opcion == 'nombre':
                modificar_nombre(persona)
            elif opcion == 'edad':
                modificar_edad(persona)
            elif opcion == 'carrera':
                modificar_carrera(persona)
            elif opcion == 'universidad':
                modificar_universidad(persona)
            else:
                print("Opción no válida.")

        elif accion == 'eliminar':
            opcion = input("¿Qué quieres eliminar? (nombre/edad/carrera/universidad): ").lower()
            if opcion == 'nombre':
                print(persona.eliminar_saludo())
            elif opcion == 'edad':
                print(persona.eliminar_cumpleanios())
            elif opcion == 'carrera':
                print(persona.eliminar_estudiar())
            elif opcion == 'universidad':
                print(persona.eliminar_universidad())
            else:
                print("Opción no válida.")

        elif accion == 'crear':
            opcion = input("¿Qué quieres crear? (nombre/edad/carrera/universidad): ").lower()
            if opcion == 'nombre':
                crear_nombre(persona)
            elif opcion == 'edad':
                crear_edad(persona)
            elif opcion == 'carrera':
                crear_carrera(persona)
            elif opcion == 'universidad':
                crear_universidad(persona)
            else:
                print("Opción no válida.")

        else:
            print("Acción no válida. Por favor, intenta de nuevo.")


# Ejecución del programa
menu_persona()
