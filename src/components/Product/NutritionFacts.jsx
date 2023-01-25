export default function NutritionFacts(props) {
  const nutritionFacts = props.product.nutritionFacts.map((nutritionFacts) => (
    <tr key={nutritionFacts.name}>
      <td>{nutritionFacts.name}</td>
      <td>{nutritionFacts.value}</td>
    </tr>
  ));

  return (
    <>
      <h3>Nutrition Facts</h3>
      <table className="nutrition-facts-table">
        <tbody>{nutritionFacts}</tbody>
      </table>
    </>
  );
}
