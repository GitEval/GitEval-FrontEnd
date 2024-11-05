const preUrl = 'http://127.0.0.1:4523/m1/5398507-5072149-default';

export async function get<T>(url = '', isToken: boolean): Promise<T> {
  const headers = new Headers({
    'Content-Type': 'application/json;charset=utf-8',
  });
  if (isToken) {
    const token = localStorage.getItem('token');
    if (token) headers.append('Authorization', token);
  }

  const response = await fetch(`${preUrl}${url}`, {
    method: 'GET',
    headers,
  });
  if (!response.ok) {
    if (response.status === 401) {
      throw new Error('401');
    } else if (response.status === 400) {
      const errorData = (await response.json()) as { code: number; msg: string };
      throw new Error(`${errorData.code}`);
    }
  }
  console.log(response);
  return response.json();
}
