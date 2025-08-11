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
COPY src/views dist/views/
COPY src/public dist/public/
RUN mkdir -p dist/data/

RUN npm run build

FROM ${DOCKER_BASE_IMAGE}:${DOCKER_BASE_TAG}
WORKDIR /app
COPY --from=builder /app/start.sh start.sh
COPY --from=builder /app/dist dist/
COPY --from=builder /app/src/data/template_default.json template_default.json
COPY --from=builder /app/node_modules node_modules/

COPY package.json .
EXPOSE 3000
ENV NODE_ENV=production
RUN chmod +x ./start.sh
CMD [ "./start.sh" ]