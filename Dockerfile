FROM node:21-alpine3.19


RUN addgroup -g 1001 -S nodejs \
  && adduser -S nestjs -u 1001 -G nodejs


WORKDIR /usr/src/app
RUN chown -R nestjs:nodejs /usr/src/app


USER nestjs


COPY --chown=nestjs:nodejs package.json package-lock.json ./


RUN npm ci


COPY --chown=nestjs:nodejs . .

EXPOSE 3000
