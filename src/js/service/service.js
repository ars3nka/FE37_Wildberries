export async function getData(url){
    const result = await fetch(url);
    if (!result.ok) {
        throw new Error('Ошибка запрса, попробуйте еще раз позже!');
    } 
    return await result.json()
}