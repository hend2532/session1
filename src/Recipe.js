export default function Recipe({ name, ingredients, steps }) {
    return (
      <section id={name.toLowerCase().replace(/ /g, "-")}>
        <h1>{name}</h1>
        <ul className="ingredients">
          {ingredients.map((ingredient, i) => (
            <li key={i}>{ingredient.name}</li>
          ))}
        </ul>
        <section className="instructions" style={{ marginLeft: "20px" }}>
          <h2>Cooking Instructions</h2>
          {steps.map((step, i) => (
            <p key={i} style={{ marginLeft: "20px" }}>
              {step}
            </p>
          ))}
        </section>
      </section>
    );
  }
   
   
  