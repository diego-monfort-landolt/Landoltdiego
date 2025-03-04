import { useEffect } from 'react';

const NotFound = () => {
  useEffect(() => {
    // Redirect to the base URL
    var baseUrl = 'https://diego-monfort-landolt.github.io/Landoltdiego/';
    window.location.replace(baseUrl);
  }, []);

  return (
    <div>
      <h1>Page Not Found</h1>
      <p>Redirecting...</p>
    </div>
  );
};
export default NotFound;