import { u as useNuxtApp } from '../server.mjs';

function useHead(input, options) {
  return useNuxtApp()._useHead(input, options);
}

export { useHead as u };
//# sourceMappingURL=composables.c61ed464.mjs.map
