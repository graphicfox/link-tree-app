test ! -f dist/data/default.json && cp dist/data/template_default.json dist/data/default.json || true
node dist/Server.js