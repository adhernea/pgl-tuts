const DOGS_API_URL = 'http://dog-api.kinduff.com';
const FACTS_PATH = '/api/facts';

export const getDogsFacts = async (totalFacts: number): Promise<string[]> => {
  let facts: string[] = [];

  const request: RequestInfo = `${DOGS_API_URL}${FACTS_PATH}?number=${totalFacts}` ;
  const init: RequestInit = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }
  const response = await fetch(request, init)
  const json = await response.json()
  if (json != null) {
    facts = json.facts
  }

  return facts;
}