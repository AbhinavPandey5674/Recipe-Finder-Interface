const RECIPES = [
 
  // ── BREAKFAST (4) ──
  { id:1, title:'Masala Dosa', category:'Breakfast', difficulty:'Medium', time:40, servings:4, likes:389, comments:42, chef:true, author:'Chef Meena Iyer',
    image:'https://www.yummyfoodrecipes.com/resources/picture/org/Karnataka-Style-Masala-Dosa.jpg',
    description:'Crispy, golden South Indian crepe from fermented rice-lentil batter, filled with spiced potato masala. A breakfast classic loved across every corner of India.',
    tags:['South Indian','Breakfast','Crispy'],
    ingredients:[{qty:'2 cups',name:'dosa batter (fermented)'},{qty:'3',name:'potatoes, boiled & mashed'},{qty:'1',name:'onion, finely chopped'},{qty:'2',name:'green chillies, chopped'},{qty:'1 tsp',name:'mustard seeds'},{qty:'½ tsp',name:'turmeric powder'},{qty:'8-10',name:'curry leaves'},{qty:'2 tbsp',name:'oil'},{qty:'to taste',name:'salt'}],
    instructions:['Heat a cast iron tawa on medium-high. Sprinkle water — it should sizzle immediately.','Pour a ladle of batter and spread in concentric circles into a thin crepe.','Drizzle oil around the edges; cook until golden and crispy on the bottom.','For masala: temper mustard seeds in oil, add onion, chillies, curry leaves and sauté.','Add mashed potatoes, turmeric, salt; mix well. Place filling on dosa.','Fold dosa over filling and serve hot with coconut chutney and sambar.'] },
 
  { id:2, title:'Aloo Paratha', category:'Breakfast', difficulty:'Easy', time:30, servings:3, likes:312, comments:27, chef:false, author:'Gurpreet Kaur',
    image:'https://www.mintsrecipes.com/wp-content/uploads/Aloo-ka-paratha-Pinterest.jpg',
    description:'Punjabi whole wheat flatbread stuffed with spiced mashed potato. Served piping hot with white butter and yogurt — the ultimate North Indian breakfast.',
    tags:['Punjabi','Breakfast','Filling'],
    ingredients:[{qty:'2 cups',name:'whole wheat flour'},{qty:'3',name:'large potatoes, boiled & peeled'},{qty:'1 tsp',name:'ajwain (carom seeds)'},{qty:'1 tsp',name:'red chilli powder'},{qty:'1 tsp',name:'amchur (dry mango powder)'},{qty:'2 tbsp',name:'fresh coriander, chopped'},{qty:'2',name:'green chillies, finely chopped'},{qty:'',name:'butter for cooking'}],
    instructions:['Knead wheat flour with water and a pinch of salt into a soft dough. Rest 20 minutes.','Mash boiled potatoes; mix in all spices, coriander and chillies.','Divide dough into balls. Roll each out, place potato filling in centre.','Bring edges together, seal, and gently roll out to a flat circle.','Cook on a hot tawa with butter until golden-brown spots appear on both sides.','Serve immediately with white butter, yogurt and mango pickle.'] },
 
  { id:3, title:'Idli Sambar', category:'Breakfast', difficulty:'Medium', time:35, servings:4, likes:278, comments:31, chef:true, author:'Chef Lakshmi Rao',
    image:'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=700&q=80',
    description:'Soft, pillowy steamed rice cakes served with aromatic toor dal sambar and coconut chutney. The quintessential South Indian breakfast — light and nourishing.',
    tags:['South Indian','Steamed','Healthy'],
    ingredients:[{qty:'2 cups',name:'idli batter (fermented)'},{qty:'1 cup',name:'toor dal'},{qty:'2',name:'tomatoes, chopped'},{qty:'1',name:'onion, chopped'},{qty:'1 tbsp',name:'sambar powder'},{qty:'1 tsp',name:'tamarind paste'},{qty:'1 tsp',name:'mustard seeds'},{qty:'handful',name:'curry leaves'},{qty:'2 tbsp',name:'oil'}],
    instructions:['Pour idli batter into greased moulds; steam 10–12 minutes until a toothpick comes out clean.','Boil toor dal until soft; mash lightly.','In a pan, temper mustard seeds and curry leaves; add onion and tomatoes. Cook down.','Add sambar powder, tamarind paste and mashed dal; simmer 10 minutes.','Adjust consistency with water; add salt.','Serve hot idlis dunked in sambar with coconut chutney.'] },
 
  { id:4, title:'Poha', category:'Breakfast', difficulty:'Easy', time:15, servings:2, likes:245, comments:18, chef:false, author:'Sunita Joshi',
    image:'https://pipingpotcurry.com/wp-content/uploads/2020/12/Poha-Recipe-indori-Piping-Pot-Curry.jpg',
    description:'Light, fluffy flattened rice cooked with onions, mustard seeds, turmeric and fresh coriander. A quick, nutritious Maharashtrian breakfast ready in 15 minutes.',
    tags:['Maharashtrian','Quick','Light'],
    ingredients:[{qty:'2 cups',name:'thick poha (flattened rice)'},{qty:'1',name:'onion, finely chopped'},{qty:'1 tsp',name:'mustard seeds'},{qty:'½ tsp',name:'turmeric powder'},{qty:'2',name:'green chillies, slit'},{qty:'8',name:'curry leaves'},{qty:'2 tbsp',name:'oil'},{qty:'1 tbsp',name:'lemon juice'},{qty:'2 tbsp',name:'fresh coriander, chopped'}],
    instructions:['Rinse poha in a colander under running water; leave to drain for 5 minutes.','Heat oil in a pan; add mustard seeds and let them splutter.','Add curry leaves, green chillies and onion; sauté until onion is soft.','Add turmeric powder and the drained poha; mix gently to combine.','Add salt and lemon juice; stir without breaking the poha.','Garnish with fresh coriander and serve hot.'] },
 
  // ── LUNCH (3) ──
  { id:5, title:'Dal Tadka', category:'Lunch', difficulty:'Easy', time:30, servings:4, likes:334, comments:29, chef:false, author:'Ramesh Verma',
    image:'https://www.jcookingodyssey.com/wp-content/uploads/2023/06/dhaba-style-dal-fry.jpg',
    description:'Silky yellow toor dal finished with a sizzling smoky ghee tadka of garlic, cumin and red chillies. Pure Indian comfort food at its finest.',
    tags:['Indian','Dal','Comfort Food'],
    ingredients:[{qty:'1 cup',name:'toor dal (split pigeon peas)'},{qty:'2',name:'tomatoes, chopped'},{qty:'1',name:'onion, finely chopped'},{qty:'1 tbsp',name:'ginger-garlic paste'},{qty:'½ tsp',name:'turmeric'},{qty:'1 tsp',name:'red chilli powder'},{qty:'3 tbsp',name:'ghee'},{qty:'1 tsp',name:'cumin seeds'},{qty:'4 cloves',name:'garlic, sliced'},{qty:'2',name:'dry red chillies'}],
    instructions:['Pressure cook toor dal with turmeric, tomatoes and water for 3–4 whistles.','Open cooker; mash dal lightly. Adjust consistency with water.','In a pan, heat ghee; add cumin seeds and let them sizzle.','Add sliced garlic and cook until golden. Add dry red chillies.','Add onion and ginger-garlic paste; cook until golden.','Pour the sizzling tadka over cooked dal; add salt and simmer 5 minutes. Serve with rice.'] },
 
  { id:6, title:'Rajma Chawal', category:'Lunch', difficulty:'Easy', time:45, servings:4, likes:298, comments:24, chef:false, author:'Neelam Sharma',
    image:'https://www.kuchpakrahahai.in/wp-content/uploads/2023/05/Rajma-chawal.jpg',
    description:'Slow-cooked red kidney beans in rich onion-tomato gravy over fluffy basmati rice. Delhi\'s favourite Sunday lunch — warming, hearty and deeply satisfying.',
    tags:['Punjabi','Beans','Comfort Food'],
    ingredients:[{qty:'1.5 cups',name:'red kidney beans, soaked overnight'},{qty:'2',name:'large onions, finely chopped'},{qty:'3',name:'tomatoes, puréed'},{qty:'2 tbsp',name:'ginger-garlic paste'},{qty:'1 tsp',name:'cumin seeds'},{qty:'1 tsp',name:'coriander powder'},{qty:'1 tsp',name:'garam masala'},{qty:'3 tbsp',name:'oil'},{qty:'2 cups',name:'basmati rice, cooked'}],
    instructions:['Pressure cook soaked kidney beans until very soft, about 6–8 whistles.','Heat oil; add cumin seeds. Add onions and cook until deep golden — don\'t rush this.','Add ginger-garlic paste; cook 2 minutes. Add tomato purée and all spices.','Cook the masala on medium until oil separates, about 15 minutes.','Add cooked rajma with its water; simmer 20 minutes.','Finish with garam masala and fresh coriander. Serve over steamed rice.'] },
 
  { id:7, title:'Chole Bhature', category:'Lunch', difficulty:'Medium', time:50, servings:4, likes:356, comments:38, chef:true, author:'Chef Harbans Singh',
    image:'https://cdn.uengage.io/uploads/28289/image-674446-1746179354.jpeg',
    description:'Spicy, tangy Punjabi chickpea curry with deep-fried pillowy leavened bread. The ultimate North Indian street food — bold, indulgent, unforgettable.',
    tags:['Punjabi','Street Food','Indulgent'],
    ingredients:[{qty:'2 cups',name:'white chickpeas, soaked overnight'},{qty:'2',name:'large onions, chopped'},{qty:'3',name:'tomatoes, puréed'},{qty:'1 tbsp',name:'chana masala powder'},{qty:'1 tsp',name:'anardana powder'},{qty:'2 cups',name:'all-purpose flour (for bhature)'},{qty:'½ cup',name:'yogurt'},{qty:'1 tsp',name:'baking powder'},{qty:'oil',name:'for deep frying'}],
    instructions:['Pressure cook chickpeas with a teabag for dark colour, 6 whistles.','Make bhature dough with flour, yogurt, baking powder, salt; knead soft. Rest 2 hours.','Make a rich onion-tomato masala with all spices; add cooked chickpeas.','Simmer chole until thick, 20 minutes.','Roll bhature into ovals; deep fry in hot oil until puffed and golden.','Serve hot with sliced onion, green chutney and pickle.'] },
 
  // ── DINNER (3) ──
  { id:8, title:'Butter Chicken (Murgh Makhani)', category:'Dinner', difficulty:'Medium', time:50, servings:4, likes:487, comments:56, chef:true, author:'Chef Priya Sharma',
    image:'https://homecookingshow.in/wp-content/uploads/2025/03/Butter-Chicken-819x1024.webp',
    description:'The most iconic Indian curry — tandoor-grilled chicken in a velvety, mildly spiced tomato-cream sauce. Silky, rich and addictive with warm naan.',
    tags:['Mughlai','Chicken','Classic'],
    ingredients:[{qty:'700g',name:'chicken pieces'},{qty:'1 cup',name:'tomato purée'},{qty:'½ cup',name:'fresh cream'},{qty:'4 tbsp',name:'unsalted butter'},{qty:'2 tsp',name:'Kashmiri red chilli powder'},{qty:'1 tsp',name:'garam masala'},{qty:'1 tbsp',name:'ginger-garlic paste'},{qty:'1 tsp',name:'kasuri methi (fenugreek leaves)'},{qty:'½ cup',name:'yogurt for marinade'}],
    instructions:['Marinate chicken in yogurt, lemon juice, red chilli and salt for at least 1 hour.','Grill or cook marinated chicken in a hot pan until charred and cooked through. Set aside.','In a large pan, heat butter; add ginger-garlic paste and cook 2 minutes.','Add tomato purée, Kashmiri chilli and spices; cook until butter separates.','Add cooked chicken; simmer 10 minutes.','Stir in cream and crushed kasuri methi; simmer gently 5 minutes. Serve with naan.'] },
 
  { id:9, title:'Palak Paneer', category:'Dinner', difficulty:'Medium', time:35, servings:4, likes:312, comments:35, chef:false, author:'Anita Singh',
    image:'https://www.foodiaq.com/wp-content/uploads/2025/03/Palak-paneer.jpg',
    description:'Fresh spinach purée with aromatic spices and golden-fried cottage cheese cubes. A vibrant, nutritious and deeply satisfying vegetarian dinner.',
    tags:['Punjabi','Vegetarian','Healthy'],
    ingredients:[{qty:'400g',name:'fresh spinach leaves'},{qty:'250g',name:'paneer, cubed'},{qty:'1',name:'large onion, chopped'},{qty:'2',name:'tomatoes, chopped'},{qty:'1 tbsp',name:'ginger-garlic paste'},{qty:'½ cup',name:'cream'},{qty:'1 tsp',name:'cumin seeds'},{qty:'1 tsp',name:'garam masala'},{qty:'2 tbsp',name:'ghee'}],
    instructions:['Blanch spinach in boiling water for 2 minutes; blend smooth.','Pan-fry paneer cubes in ghee until golden on all sides; set aside.','Bloom cumin seeds; add onion and cook until golden, 10 minutes.','Add ginger-garlic paste and tomatoes; cook until oil separates.','Add spinach purée and spices; simmer 5 minutes.','Fold in paneer and cream; heat through. Finish with garam masala.'] },
 
  { id:10, title:'Hyderabadi Dum Biryani', category:'Dinner', difficulty:'Hard', time:90, servings:6, likes:523, comments:67, chef:true, author:'Chef Imran Khan',
    image:'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=700&q=80',
    description:'The crown jewel of Indian cuisine — fragrant basmati layered with slow-cooked marinated mutton, saffron and caramelised onions, sealed and dum-cooked to perfection.',
    tags:['Hyderabadi','Rice','Festive'],
    ingredients:[{qty:'500g',name:'mutton, bone-in pieces'},{qty:'3 cups',name:'basmati rice, soaked 30 min'},{qty:'1 cup',name:'yogurt'},{qty:'2',name:'onions, thinly sliced (for birista)'},{qty:'1 pinch',name:'saffron in warm milk'},{qty:'2 tbsp',name:'biryani masala'},{qty:'4 tbsp',name:'ghee'},{qty:'whole spices',name:'bay leaf, cloves, cardamom, cinnamon'},{qty:'handful',name:'fresh mint and coriander'}],
    instructions:['Marinate mutton overnight in yogurt, biryani masala, ginger-garlic paste and fresh herbs.','Deep-fry sliced onions until golden-brown and crispy (birista). Set aside.','Par-cook soaked rice in boiling salted water with whole spices until 70% done. Drain.','In a heavy pot, layer mutton, then rice, saffron milk, ghee, birista and herbs.','Seal the pot tightly; cook on high 5 min then lowest heat 45 min (dum).','Open and gently fold layers. Serve with raita and mirchi ka salan.'] },
 
  // ── DESSERT (3) ──
  { id:11, title:'Gulab Jamun', category:'Dessert', difficulty:'Medium', time:45, servings:6, likes:445, comments:48, chef:false, author:'Kavya Reddy',
    image:'https://static1.squarespace.com/static/62df38bd768870226dced4a0/62ecd969d0402a7f85047496/631ccf8748aa0a5ade64631e/1666108546275/gulabjamun-417.png?format=2500w',
    description:'Soft, melt-in-your-mouth milk-solid dumplings fried golden and soaked in rose-cardamom syrup. India\'s most beloved festive sweet.',
    tags:['Indian','Sweet','Festive'],
    ingredients:[{qty:'1 cup',name:'khoya (mawa), crumbled'},{qty:'3 tbsp',name:'all-purpose flour'},{qty:'1 pinch',name:'baking soda'},{qty:'2 cups',name:'sugar'},{qty:'1.5 cups',name:'water'},{qty:'4',name:'cardamom pods, crushed'},{qty:'1 tsp',name:'rose water'},{qty:'few strands',name:'saffron'},{qty:'oil/ghee',name:'for deep frying'}],
    instructions:['Make sugar syrup: dissolve sugar in water; add cardamom and saffron. Simmer 5 min. Add rose water.','Knead khoya, flour and baking soda into a smooth, soft dough — no cracks.','Roll into small, smooth balls the size of a marble (they will expand).','Heat oil/ghee on LOW — crucial for cooking through without burning.','Fry on low heat, stirring gently, until deep golden-brown all over.','Transfer immediately to warm syrup; soak at least 2 hours before serving.'] },
 
  { id:12, title:'Gajar Ka Halwa', category:'Dessert', difficulty:'Easy', time:50, servings:6, likes:312, comments:33, chef:false, author:'Sudha Kumari',
    image:'https://www.ruchikrandhap.com/wp-content/uploads/2010/03/Gajar-Ka-Halwa_Ruchik-Randhap.jpg',
    description:'Slow-cooked grated carrot halwa with whole milk, ghee and sugar — a North Indian winter classic. Garnished with cardamom-scented nuts.',
    tags:['Punjabi','Winter','Sweet'],
    ingredients:[{qty:'1 kg',name:'red carrots, grated'},{qty:'1 litre',name:'full-fat milk'},{qty:'½ cup',name:'sugar'},{qty:'4 tbsp',name:'ghee'},{qty:'4',name:'cardamom pods, powdered'},{qty:'3 tbsp',name:'khoya (mawa)'},{qty:'2 tbsp',name:'cashews & almonds, chopped'},{qty:'1 tbsp',name:'raisins'}],
    instructions:['Heat ghee in a heavy kadai; add grated carrots and sauté on medium 5 minutes.','Add full-fat milk; cook on medium, stirring regularly, until milk fully absorbed (30–35 min).','Add sugar; cook until moisture evaporates and halwa comes together.','Add khoya and mix well; cook 5 more minutes.','Add cardamom powder, nuts and raisins; mix.','Serve hot in bowls, garnished with extra nuts and a drizzle of ghee.'] },
 
  { id:13, title:'Kheer (Rice Pudding)', category:'Dessert', difficulty:'Easy', time:40, servings:4, likes:267, comments:22, chef:false, author:'Pushpa Devi',
    image:'https://www.honeywhatscooking.com/wp-content/uploads/2020/10/Rice-Kheer-Indian-Rice-Pudding44.jpg',
    description:'Creamy slow-cooked Indian rice pudding with full-fat milk, cardamom, saffron and nuts. Delicately sweet and fragrant.',
    tags:['Indian','Dessert','Festive'],
    ingredients:[{qty:'¼ cup',name:'basmati rice'},{qty:'1 litre',name:'full-fat milk'},{qty:'4 tbsp',name:'sugar'},{qty:'4',name:'cardamom pods, powdered'},{qty:'1 pinch',name:'saffron in warm milk'},{qty:'2 tbsp',name:'cashews & almonds, chopped'},{qty:'1 tsp',name:'rose water'},{qty:'1 tbsp',name:'raisins'}],
    instructions:['Rinse rice and soak in water for 20 minutes. Drain.','Bring milk to a boil in a heavy-bottomed pan; add soaked rice.','Cook on low-medium heat, stirring frequently, for 25–30 minutes until thick.','Add sugar, saffron milk and cardamom powder; stir well.','Cook 5 more minutes. Kheer will thicken further as it cools.','Garnish with nuts, raisins and rose water. Serve warm or chilled.'] },
 
  // ── DRINKS (3) ──
  { id:14, title:'Masala Chai', category:'Drinks', difficulty:'Easy', time:10, servings:2, likes:423, comments:38, chef:false, author:'Ritu Kapoor',
    image:'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=700&q=80',
    description:'Brewed with whole spices simmered slowly until the kitchen fills with warmth. The double-boil technique gives chai a creaminess no teabag version can match.',
    tags:['Indian','Drinks','Warming'],
    ingredients:[{qty:'300 ml',name:'water'},{qty:'200 ml',name:'whole milk'},{qty:'2½ tsp',name:'Assam loose leaf tea'},{qty:'2 tsp',name:'sugar, or to taste'},{qty:'4',name:'green cardamom pods, lightly crushed'},{qty:'1 inch',name:'fresh ginger, grated'},{qty:'1 stick',name:'cinnamon'},{qty:'3',name:'whole cloves'}],
    instructions:['Combine water, crushed cardamom, cinnamon, cloves and grated ginger in a small saucepan.','Bring to a boil; reduce heat and simmer 3 minutes to extract spice flavours.','Add tea leaves; simmer 2 more minutes — tea should turn deep amber.','Pour in whole milk; increase heat and bring to a full boil.','Let it rise to the brim — the signature of well-made chai. Strain.','Pour into cups from a height to create froth. Sweeten to taste.'] },
 
  { id:15, title:'Mango Lassi', category:'Drinks', difficulty:'Easy', time:5, servings:2, likes:378, comments:29, chef:false, author:'Neha Gupta',
    image:'https://lentillovingfamily.com/wp-content/uploads/2025/05/mango-lassi-2-500x500.jpg',
    description:'Thick, fragrant mango lassi using ripe mangoes, full-fat yogurt and a whisper of cardamom. Creamy, cold, and pure summer sunshine in a glass.',
    tags:['Indian','Drinks','No-Cook'],
    ingredients:[{qty:'2 large',name:'ripe Alphonso mangoes, peeled'},{qty:'1 cup',name:'full-fat yogurt'},{qty:'½ cup',name:'cold whole milk'},{qty:'2 tbsp',name:'honey or sugar'},{qty:'¼ tsp',name:'ground cardamom'},{qty:'6',name:'ice cubes'}],
    instructions:['Slice mango flesh away from the stone and roughly cube it.','Add mango, yogurt, milk and honey to a blender.','Blend on high until completely smooth and frothy, about 1 minute.','Add cardamom; pulse once more. Taste and adjust sweetness.','Pour over ice into tall glasses and serve immediately.'] },
 
  { id:16, title:'Rose Sharbat', category:'Drinks', difficulty:'Easy', time:5, servings:4, likes:198, comments:16, chef:false, author:'Fatima Begum',
    image:'https://images.unsplash.com/photo-1497534446932-c925b458314e?w=700&q=80',
    description:'A refreshing chilled drink with rose syrup, cold milk and basil seeds (sabja). Popular at weddings and summer celebrations — floral, sweet and cooling.',
    tags:['Indian','Drinks','Refreshing'],
    ingredients:[{qty:'4 tbsp',name:'rose syrup (Roohafza)'},{qty:'2 cups',name:'cold whole milk'},{qty:'1 tbsp',name:'basil seeds (sabja), soaked'},{qty:'1 cup',name:'cold water'},{qty:'',name:'ice cubes to serve'},{qty:'few drops',name:'rose water (optional)'}],
    instructions:['Soak basil seeds in water for 15 minutes; they will swell with gel.','In a tall glass, add 1 tablespoon rose syrup.','Pour in cold milk; stir gently to mix.','Add soaked basil seeds.','Top with ice cubes.','Stir once and serve — the colours separate beautifully.'] },
 
  // ── VEGETARIAN (2) ──
  { id:17, title:'Paneer Tikka Masala', category:'Vegetarian', difficulty:'Medium', time:40, servings:4, likes:356, comments:41, chef:true, author:'Chef Sunita Arora',
    image:'https://cdn.prod.website-files.com/65e2ec4e51f6693a3af9151d/660bbc2bf96bfa42f8c93333_f0ef7b68-009e-4c37-bdd5-f67ca31339eb.webp',
    description:'Tandoor-charred paneer cubes in a rich, smoky tomato-cashew gravy. This vegetarian showstopper is every bit as luxurious as its chicken counterpart.',
    tags:['Punjabi','Paneer','Rich'],
    ingredients:[{qty:'400g',name:'paneer, large cubes'},{qty:'1',name:'bell pepper, cubed'},{qty:'1',name:'onion, cubed'},{qty:'½ cup',name:'yogurt for marinade'},{qty:'1 tsp',name:'Kashmiri chilli powder'},{qty:'1 tsp',name:'tandoori masala'},{qty:'1 cup',name:'tomato purée'},{qty:'¼ cup',name:'cashew paste'},{qty:'3 tbsp',name:'butter'}],
    instructions:['Marinate paneer and vegetables in yogurt, tandoori masala and Kashmiri chilli for 30 min.','Grill or cook on a hot tawa until charred on edges.','In a separate pan, heat butter; add tomato purée and cashew paste.','Cook the gravy until butter separates and turns orange-red.','Add grilled paneer and vegetables; toss gently.','Finish with cream, kasuri methi and garam masala. Serve with naan.'] },
 
  { id:18, title:'Chana Masala', category:'Vegetarian', difficulty:'Easy', time:40, servings:4, likes:289, comments:28, chef:false, author:'Mona Verma',
    image:'https://honestcooking.com/wp-content/uploads/2026/03/restaurant-style-chana-masala-2.jpg',
    description:'Bold, tangy chickpea curry with whole spices and pomegranate seed powder. Goes beautifully with bhatura, jeera rice or plain roti.',
    tags:['Punjabi','Chickpeas','Vegan'],
    ingredients:[{qty:'2 cups',name:'boiled chickpeas (or 1 can)'},{qty:'2',name:'onions, finely chopped'},{qty:'3',name:'tomatoes, puréed'},{qty:'1 tbsp',name:'ginger-garlic paste'},{qty:'1.5 tsp',name:'chana masala powder'},{qty:'½ tsp',name:'anardana (pomegranate powder)'},{qty:'1 tsp',name:'cumin seeds'},{qty:'3 tbsp',name:'oil'},{qty:'fresh coriander',name:'to garnish'}],
    instructions:['Heat oil; bloom cumin seeds. Add onions and cook until deep golden, 12 minutes.','Add ginger-garlic paste; cook 2 minutes.','Add tomato purée and all dry spices; cook until oil separates from the masala.','Add boiled chickpeas along with ½ cup water.','Simmer 15 minutes until gravy thickens and coats the chickpeas.','Garnish with fresh coriander and a squeeze of lemon. Serve with rice or roti.'] },
 
  // ── SEAFOOD (2) ──
  { id:19, title:'Goan Fish Curry', category:'Seafood', difficulty:'Medium', time:35, servings:4, likes:223, comments:21, chef:true, author:'Chef Fernandes',
    image:'https://media.istockphoto.com/id/1295772368/photo/macher-jhol-in-black-bowl-on-dark-slate-table-top-indian-cuisine-bengali-fish-curry-asian.jpg?s=612x612&w=0&k=20&c=3asIIURIgisLwXAijZnmNY3p2EWEZEHzByjk7ke9xZk=',
    description:'Tangy coconut-based Goan fish curry with kokum and Kashmiri chillies. Vibrant, mildly spiced and perfect with steamed rice.',
    tags:['Goan','Seafood','Coconut'],
    ingredients:[{qty:'500g',name:'firm white fish (pomfret or kingfish)'},{qty:'1 cup',name:'fresh coconut, grated'},{qty:'4',name:'dried Kashmiri red chillies'},{qty:'1 tsp',name:'cumin seeds'},{qty:'½ tsp',name:'turmeric'},{qty:'4 pieces',name:'kokum (or 1 tbsp tamarind paste)'},{qty:'1',name:'onion, sliced'},{qty:'2 tbsp',name:'oil'},{qty:'to taste',name:'salt'}],
    instructions:['Blend coconut, Kashmiri chillies, cumin and turmeric with water to a smooth paste.','Heat oil; sauté onion until soft and lightly golden.','Add coconut masala paste; cook on medium heat 8 minutes, stirring constantly.','Add water to desired consistency; bring to a gentle boil.','Add kokum/tamarind and salt; stir. Taste for balance.','Slide in fish pieces; cook 8–10 minutes on low without stirring. Serve with rice.'] },
 
  { id:20, title:'Prawn Masala', category:'Seafood', difficulty:'Easy', time:20, servings:3, likes:198, comments:18, chef:false, author:'Sunanda Pillai',
    image:'https://kitchenmai.com/wp-content/uploads/2020/09/coconut_prawn_masala_blog.jpg',
    description:'Juicy prawns in a quick, fiery onion-tomato masala with coastal Indian spices. Ready in 20 minutes — a brilliant weeknight seafood dinner.',
    tags:['Indian','Seafood','Quick'],
    ingredients:[{qty:'400g',name:'large prawns, cleaned'},{qty:'2',name:'onions, finely chopped'},{qty:'2',name:'tomatoes, chopped'},{qty:'1 tbsp',name:'ginger-garlic paste'},{qty:'1 tsp',name:'red chilli powder'},{qty:'1 tsp',name:'coriander powder'},{qty:'½ tsp',name:'turmeric'},{qty:'1 tsp',name:'garam masala'},{qty:'3 tbsp',name:'oil'},{qty:'2 tbsp',name:'fresh coriander'}],
    instructions:['Marinate prawns in turmeric and salt for 10 minutes.','Heat oil; sauté onions until deep golden — this is the base of the flavour.','Add ginger-garlic paste; cook 2 minutes. Add tomatoes and all dry spices.','Cook masala until oil separates, about 8 minutes.','Add marinated prawns; cook 4–5 minutes — do not overcook.','Garnish with coriander and a squeeze of lemon. Serve with rice or roti.'] },
 
  // ── SNACKS (2) ──
  { id:21, title:'Samosa (Punjabi)', category:'Snacks', difficulty:'Medium', time:60, servings:8, likes:412, comments:45, chef:true, author:'Chef Harinder',
    image:'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=700&q=80',
    description:'Crispy golden triangles stuffed with spiced potato and peas — India\'s most beloved tea-time snack. The secret to perfect crunch is the slow-fry technique.',
    tags:['Punjabi','Snacks','Fried'],
    ingredients:[{qty:'2 cups',name:'all-purpose flour'},{qty:'4 tbsp',name:'oil (for dough)'},{qty:'1 tsp',name:'ajwain seeds'},{qty:'3',name:'large potatoes, boiled & mashed'},{qty:'½ cup',name:'green peas, cooked'},{qty:'1 tsp',name:'amchur powder'},{qty:'1 tsp',name:'cumin seeds'},{qty:'2',name:'green chillies, chopped'},{qty:'oil',name:'for deep frying'}],
    instructions:['Make a stiff dough with flour, oil, ajwain and salt. Rest 20 minutes.','Temper cumin in oil; add mashed potatoes, peas and all spices. Cool completely.','Divide dough into balls; roll each into an oval. Cut in half.','Form a cone from each half, fill with potato mixture, seal edges firmly.','Heat oil on medium; fry samosas on LOW heat for 15 minutes until golden and crisp.','Serve hot with green mint chutney and tamarind chutney.'] },
 
  { id:22, title:'Pani Puri (Golgappa)', category:'Snacks', difficulty:'Medium', time:30, servings:4, likes:378, comments:41, chef:false, author:'Rashmi Gupta',
    image:'https://www.seema.com/wp-content/uploads/2022/08/Pani-Poori.jpg',
    description:'India\'s most exciting street snack — crispy puri shells filled with spiced potato, dunked in icy mint-tamarind water. Pure joy in every single bite.',
    tags:['Street Food','Snacks','Chaat'],
    ingredients:[{qty:'20',name:'ready-made puri shells'},{qty:'3',name:'potatoes, boiled & mashed'},{qty:'½ cup',name:'boiled chickpeas'},{qty:'1 bunch',name:'fresh mint leaves'},{qty:'1 tsp',name:'tamarind paste'},{qty:'1 tsp',name:'black salt (kala namak)'},{qty:'1 tsp',name:'chaat masala'},{qty:'2',name:'green chillies'},{qty:'1 tsp',name:'roasted cumin powder'}],
    instructions:['Blend mint, coriander, chillies, tamarind, black salt and cumin with cold water to make pani.','Strain pani; taste and adjust sourness, spice and salt. Chill thoroughly.','Mix mashed potato with chickpeas, chaat masala and black salt.','Make a small hole in the centre of each puri.','Fill with a teaspoon of potato mixture.','Dunk immediately into chilled pani and eat in one bite!'] }
];
 
// ===== CATEGORY COUNTS (auto-calculated) =====
const CAT_COUNTS = {};
RECIPES.forEach(r => { CAT_COUNTS[r.category] = (CAT_COUNTS[r.category] || 0) + 1; });
 
// ===== COLLECTIONS =====
const COLLECTIONS = [
  { id:1, name:'Morning Delights', icon:'🍳', bg:'linear-gradient(135deg,#8B4513,#C2622D)', desc:'The best Indian breakfast recipes to start your day.', recipeIds:[1,2,3,4], isPublic:true },
  { id:2, name:'Festive Feasts', icon:'🎉', bg:'linear-gradient(135deg,#2C4A2E,#4E7A4C)', desc:'Special occasion dishes for celebrations.', recipeIds:[8,10,11,13], isPublic:true },
  { id:3, name:'Quick Weeknights', icon:'⚡', bg:'linear-gradient(135deg,#5C3D2E,#8B6355)', desc:'Delicious Indian meals ready in under 30 min.', recipeIds:[5,9,15,20], isPublic:false }
];

// ===== STATE =====
const STATE = {
  isLoggedIn: false, user: null,
  likedRecipes: new Set(),
  userRecipes: [],
  userCollections: JSON.parse(JSON.stringify(COLLECTIONS)),
  recipes: JSON.parse(JSON.stringify(RECIPES)),
  chefStatus: false
};
 
// ===== TOAST =====
function toast(msg, type='info') {
  let c = document.getElementById('toast-container');
  if (!c) { c = document.createElement('div'); c.id='toast-container'; document.body.appendChild(c); }
  const el = document.createElement('div'); el.className=`toast ${type}`;
  const icon = type==='success'?'✓':type==='error'?'✕':'★';
  el.innerHTML = `<span style="color:${type==='success'?'#7A9E78':type==='error'?'#E05050':'#D97B45'};font-weight:800;">${icon}</span> ${msg}`;
  c.appendChild(el);
  setTimeout(()=>{ el.style.opacity='0'; el.style.transition='0.3s'; setTimeout(()=>el.remove(),300); },3000);
}
 
// ===== MODAL =====
function openModal(id)  { const el=document.getElementById(id); if(el){el.classList.add('open');document.body.style.overflow='hidden';} }
function closeModal(id) { const el=document.getElementById(id); if(el){el.classList.remove('open');document.body.style.overflow='';} }
function switchModal(a,b){ closeModal(a); setTimeout(()=>openModal(b),250); }
document.addEventListener('click',e=>{ if(e.target.matches('.modal-overlay')) closeModal(e.target.id); });
document.addEventListener('keydown',e=>{ if(e.key==='Escape') document.querySelectorAll('.modal-overlay.open').forEach(m=>closeModal(m.id)); });
 
// ===== AUTH =====
function doLogin(u){ STATE.isLoggedIn=true; STATE.user=u; updateAuthUI(); toast(`Welcome back, ${u}! 🌿`,'success'); }
function doLogout(){ STATE.isLoggedIn=false; STATE.user=null; updateAuthUI(); toast('Signed out.','info'); }
function updateAuthUI(){
  const li=STATE.isLoggedIn;
  document.querySelectorAll('[data-auth="yes"]').forEach(el=>el.style.display=li?'':'none');
  document.querySelectorAll('[data-auth="no"]').forEach(el=>el.style.display=li?'none':'');
  if(li) document.querySelectorAll('.nav-initial').forEach(el=>el.textContent=STATE.user[0].toUpperCase());
}
 
// ===== RECIPE CARD =====
function diffChip(d){ const m={Easy:'easy',Medium:'medium',Hard:'hard'}; return `<span class="chip chip-${m[d]||'easy'}">${d}</span>`; }
 
function recipeCardHTML(r, showRemove=false){
  const liked=STATE.likedRecipes.has(r.id);
  const fallback='https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=700&q=80';
  return `
  <div class="recipe-card" onclick="location.href='recipe_detail.html?id=${r.id}'">
    <div class="card-img">
      <img src="${r.image}" alt="${r.title}" loading="lazy" onerror="this.onerror=null;this.src='${fallback}'">
      <div class="card-img-overlay"></div>
      <div class="card-top">
        <span class="card-time">⏱ ${r.time}m</span>
        <div class="card-like ${liked?'liked':''}" onclick="event.stopPropagation();toggleLike(${r.id},this)">${liked?'❤️':'🤍'}</div>
      </div>
    </div>
    <div class="card-body">
      <div class="card-tags">
        <span class="chip chip-cat">${r.category}</span>${diffChip(r.difficulty)}
        ${r.chef?'<span class="chip chip-chef">🌿 Chef</span>':''}
      </div>
      <div class="card-title">${r.title}</div>
      <div class="card-meta">
        <span>❤ ${r.likes}</span><span>💬 ${r.comments}</span><span>🍽 ${r.servings} svg</span>
        ${showRemove?`<span style="margin-left:auto"><button class="btn btn-sm" style="background:rgba(180,40,40,0.08);color:#B42828;border:1px solid rgba(180,40,40,0.18);padding:0.2rem 0.6rem;font-size:0.7rem" onclick="event.stopPropagation();removeFromCol(${r.id})">Remove</button></span>`:''}
      </div>
      <div class="card-author"><div class="author-dot">${r.author[0]}</div><span class="author-name">${r.author}</span></div>
    </div>
  </div>`;
}
 
function toggleLike(id,el){
  if(!STATE.isLoggedIn){openModal('loginModal');return;}
  const r=STATE.recipes.find(x=>x.id===id); if(!r) return;
  if(STATE.likedRecipes.has(id)){STATE.likedRecipes.delete(id);r.likes--;el.classList.remove('liked');el.innerHTML='🤍';toast('Removed from favourites.','info');}
  else{STATE.likedRecipes.add(id);r.likes++;el.classList.add('liked');el.innerHTML='❤️';toast('Added to favourites! ❤️','success');}
}
 
// ===== COLLECTION CARD =====
function colCardHTML(c){
  const cnt=c.recipeIds.length;
  return `<div class="col-card" onclick="location.href='collection_detail.html?id=${c.id}'">
    <div class="col-cover" style="background:${c.bg};">${c.icon}</div>
    <div class="col-body">
      <div class="flex-between mb-1"><div class="col-name">${c.name}</div>${!c.isPublic?'<span style="font-size:0.68rem;color:var(--dust);">🔒 Private</span>':''}</div>
      <div class="col-desc">${c.desc}</div>
      <div class="flex-between"><span class="col-meta">📖 ${cnt} recipe${cnt!==1?'s':''}</span><button class="btn btn-ghost btn-sm" onclick="event.stopPropagation();editCollection(${c.id})">Edit</button></div>
    </div>
  </div>`;
}
 
// ===== NAVBAR =====
function renderNavbar(active){
  const pages=[{href:'home.html',label:'Home',key:'home'},{href:'recipe_list.html',label:'Recipes',key:'recipes'},{href:'collection_list.html',label:'Collections',key:'collections'},{href:'profile.html',label:'Profile',key:'profile'}];
  return `<nav class="navbar"><div class="nav-inner">
    <a href="home.html" class="nav-logo"><div class="nav-logo-leaf">🌿</div>FlavorFind</a>
    <div class="nav-links">${pages.map(p=>`<a href="${p.href}" class="${active===p.key?'active':''}">${p.label}</a>`).join('')}</div>
    <div class="nav-actions">
      <span data-auth="no"><a href="login.html"><button class="btn btn-ghost btn-sm">Sign In</button></a></span>
      <span data-auth="no"><button class="btn btn-terra btn-sm" onclick="openModal('registerModal')">Join Free</button></span>
      <span data-auth="yes" style="display:none;"><a href="recipe_form.html"><button class="btn btn-terra btn-sm">+ Recipe</button></a></span>
      <span data-auth="yes" style="display:none;"><a href="profile.html"><div class="nav-avatar nav-initial">A</div></a></span>
    </div>
  </div></nav>`;
}
 
// ===== FOOTER =====
function renderFooter(){
  return `<footer><div class="footer-grid">
    <div><div class="footer-brand">🌿 FlavorFind</div><p class="footer-desc">Celebrating India's incredible culinary diversity — from Kashmir to Kanyakumari, one authentic recipe at a time.</p><div class="footer-socials"><button class="social-btn">𝕏</button><button class="social-btn">📘</button><button class="social-btn">📸</button><button class="social-btn">▶</button></div></div>
    <div><div class="footer-hdg">Navigate</div><div class="footer-links"><a href="home.html">Home</a><a href="recipe_list.html">Recipes</a><a href="collection_list.html">Collections</a><a href="profile.html">Profile</a></div></div>
    <div><div class="footer-hdg">Categories</div><div class="footer-links"><a href="recipe_list.html?cat=Breakfast">Breakfast</a><a href="recipe_list.html?cat=Dinner">Dinner</a><a href="recipe_list.html?cat=Dessert">Desserts</a><a href="recipe_list.html?cat=Snacks">Snacks</a></div></div>
    <div><div class="footer-hdg">Contact</div><div class="footer-links"><a>📧 hello@theeditorialkitchen.app</a><a>📍 Prayagraj, India</a><a>About Us</a><a>Privacy Policy</a></div></div>
  </div><div class="footer-bottom"><span>© 2025 FlavorFind. All rights reserved.</span><span style="color:var(--terra-light);">Made with ❤ for Indian food lovers</span></div></footer>`;
}
 
// ===== AUTH MODALS =====
function authModalsHTML(){
  return `
  <div class="modal-overlay" id="loginModal"><div class="modal">
    <button class="modal-close" onclick="closeModal('loginModal')">✕</button>
    <div class="modal-header"><div style="font-size:2.2rem;margin-bottom:0.5rem;">👋</div><h2 style="font-family:var(--font-display);font-size:1.6rem;margin-bottom:0.2rem;">Welcome back</h2><p style="color:var(--dust);font-size:0.88rem;">Sign in to your FlavorFind account.</p></div>
    <div class="modal-body">
      <div class="form-group"><label class="form-label">Username</label><input class="form-input" id="liUser" placeholder="your username"></div>
      <div class="form-group"><label class="form-label">Password</label><input class="form-input" type="password" id="liPass" placeholder="••••••••"></div>
      <div class="flex-between mb-3" style="font-size:0.82rem;"><label style="display:flex;align-items:center;gap:0.4rem;color:var(--dust);cursor:pointer;"><input type="checkbox"> Remember me</label><a style="color:var(--terracotta);cursor:pointer;">Forgot password?</a></div>
      <div id="liErr" style="color:#C04040;font-size:0.82rem;margin-bottom:0.75rem;display:none;"></div>
      <button class="btn btn-terra btn-full" onclick="handleLogin()">Sign In</button>
      <button class="btn btn-ghost btn-full mt-1" onclick="demoLogin()">🌿 Demo — instant access</button>
      <p style="text-align:center;font-size:0.82rem;color:var(--dust);margin-top:1rem;">No account? <a style="color:var(--terracotta);font-weight:600;cursor:pointer;" onclick="switchModal('loginModal','registerModal')">Join free</a></p>
    </div>
  </div></div>
  <div class="modal-overlay" id="registerModal"><div class="modal">
    <button class="modal-close" onclick="closeModal('registerModal')">✕</button>
    <div class="modal-header"><div style="font-size:2.2rem;margin-bottom:0.5rem;">🌿</div><h2 style="font-family:var(--font-display);font-size:1.6rem;margin-bottom:0.2rem;">Join FlavorFind</h2><p style="color:var(--dust);font-size:0.88rem;">Free forever. No credit card needed.</p></div>
    <div class="modal-body">
      <div class="form-group"><label class="form-label">Username *</label><input class="form-input" id="rgUser" placeholder="yourname"></div>
      <div class="form-group"><label class="form-label">Email *</label><input class="form-input" type="email" id="rgEmail" placeholder="you@example.com"></div>
      <div class="form-group"><label class="form-label">Password *</label><input class="form-input" type="password" id="rgPass" placeholder="Min. 6 characters"></div>
      <div class="form-group"><label class="form-label">Confirm Password</label><input class="form-input" type="password" id="rgConf" placeholder="Repeat password"></div>
      <div id="rgErr" style="color:#C04040;font-size:0.82rem;margin-bottom:0.75rem;display:none;"></div>
      <button class="btn btn-terra btn-full" onclick="handleRegister()">Create Account</button>
      <p style="text-align:center;font-size:0.82rem;color:var(--dust);margin-top:1rem;">Have an account? <a style="color:var(--terracotta);font-weight:600;cursor:pointer;" onclick="switchModal('registerModal','loginModal')">Sign in</a></p>
    </div>
  </div></div>`;
}
function handleLogin(){ const u=document.getElementById('liUser').value.trim(),p=document.getElementById('liPass').value,err=document.getElementById('liErr'); if(!u||!p){err.textContent='Please fill in all fields.';err.style.display='block';return;} err.style.display='none'; doLogin(u); closeModal('loginModal'); }
function demoLogin(){ doLogin('Abhinav'); closeModal('loginModal'); }
function handleRegister(){ const u=document.getElementById('rgUser').value.trim(),e=document.getElementById('rgEmail').value.trim(),p=document.getElementById('rgPass').value,c=document.getElementById('rgConf').value,err=document.getElementById('rgErr'); if(!u||!e||!p){err.textContent='Please fill all required fields.';err.style.display='block';return;} if(p!==c){err.textContent='Passwords do not match.';err.style.display='block';return;} if(p.length<6){err.textContent='Password must be at least 6 characters.';err.style.display='block';return;} err.style.display='none'; doLogin(u); closeModal('registerModal'); toast('Welcome to FlavorFind! 🌿','success'); }