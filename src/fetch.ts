const preUrl = 'http://127.0.0.1:4523/m1/5398507-5072149-default';

export async function get<T>(url = ''): Promise<T> {
  const headers = new Headers({
    'Content-Type': 'application/json;charset=utf-8',
  });

  const response = await fetch(`${preUrl}${url}`, {
    method: 'GET',
    headers,
    redirect: 'follow',
  });

  return response.json();
}
