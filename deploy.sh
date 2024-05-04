rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add .  &&
git commit -m "update" && 
git branch -M main &&
git remote add origin git@github.com:wangzhou7/vue-blog-preview.git &&
git push -f -u origin main &&
cd .. 
echo https://wangzhou7.github.io/vue-blog-preview/index.html#/