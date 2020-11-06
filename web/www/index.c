#include <stdio.h>


int main(int argc, char const* argv[])
{
  printf("Content-Type: text/html\n\n");
  printf("<!DOCTYPE html>\n");
  printf("<html lang=\"ja\">\n");
  printf("<head>\n");
  printf("  <meta charset=\"UTF-8\">\n");
  printf("  <meta name=\"description\" content=\"\">\n");
  printf("  <meta name=\"keywords\" content=\"\">\n");
  printf("  <meta name=\"robots\" content=\"noindex,nofollow\">\n");
  printf("  <meta name=\"author\" content=\"nomutan\">\n");
  printf("  <link rel=\"stylesheet\" href=\"./css.css?2020-11-06\">");
  printf("  <title>hello</title>\n");
  printf("</head>\n");
  printf("<body>\n");
  printf("  <p>さくちゃん大好き</p>\n");
  printf("</body>\n");
  printf("</html>\n");
  return 0;
}
