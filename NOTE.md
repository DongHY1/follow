# Prepare
## Set up DB and Redis
```
docker-compose up -d 
```
## Add Monorepo
+ package.json
```

```
> The “-W” flag tells Yarn to add the dependencies to the workspace itself
```
yarn add -W -D concurrently wsrun
```
# Server
## init
```
yarn init -y && yarn add -D typescript && npx tsc --init 
```
## Add Trpc
```
yarn add @trpc/server cors dotenv express @prisma/client redis && yarn add -D prisma @types/cors morgan @types/morgan ts-node-dev
```