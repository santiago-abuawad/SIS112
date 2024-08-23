using System.Diagnostics.Contracts;

namespace VsCode;

class Program
{
    public static void CalcularEdad()
    {
        Console.WriteLine("Decime que año naciste guapo/guapa");
        string? anioNacimientoInput = Console.ReadLine();
        if (string.IsNullOrEmpty(anioNacimientoInput))
        {
            Console.WriteLine("No me la charles pone un año de vrd");
        }
        else 
        {
            int anioNacimiento = Int32.Parse(anioNacimientoInput);
            Console.WriteLine("Tenes: "+ (2024-anioNacimiento));
        }
    }

}
