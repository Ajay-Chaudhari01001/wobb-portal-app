import { useState, useEffect } from "react";
import FilterSection from "../components/filterSection/FilterSection";
import CampaignCard from "../components/campaignCard/CampaignCard";
import campaignsData from "../data/campaign.json";

const Home = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [filteredCampaigns, setFilteredCampaigns] = useState(campaignsData);
    console.log(campaignsData)
    useEffect(() => {
        if (activeFilter === "All") {
            setFilteredCampaigns(campaignsData);
        } else {
            setFilteredCampaigns(
                campaignsData.filter((campaign) => campaign.type === activeFilter)
            );
        }
    }, [activeFilter]);

    return (
        <>
            <div className="contaner flex"><FilterSection activeFilter={activeFilter} setActiveFilter={setActiveFilter} /></div>
            <div className="container flex" style={{ flexWrap: "wrap", justifyContent: "center", gap: "2rem" }}>
                {filteredCampaigns.map((campaign) => (
                    <CampaignCard key={campaign.id} campaign={campaign} />
                ))}
            </div>
        </>
    );
};

export default Home;
