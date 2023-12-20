const DOGS_FACTS_API_URL = 'http://dog-api.kinduff.com';
const FACTS_PATH = '/api/facts';
const DOGS_IMGS_URL = 'https://dog.ceo/api/breeds/image/random';

type DogsFactsJsonResponse = {
  facts: string[];
  success: boolean;
}

type DogsImageJsonResponse = {
  message: string;
  status: string;
}

const getInitRequest = (httpVerb: string): RequestInit => {
  const init: RequestInit = {
    method: httpVerb,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }
  return init;
}

const getDogsImageUrl = async (): Promise<string> => {
  const response = await fetch(DOGS_IMGS_URL, getInitRequest('GET'))
  const json: DogsImageJsonResponse = await response.json()
  if (json != null) {
    return json.message
  }

  return '/assets/images/courage.png';

}

const getDogsFacts = async (totalFacts: string): Promise<string[]> => {
  let facts: string[] = [];

  const request: RequestInfo = `${DOGS_FACTS_API_URL}${FACTS_PATH}?number=${totalFacts}` ;
  const response = await fetch(request, getInitRequest('GET'))
  const json: DogsFactsJsonResponse = await response.json()

  if (json != null) {
    facts = json.facts
  }

  return facts;
}

const dogsFactsService = {
  getDogsImageUrl,
  getDogsFacts
}

export default dogsFactsService;
