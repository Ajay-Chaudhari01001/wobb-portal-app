import "./FilterSection.css";

const FilterSection = ({ activeFilter, setActiveFilter }) => {
    const filters = ["All", "Applied", "Hired", "Closed"];

    return (
        <div className="filter-section container">
            {filters.map((filter) => (
                <button
                    key={filter}
                    className={`filter-button ${activeFilter === filter ? "active" : ""}`}
                    onClick={() => setActiveFilter(filter)}
                    aria-pressed={activeFilter === filter}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
};

export default FilterSection;
