import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
    url: 'https://demo.ghost.io',
    key: '22444f78447824223cefc48062',
    version: "v3"
});

export async function getPosts() {
    return await api.posts
        .browse({
            limit: "all"
        })
        .catch(err => {
            console.error(err);
        });
}

export async function getPostBySlug(slug) {
    return await api.posts
        .read({
            slug
        })
        .catch(err => {
            console.error(err);
        });
    }