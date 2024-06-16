export default function getFetch(typePhoto) {
  const url = `https://pixabay.com/api/?key=44327397-ede54b0a70b202831c7c411c5&q=${typePhoto}&image_type=photo
  &orientation=horizontal&safesearch=true`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
