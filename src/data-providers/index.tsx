import { DataProvider } from "@pankod/refine-core";
const data = { title: "example" } as any;

export const sampleDataProvider = (): DataProvider => ({
  getList: async () => ({ data: [], total: 0 }),
  getOne: async () => ({ data }),
  create: async () => ({ data }),
  update: async () => ({ data }),
  deleteOne: async () => ({ data }),
  getApiUrl: () => "https://example.com/",
});
