export const getQueryId = (windowLocationSearch: string): string | null => {
  const urlParams = new URLSearchParams(windowLocationSearch);
  return urlParams.get("id");
};

export const fetchThrowsErrorIfNotOk = async (endpoint: string): Promise<unknown> => {
  const response = await fetch(endpoint);
  if (response.ok) {
    return response.json();
  }
  throw new Error(String(response.status));
};
