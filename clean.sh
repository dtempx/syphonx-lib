rm -rf dist
rm -rf dist
rm *.js
rm *.js.map
rm *.d.ts
find ./test -name "*.js" -type f -delete
find ./test -name "*.js.map" -type f -delete
find ./test -name "*.d.ts" -type f -delete
