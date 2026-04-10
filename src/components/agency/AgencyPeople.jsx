import AgencyPerson from "./AgencyPerson";
import { agencyPeople } from "./data";
const AgencyPeople = () => {
  return (
    <div>
      <div>
        {agencyPeople.map((item) => (
          <AgencyPerson name={item.name} role={item.role} />
        ))}
      </div>
    </div>
  );
};

export default AgencyPeople;
