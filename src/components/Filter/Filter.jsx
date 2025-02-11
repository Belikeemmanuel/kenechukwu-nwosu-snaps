import "./Filter.scss";

function Filter() {
  return (
    <div className="filter">
      <h3 className="filter__header">Filters</h3>
      <div className="filter__texts">
        <p className="filter__tags">Arizona</p>
        <p className="filter__tags">Bridge</p>
        <p className="filter__tags">Buildings</p>
        <p className="filter__tags">California</p>
        <p className="filter__tags">Cars</p>
        <p className="filter__tags">Cathedral</p>
      </div>
    </div>
  );
}

export default Filter;
