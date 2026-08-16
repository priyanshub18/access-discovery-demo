FROM node:22-alpine
WORKDIR /app
COPY package.json expected-findings.json ./
COPY scripts ./scripts
COPY src ./src
COPY .env.example ./.env.example
USER node
CMD ["node", "scripts/validate-fixture.mjs"]
