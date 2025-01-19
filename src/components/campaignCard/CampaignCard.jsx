import "./CampaignCard.css";

const CampaignCard = ({ campaign }) => {
    const { brand, description, payout, type, image, progress, hired, total } = campaign;

    return (
        <div className="campaign-card">
            {/* Campaign Visual */}
            <div className="campaign-visual">
                <img src={image} alt={`${brand} campaign`} className="campaign-image" />
                <div className="campaign-overlay">
                    <p className="campaign-title">{brand}</p>
                    <p className="campaign-description">{description}</p>
                </div>
            </div>

            {/* Campaign Details */}
            <div className="campaign-details">
                <div className="campaign-header">
                    <h3 className="brand-name">{brand}</h3>
                    <button className="status-button">{type}</button>
                </div>
                <p className="payout-info">Barter Worth</p>
                <p className="payout-amount">INR {payout}</p>

                {/* Progress Bar */}
                <div className="progress-bar-container">
                    <div
                        className="progress-bar"
                        style={{ width: `${(hired / total) * 100}%` }}
                    ></div>
                </div>
                <p className="hired-info">{hired}/{total} Hired</p>
            </div>
        </div>
    );
};

export default CampaignCard;
