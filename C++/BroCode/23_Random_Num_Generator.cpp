#include <iostream>
#include <ctime>

int main(){

    // pseudo-random = not truly random, but close

    srand(time(NULL));

    int num1 = (rand() % 6) + 1; // modulus 6 (6-sized dice)
    int num2 = (rand() % 6) + 1;
    int num3 = (rand() % 6) + 1;

    std::cout << num1 << "\n";
    std::cout << num2 << "\n";
    std::cout << num3 << "\n";
    
    return 0;
}