#include <stdio.h>
#define LENGTH 5

int main(int argc, char const* argv[])
{
  for (int i = 0; i < LENGTH; i++) {
    for (int j = 0; j < LENGTH; j++) {
      printf("■ ");
    }
    printf("\n");
  }
  return 0;
}
