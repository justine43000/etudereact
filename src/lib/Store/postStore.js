import { create } from "zustand";

export const postStore = create((set) => ({
  posts: [],
  currentPost: null,
  setPosts: (posts) => set({ posts }),
  setCurrentPost: (currentPost) => set({ currentPost }),
  removePost: (id) => {
    set((state) => ({
      posts: state.posts.filter((eleme) => eleme.id !== id),
    }));
  },
  updatePost: (post) => {
    set((state) => ({
      posts: state.posts.map((eleme) => {
        if (eleme.id !== post.id) return eleme;

        return post;
      }),
    }));
  },
  addPost: (post) => {
    set((state) => {
      const postComplete = {
        ...post,
        userId: 1,
        id:
          state.posts.reduce((previous, item) => {
            if (item.id > previous) return item.id;

            return previous;
          }, 0) + 1,
      };

      console.log([postComplete, ...state.posts]);
      return {
        posts: [postComplete, ...state.posts],
      };
    });
  },
}));
