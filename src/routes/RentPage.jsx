import Navbar from "./Navbar";
import Filter from "./Filter";
import Footer from "./Footer";
import ResultProperty from "./ResultProperty";
import { useFilter } from "./FilterProvider";

export default function RentPage() {
  const isNavbarStickyStyleApplied = true;
  const { filteredProperties, initialPriceRange, logFilters, clearFilters } =
    useFilter();

  return (
    <>
      <Navbar isNavbarStickyStyleApplied={isNavbarStickyStyleApplied} />
      <Filter
        logFilters={logFilters}
        clearFilters={clearFilters}
        initialPriceRange={initialPriceRange}
      />
      <h1>{filteredProperties.length} results have been found for renting</h1>
      {filteredProperties.map((property) => (
        <ResultProperty key={property._id} property={property} />
      ))}
      <Footer />
    </>
  );
}
