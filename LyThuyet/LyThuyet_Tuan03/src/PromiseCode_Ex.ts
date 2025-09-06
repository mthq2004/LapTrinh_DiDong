async function fetchData<T>(url: string): Promise<T> {
    const rs = await fetch(url);
    return rs.json();
}
//Dung cho User
interface User{
    id: number;
    name: string;
}
//Dung cho Post
interface Post{
    id: number;
    title: string;
    body: string;
}
async function main() {
    const user = await fetchData<User>(`https://jsonplaceholder.typicode.com/users`);
    console.log("User:", user);

    const posts = await fetchData<Post>(`https://jsonplaceholder.typicode.com/posts`);
    console.log("Posts:", posts);
}
main();