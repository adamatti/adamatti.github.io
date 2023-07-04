import { getPosts, getPost, getTags } from './blog-posts';

describe('Blog post repository', () => {
  it('should return all posts', () => {
    const posts = getPosts();
    expect(posts).toBeTruthy();

    // All get posts should work
    posts.forEach((post) => {
      expect(post.slug).toBeTruthy();
      const result = getPost(post.slug);
      expect(result).toBeTruthy();
    });
  });

  it('should return tags', () => {
    const tags = getTags();
    expect(tags).toBeTruthy();
  });
});
