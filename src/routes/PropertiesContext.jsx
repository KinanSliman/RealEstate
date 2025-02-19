import { createContext, useState, useEffect } from "react";

const PropertiesContext = createContext();

export const PropertiesProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          "https://realestate-8mpv.onrender.com/api/properties"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <PropertiesContext.Provider value={{ properties, isLoading, error }}>
      {children}
    </PropertiesContext.Provider>
  );
};

export default PropertiesContext;
