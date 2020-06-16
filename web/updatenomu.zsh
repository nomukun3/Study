#!/bin/zsh
find ~/Desktop/ramen/web/www/ -name ".DS_Store" -print -exec rm "{}" \;
rsync -avz --delete -e "ssh -i ~/.ssh/sakurapass" ~/Desktop/ramen/web/www/* nomutan5@nomutan5.sakura.ne.jp:~/www/
