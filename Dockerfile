ARG DOCKER_BASE_IMAGE
ARG DOCKER_BASE_TAG

# ===================================================
# Build Project Image
# ===================================================
FROM ${DOCKER_BASE_IMAGE}:${DOCKER_BASE_TAG} AS builder

WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .

RUN npm run build

COPY src/views dist/views/
COPY src/public dist/public/

#if no data/default.json is present, we create one from the template
RUN mkdir -p dist/data/
RUN test ! -f dist/data/default.json && cp src/data/template_default.json dist/data/default.json || true

FROM ${DOCKER_BASE_IMAGE}:${DOCKER_BASE_TAG}
WORKDIR /app
COPY --from=builder /app/dist dist/
COPY --from=builder /app/node_modules node_modules/

COPY package.json .
EXPOSE 3000
ENV NODE_ENV=production
CMD [ "node", "dist/Server.js" ]