import { title } from "@/components/primitives";

export default function RecipePage() {
  return (
    <div>
      <h1 className={title()}>Recipes</h1>
      <title>MY FAVORITE FOODS</title>
      <p>
        Here is a variety of pizzas. Listed in order of my favorites to least
        favorites
      </p>
      <img
        alt="failedd"
        height="200"
        src="https://tse2.mm.bing.net/th?q=Pepperoni+Pizza+No+Background&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-US&cc=US&setlang=en&adlt=strict&t=1&mw=247"
        width="200"
      />
      <p>
        &quotDirections: Step one Preheat oven to 450°F. Combine tomato sauce,
        Parmesan cheese and oregano in small bowl; spread tomato sauce evenly
        over crust. Sprinkle pizza with mozzarella cheese; top with pepperoni.
        Step two Place on ungreased pizza pan. Bake 12 to 15 minutes or until
        edges of crust are browned lightly and cheese melts. Cut pizza into 6
        slices.&quot
      </p>
      <img
        alt="failedd"
        height="200"
        src="data:image/jpeg;base64,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"
        width="200"
      />
      <p>
        directions Place chicken pieces in a large bowl, set aside. In a medium
        bowl, stir egg, salt, pepper and 1 tablespoon oil and mix well, set
        aside. In a medium bowl, stir together 1/2 cup of the cornstarch and the
        flour. Heat oil for deep-frying in wok or deep-fryer to 375 degrees. Dip
        chicken pieces into egg mixture, then into the flour mixture, shaking
        off any excess. Add chicken to wok in small batches and fry for 3 to 4
        minutes or until golden brown. (Do not overcook chicken). Remove chicken
        from oil with slotted spoon and drain on paper towels; set aside. FOR
        THE SAUCE: In a small bowl, combine the soy sauce, orange juice, brown
        sugar and orange zest. Set aside. Clean wok and heat 15 seconds over
        high heat. Add 1 tablespoon oil, the gingerroot, garlic, crushed red
        chili pepper flakes and green onions and stir-fry for just a few seconds
        until fragrant. Now, add the rice wine and the soy sauce mixture you set
        aside above. Add cooked chicken, stirring until well mixed. In a small
        bowl, stir together the water and cornstarch, then add it to the wok and
        stir until sauce has thickened. Add sesame oil if desired. Serve over
        jasmine rice.
      </p>
      <div className="flex">
        <p className="p-5 border-solid border-1 border-red-600">child #1</p>
        <p className="p-5 border-solid border-1 border-red-700">child #2</p>
        <p className="p-5 border-solid border-1 border-red-800">child #3</p>
      </div>
    </div>
  );
}
