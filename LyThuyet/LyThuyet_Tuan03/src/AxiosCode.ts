import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
}

async function getPost(id:number): Promise<Post> {
    const {data} = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return data;
}

async function testFetchPost() {
    try {
        const post = await getPost(1);
        console.log("Post:", post);
        console.log('Fetched post: ', post)
    } catch (e) {
        console.error(e)
    }   
}

testFetchPost();