#include <stdio.h>

int func4(int param_1)
{
  int iVar1;
  int iVar2;
  
  if (param_1 < 2) {
    iVar2 = 1;
  }
  else {
    iVar1 = func4(param_1 + -1);
    iVar2 = func4(param_1 + -2);
    iVar2 = iVar2 + iVar1;
  }
  return (iVar2);
}

int main(void) {
	int i = 0;
	int ret;
	while (i <= 29) {
		ret = func4(i);
		if (ret == 55)
			break ;
		i++;
	}
	printf("The solution is : %d\n", i);
}
