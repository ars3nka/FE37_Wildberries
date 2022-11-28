export const cardPath = 'https://637910567419b414df8975c2.mockapi.io/card';

export async function getData(url) {
  const result = await fetch(url);
  if (!result.ok) {
    throw new Error('Ошибка запрса, попробуйте еще раз позже!');
  }
  return await result.json();
}
