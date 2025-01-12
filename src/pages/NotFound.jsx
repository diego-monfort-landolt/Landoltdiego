const NotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>Redirecting...</p>
      <script type="text/javascript">
        {`
          // Redirect to the base URL
          var pathname = window.location.pathname;
          var newUrl = '/' + pathname;
          window.location.replace(newUrl);
        `}
      </script>
    </div>
  );
};
export default NotFound;