import axios from 'axios';
const baseUrl = 'http://localhost:8000'

async function deletePost(object) {
    const request = await axios.delete(`${baseUrl}/posts/${object.id}`);
    console.log(request);
}

async function getNewPosts() {
    const request = await axios.get(`${baseUrl}/posts`);
    return request.data;
}

async function scrapeNewPosts() {
    const request = await axios.get(`${baseUrl}/scrape`);
    return request.data;
}

async function savePost(object) {
    const savedPost = await axios.put(`${baseUrl}/posts/${object.id}`, object);
    return savedPost.data;
}

async function getSavedPosts() {
    const savedPosts = await axios.get(`${baseUrl}/posts/saved`);
    return savedPosts.data;
}

export default {getNewPosts, scrapeNewPosts, savePost, getSavedPosts, deletePost};