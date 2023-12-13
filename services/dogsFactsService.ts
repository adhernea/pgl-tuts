const DOGS_API_URL = 'http://dog-api.kinduff.com';
const FACTS_PATH = '/api/facts';

type JsonResponse = {
  facts: string[];
  success: boolean;
}

export const getDogsFacts = async (totalFacts: string): Promise<string[]> => {
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
  const json: JsonResponse = await response.json()

  if (json != null) {
    facts = json.facts
  }

  return facts;
}