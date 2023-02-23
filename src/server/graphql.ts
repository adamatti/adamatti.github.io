export async function query(q: string): Promise<any> {
  try {
    const query = `query {${q}}`;

    const headers = { 'Content-Type': 'application/json' };
    const url = process.env.GRAPHQL_SERVER ?? 'http://localhost:3000/';
    const response = await fetch(url, { method: 'POST', headers, body: JSON.stringify({ query }) });
    const json = await response.json();
    if (json.errors) {
      throw new Error(json.errors);
    }
    return json.data;
  } catch (error: any) {
    console.error('error calling graphql: ', error.message, error);
    throw error;
  }
}
