# Site 44
cp -pr dist/* published


# Github Pages
mkdir -p docs
rm -rf docs/*
cp -pr dist/* docs/
git add docs/*
git commit -m 'Update'
git push