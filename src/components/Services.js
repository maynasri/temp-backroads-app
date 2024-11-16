import Title from "./Title";
import { services } from "../data";
import Service from "./service";

const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="section-title">
        <Title title="our" subTitle="services" />
      </div>
      <div className="section-center services-center">
        {services.map((service) => (
          <Service key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
};
export default Services;
