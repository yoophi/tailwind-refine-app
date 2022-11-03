import { DataProvider } from "@pankod/refine-core";
import mockPosts from "../data/mock-posts.json";

const data = { title: "example" } as any;

export const sampleDataProvider = (): DataProvider => ({
  getList: async (...args) => {
    console.log({ args });
    console.log({
      data: mockPosts.slice(0, 10) as any[],
      total: mockPosts.length,
    });
    return { data: mockPosts.slice(0, 10) as any[], total: mockPosts.length };
  },
  getOne: async () => ({ data }),
  create: async () => ({ data }),
  update: async () => ({ data }),
  deleteOne: async () => ({ data }),
  getApiUrl: () => "https://example.com/",
});
