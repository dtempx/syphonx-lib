npx tsc
npx tsc -p tsconfig.esm.json
echo '{"type":"module"}' > dist/esm/package.json
npx tsc -p tsconfig.cjs.json
echo '{"type":"commonjs"}' > dist/cjs/package.json
