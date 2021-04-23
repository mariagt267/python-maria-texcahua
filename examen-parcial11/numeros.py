while True:
    numero = input("INTRODUZCA UN NUMERO: ")
    try:

        val = int(numero)
        if val == 0:
            print('CERO')
            break

        elif val > 0:
            print('POSITIVO')
            break

        elif val < 0:
            print('NEGATIVO')
            break


    except ValueError:
        print("ERROR")
        break
