test ! -f dist/data/default.json && cp template_default.json dist/data/default.json && rm template_default.json || true
node dist/Server.js