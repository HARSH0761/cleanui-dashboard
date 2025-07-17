// src/components/Cards.jsx
export default function Cards() {
  const cards = [
    { title: "Users", value: "1,200" },
    { title: "Sales", value: "$15,000" },
    { title: "Visitors", value: "8,430" },
    { title: "Orders", value: "320" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
      {cards.map((card, idx) => (
        <div key={idx} className="bg-white shadow rounded-xl p-4">
          <h2 className="text-sm text-gray-500">{card.title}</h2>
          <p className="text-xl font-bold">{card.value}</p>
        </div>
      ))}
    </div>
  );
}
