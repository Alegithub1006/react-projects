const API_ENDPOINT_RANDON_CAT = `https://catfact.ninja/fact`;

export function getRandonFact() {
  return fetch(API_ENDPOINT_RANDON_CAT)
    .then((res) => res.json())
    .then((data) => {
      const { fact } = data;
      return fact;
    });
}
