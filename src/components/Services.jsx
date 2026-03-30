const Services = () => {
  return (
    <section className="px-10 py-20">
      <h3 className="text-center text-3xl mb-12">
        My <span className="text-accent">specialities</span>
      </h3>

      <div className="grid md:grid-cols-3 gap-6">
        {["Email Marketing", "Market Analysis", "Keyword Research"].map(
          (item) => (
            <div
              key={item}
              className="bg-card p-6 rounded-xl hover:border hover:border-accent transition"
            >
              <h4 className="text-lg mb-3">{item}</h4>
              <p className="text-gray-400 text-sm">
                High quality service focused on business growth and modern design.
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Services;
