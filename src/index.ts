export * from "./DynaHealthService";
export * from "./interfaces";

console.error(`
dyna-health-service: Import error
    You should import "dyna-health-service/web" or "dyna-health-service/node" (with lazy  or not) according the runtime environment.
    For typescript, you should import the types from "dyna-health-service" but functional code from web or node versions.
    More for how to import with conditional lazy load: https://github.com/aneldev/dyna-ts-module-boilerplate#how-to-import
`);
