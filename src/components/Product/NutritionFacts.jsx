export default function NutritionFacts(props) {
  const facts = props.product.nutritionFacts.map((fact) => (
    <tr key={fact.name}>
      <td>{fact.name}</td>
      <td>{fact.value}</td>
    </tr>
  ));
  return (
    <>
      <h3>Nutrition Facts</h3>
      <table className="nutrition-facts-table">
        <tbody>{facts}</tbody>
      </table>
    </>
  );
}
