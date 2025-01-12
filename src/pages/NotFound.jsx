const NotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>Redirecting...</p>
      <script type="text/javascript">
        {`
          var baseUrl = 'https://diego-monfort-landolt.github.io/Landoltdiego/'; 
          window.location.replace(baseUrl);
        `
        }
      </script>
    </div>
  );
};
export default NotFound;