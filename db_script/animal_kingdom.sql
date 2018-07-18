

# Dump of table animal_kingdom
# ------------------------------------------------------------

CREATE DATABASE  IF NOT EXISTS animal_kingdom;
USE animal_kingdom;


CREATE TABLE IF NOT EXISTS animals (
  id int(10) unsigned NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  description TEXT NOT NULL,
  picture VARCHAR(50) NOT NULL,
  location_map VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;



INSERT INTO animals(`name`,`description`, `picture`, `location_map`)
VALUES 
('Lion','The Lion is one of the largest, strongest and powerful felines in the world second only in size to the Siberian Tiger. They are the largest cats on the African continent and are unique among felines in a number of ways but the biggest difference between Lions and other cats is that they are incredibly sociable animals that live together in family groups known as prides. Lions are also part of the big cat family meaning that both males and females are able to roar. Despite having once roamed across much of Africa and even parts of Europe and Asia, the world\'s remaining Lion population now resides in sub-Saharan Africa. However, with Lion numbers thought to have dropped by 30% over the past 20 years these enormous predators are sadly becoming more and more vulnerable in their decreasing natural environment.', 'lion.jpg', 'lion_location.jpg'),

('Wolf','The wolf is thought to be an ice age survivor, dating wolves around 300,000 years ago. The wolf is accepted to be the ancestor of the domestic dog as the wolf is thought to have selectively bred in order to breed appealing traits typical of puppies and to eliminate the not so appealing traits of adult wolves.The grey wolf is a highly adaptive animal found in all kinds of terrain. Wolves inhabit forests, deserts, mountains, tundras, grasslands and even urban areas with the wolf being a particularly dominant and ruthless predator within it\'s environment. ', 'wolf.jpg', 'wolf_location.jpg'),

('Giraffe','The Giraffe is a long-necked, hoofed mammal that is natively found grazing in the open woodlands of sub-Saharan Africa. The Giraffe is the tallest living animal on land and despite it\'s height is mostly closely related to the much smaller and solitary Okapi, that is found elusively dwelling in the dense tropical forests. There are nine recognised sub-species of Giraffe that are found in differing geographic locations and vary somewhat in the colour and pattern of their spot-like markings. Although the Giraffe would have once been found across sub-Saharan Africa and even in parts of North Africa, today they are extinct from much of their historically vast natural range with only small, isolated populations remaining in a handful of regions in central Africa. Further south however, Giraffe populations are considered to be stable and are even growing in some areas due to an increase in demand for them on private ranches.', 'giraffe.jpg', 'giraffe_location.jpg'),

('Eagle','The eagle is a (generally) large sized bird of prey meaning that the eagle is one of the most dominant predators in the sky. Eagles are most commonly found in the Northern Hemisphere including Europe, Asia and North America. Eagles are also found on the African continent.
There are more than 60 different species of eagle in the world with only 2 of these eagle species being found in the USA and Canada. However, one of these eagle species is one of the most common species of eagle, the bald eagle. Despite it\'s name the bald eagle has a full head of feathers but their bright white colour makes the bald eagle very distinguishable. The golden eagle is the only other species of eagle found on the American continent.', 'eagle.jpg', 'eagle_location.jpg'),

('Sea Turtle','Sea turtles are found in all of the major oceans and smaller seas with the exception of the Arctic Circle as it is generally too cold for sea turtles as they tend to prefer more temperate waters. The bigger species of sea turtle are found more in the Southern Hemisphere in the tropical, warmer waters.There are 7 known species of sea turtle today including the flatback sea turtle which is native to Australia; the green sea turtle which is found all over the world but there are larger populations of the green sea turtle in the Atlantic and Pacific oceans.', 'sea_turtle.jpg', 'sea_turtle_location.jpg'),

('Dolphin','The term common dolphin tends to refer to the short-beaked common dolphin and the long-beaked common dolphin that are found in warmer seas worldwide.
The common dolphin is generally found around the Mediterranean Sea but are also commonly seen in deep off-shore waters and to a lesser extent over continental shelves that are preferred to shallower waters. Some populations of dolphin may be present all year round, others appear to move in a migratory pattern.', 'dolphin.jpg','dolphin_location.jpg'),

('Red Panda','Red Panda Classification and Evolution
The Red Panda is a cat-sized species of carnivorous mammal that is found inhabiting the temperate mountain forests on the slopes of the Himalayas. As their name suggests, they are related to the larger and more famous Giant Panda (although the exact closeness of their connection still remains uncertain to science), along with also sharing a number of characteristics with the Raccoon and so Red Pandas are classified in a family of their own. The Red Panda is also known by a number of different names in their native regions including the Lesser Panda, the Red Cat-Bear and as the Fire Fox in Nepal. Like their much larger cousin, the Red Panda relies on bamboo to feed and with rapid deforestation of these unique areas there is less and less for these animals to eat, which has ultimately led to the Red Panda being listed as being an endangered species.', 'red_panda.jpg','red_panda_location.jpg'),

('Leopard','The Leopard is a medium-sized wildcat that is natively found in a variety of different habitats across sub-Saharan Africa and southern Asia. A member of the "Big Cat" family, the Leopard is an agile and opportunistic hunter that has been able to exploit habitats unused by other large felines as it spends a great deal of it\'s time high in the tree branches. There are seven different sub-species of Leopard which differ in their appearance and geographic location, with the African Leopard being the most common and widespread and the others being the rare Amur Leopard, the Anatolian Leopard, the Barbary Leopard, the Sinai Leopard, the South Arabian Leopard and the Zanzibar Leopard. Although the African Leopard populations are stable throughout much of their natural range, the story is different for the remaining sub-species that are often isolated and critically at risk (the Zanzibar Leopard is actually now thought to be extinct).', 'leopard.jpg','leopard_location.jpg'),

('Snowy Owl','The snowy owl is also known as the Arctic owl or the great white owl. The snowy owl is primarily found within the Arctic Circle with the range of the snowy owl ranging across Canada, Greenland, Europe and Asia. The snowy owl is the official bird of Quebec in the North-east of Canada.
The snowy owl is one of the largest species of owl in the world, with the average adult snowy owl growing to about 65cm tall with a wingspan of around 140cm. Snowy owls however can be smaller than this, and can even grow to more than 75cm in height.', 'snowy_owl.jpg','snowy_owl_location.jpg'),


('Bengal Tiger','The Bengal tiger (also known as the Royal Bengal tiger) is a subspecies of tiger, found across the Indian subcontinent. The Bengal tiger is the national animal of Bangladesh and is considered to be the second largest tiger in the world.
The Bengal tiger is the most numerous species of tiger in Asia and is found in dense forests and mangrove swamps and jungles throughout India, Bangladesh, Bhutan and Nepal, although the Bengal tiger\'s range today is much smaller than it once was.', 'bengal_tiger.jpg','bengal_tiger_location.jpg'),

('Falcon','Falcons are medium sized birds of prey found all across the world although falcons tend to prefer the more temperate regions of the Northern Hemisphere. Falcons are best known for their ruthlessness and their incredible flying abilities.
Falcons have tapered wings that allow the falcon to change direction extremely quickly especially when compared to other birds. Falcons have been recorded diving at speeds of up to 200mph, meaning they are the fastest creatures on the planet!', 'falcon.jpg','falcon_location.jpg'),

('Elephant','There are numerous subspecies of the Asian elephant, these are the Indian Elephant, Sri Lankan Elephant, Sumatran, Borneo Elephant.
African elephants are larger than Asian elephants and have two subspecies which are the African Bush Elephant and African Forest Elephant. The elephant is the only known mammal that, despite having knee joints, cannot jump! This is thought to be primarily due to the elephants sheer size but also because of the way that the elephants legs are built, they are short and stocky to support the elephants phenomenal weight.', 'elephant.jpg','elephant_location.jpg'),

('Horse','Horses evolved over 50 million years from small many toed animals to the big beautiful, single-toed horses of today. The modern horse has been domesticated around the world for many reasons including transportation and battle.
Horses tend to live for about 30 years, and the oldest recorded horse at age 56 died in 2007. Horses graze on plant matter and vegetation, preferably tender green grass. The height of a horse is measured in hands, 1 hand being the same as 10cm (4 inches). The age of the horse is estimated by the pattern of tooth wear in his mouth.', 'horse.jpg','horse_location.jpg'),

('Hippopotamus','Hippopotamus Classification and Evolution
The Hippopotamus is a large semi-aquatic mammal that is found wallowing in the rivers and lakes across sub-Saharan Africa. Despite it\'s appearance, the Hippopotamus is actually thought to be most closely related to Whales as the two are thought to have had a common ancestor that existed roughly 54 million years ago. Also known as the Common Hippopotamus, it is one of two Hippo species that are found on the African continent with the other being the solitary and forest-dwelling Pygmy Hippopotamus which is only found in western Africa and is now Critically Endangered. Although the Common Hippopotamus remains abundant and widespread throughout it\'s current range, numbers are reportedly declining due to both hunting and habitat loss.', 'hippo.jpg','hippo_location.jpg'),

('Kangaroo','The kangaroo is a marsupial that is indigenous to Australia and and the Indonesian island of New Guinea. Although kangaroos are often seen congregating in groups, kangaroos are generally fairly solitary mammals but kangaroos are also known for being sociable animals when with other kangaroos. Kangaroos have a deep pouch on their front in which to carry their young. A baby kangaroo is called a joey. Kangaroos eat plants, nuts, berries and insects that the kangaroos rummage for in the arid wilderness.', 'Kangaroo.jpg','Kangaroo_location.jpg'),


('Jaguar','The Jaguar is the largest feline on the American continent, and is the only one of the world\'s \'big\' cats to be found in the New World. Jaguars are closely related to Leopards and have a number of similar characteristics including the distinctive spotted pattern on their fur. The Jaguar is the third biggest Cat in the world behind the Tiger and the Lion and is well known for it\'s immense power and agility. In fact, the name Jaguar is said to come from the Native American word yaguar which means "he who kills with one leap". Despite their incredible power however, Jaguars have been hunted through the ages mainly for their staggeringly beautiful fur. Although hunting for Jaguar fur is now prohibited, population numbers have declined throughout much of their natural range, with Jaguars having completely disappeared from a number of areas.', 'jaguar.jpg','jaguar_location.jpg'),

('Swan','The swan is a large aquatic bird closely related to geese and ducks. The swan is known for it\'s fierce temperament and the swans incredibly strong wings which are said to be able to cause dangerous (sometimes fatal) injuries to any animal the swan feels threatened by.
The swan is found on both sides of the Equator across the Northern and Southern Hemispheres. The northern swan is generally white in colour with an orange beak and the southern swan tends to be a mixture of white and black in colour with red, orange or black beaks.', 'swan.jpg','swan_location.jpg'),

('Sea Lion','Sea Lions are found in all climates, in both the north and southern hemispheres and every ocean with the exception of the Atlantic Ocean. The sea lion is often seen around the big harbors of the world where groups of sea lions gather together to feed and bask in the sun.
The sea lion generally lives in coastal ares where there is a good food supply and land close by for the sea lion to have a rest from swimming and hunting in the water. The sea lion has 4 flippers which the sea lion is able to turn around when on solid ground, allowing the sea lion to walk on land.', 'sea_lion.jpg','sea_lion_location.jpg'),

('Seal','The common seal tends to be found in colder waters in many places around the world. Many species of seal inhabit waters in the northern hemisphere and are often found in coastal waters where there is an abundance of food and fewer number of predators.
There are thought to more than 30 different species of seal found in the world\'s cooler waters from the smallest species of seal, the Caspian seal to the Elephant seal which is the largest species of seal. Other seal species include the grey seal and the leopard seal which is known for it\'s highly predatory and aggressive behaviour Seals are closely related to sea lions and also walruses.', 'seal.jpg','seal_location.jpg'),

('Great White Shark','Great white sharks (white shark) are found in coastal waters in every major ocean but the great white shark is most commonly sighted around Australia, South Africa, California and Mexico.
The great white shark can grow to more than 8m long and weigh well over 2,000kg. This makes the great white shark the worlds largest predatory fish! The great white shark has been known to attack humans in the water, this is often because the shark mistakes the human for another animal which it normally hunts since sharks do not like the taste of humans.', 'white_shark.jpg','white_shark_location.jpg'),

('Monkey','Monkeys are found naturally in the jungles and forests of the Southern Hemisphere. There are two ways to classify a monkey, the old world monkey (Asia and Africa) and the new world monkey (South America).
There are around 260 known species of monkey worldwide ranging from chimpanzees to the tiny pygmy marmoset. The monkey can be anywhere from just a few centimetres tall, with some species of monkey growing to more than a metre tall.', 'monkey.jpg','monkey_location.jpg'),

('Rabbit','Rabbits are small mammals found naturally in Europe, South Africa, Sumatra and Japan. Rabbits are also often found in the desert regions of the Middle East where the rabbits inhabit the greener parts of the deserts where there is enough food and water for the rabbits to survive.
Rabbits are herbivores that feed on mainly on grass, but rabbits also eat nuts and berries and often fruit and vegetables. Rabbits dig burrows into the ground where the rabbit hides and stores food, and also gives birth to and raises the baby rabbits.', 'rabbit.jpg','rabbit_location.jpg'),


('Koala','The Koala is a small to medium sized mammal that is found inhabiting a variety of different types of forest in south-eastern Australia. Despite it\'s appearance and the fact that it is also known as the Koala Bear, Koalas are in fact marsupials but are so distinctive amongst this specially adapted family of mammals that they are classified in a scientific group of their own. However, although they are now considered to be one of Australia\'s most iconic mammal species when European settlers first arrived things were very different, with millions of Koalas known to have been killed every year for their pelts (fur). The Koala is a unique animal that famously feeds only the leaves of the eucalyptus trees which they inhabit but this diet is very hard to digest and lacks many of the vital nutrients that are key to the survival of a number of animal species. Today, although populations are stable and widespread the Koala is affected by habitat loss as vast areas of land are cleared every year to support growing development.', 'koala.jpg','koala_location.jpg'),

('Otter','The otter is a small mammal that lives both in water and on land. There are 13 known species of otter that inhabit areas all around the world.
The otter mainly eats aquatic animals such as plankton and fish, but the otter also hunts small amphibians, birds and occasionally small mammals. The sea otter from North America have been tracked journeying as far as southern Japan. The sea otter has also been known to grow to more than 1 meter long. Otters have a thick coat of fur which enables the otter to be warm in near freezing waters. There is also a series of thin hairs under the otters fur that help to trap air and keep the otter warm.', 'otter.jpg','otter_location.jpg'),

('Komodo Dragon','Komodo Dragon Classification and Evolution
The Komodo Dragon is a large species of lizard that is only found on a handful of islands in the Indonesian archipelago. Not known to the world until the First World War, the Komodo Dragon is actually a species of Monitor Lizard that has been evolving in island isolation for millions years, which has led to it becoming very large indeed. The Komodo Dragon is not only the largest lizard in the world, but it also one of the most aggressive and is so powerful that it is able to take prey many times it\'s own size. However, Komodo Dragons are also in severe danger in their natural environments as hunting and habitat loss, along with a shortage of prey, has led to population declines on the few islands where they are found in the Komodo National Park, meaning that they are now listed on the IUCN\'s Red List and therefore have some legal protection.', 'komodo_dragon.jpg','komodo_dragon_location.jpg'),

('Weasel','The Weasel is a small-sized carnivorous mammal that is found on every continent with the exception of Australia and it\'s surrounding islands, along with the more hostile polar regions. There are numerous Weasel species that all vary in size, colour and slightly with their behaviours depending on where in the world they live. The Common Weasel (also known as the European Weasel and the Least Weasel) is the most wide-spread and can be found across much of the northern hemisphere. These tiny but vicious predators are the smallest carnivorous mammals in the world growing to no more than 6 inches from their nose to the tip of their tail. Weasels belong to the mustelid family of carnivores and are most closely related to similar species such as Stoats which are larger in size and have a black tip at the end of their brown tail. Although Weasels are fairly common throughout much of their natural range, populations in certain areas have been affected by habitat loss and they are often seen as pests by farmers.', 'weasel.jpg','weasel_location.jpg'),

('Fox','The fox is a scavenger carnivours dog, generally found in urban city areas in the northern Hemisphere. The fox is a nocturnal mammal, meaning that the fox only goes out a night to hunt for prey.
Wild foxes tend live for around 6-7 years, but some foxes have been known to be older than 13 in captivity. The wild fox hunts for the mouse and other small mammals and birds, but foxes appear to enjoy all species of insect.', 'fox.jpg','fox_location.jpg'),

('Mongoose','The mongoose is a small rodent-like mammal, the mongoose is similar in appearance to the meerkat and the weasel. Mongoose are naturally found in Asia, Africa and parts of Europe but the mongoose has also been artificially introduced to the Caribbean in more recent times.
The mongoose is an omnivore, meaning that mongoose eat both plants and animals. The mongoose in Africa has caught the attention of humans, as they appear to be almost immune the poison of a snake. The mongoose is slightly lighter than the weasel, meaning that the mongoose is able to avert danger more readily than a weasel as a mongoose is able to see oncoming predators with greater ease.', 'mongoose.jpg','mongoose_location.jpg'),

('Zebra','The Zebra is a large species of equine that is natively found roaming the grassy plains of sub-Saharan Africa. They are the largest and most distinctive wild horses with bodies that are patterned with white and black stripes, the exact placement of which is unique to each individual. There are three different species of Zebra that are found in Africa which are the Common Zebra (also known as the Plains Zebra and the Burchell\'s Zebra), the Grevy\'s Zebra (also known as the Imperial Zebra) and the Mountain Zebra. They are incredibly sociable animals that can travel vast distances in search of fresh grass and water but are severely threatened throughout much of their natural range due to increasing levels of human activity. Today, both the Grevy\'s Zebra and the Mountain Zebra are considered to be endangered species and although the Common Zebra is more widespread and numerous, there have been sharp population declines in certain areas.', 'zebra.jpg','zebra_location.jpg'),

('Iguana','Iguanas are native to the jungles of central and south America, and the Caribbean. The iguana is a large docile species of lizard, meaning that iguanas are often a popular choice when keeping exotic pets.
Iguanas have excellent sight allowing the iguana to detect movement from incredibly long distances. The iguana can use this skill to seek out prey and be aware of approaching predators often before the predators has even noticed the iguana.', 'iguana.jpg','iguana_location.jpg'),


('Giant Panda Bear','Giant Panda Bear Classification and Evolution
The Giant Panda is a species of bear that is found in the mountains of central and western China. One of the most famous and easily identifiable animals in the world, the Giant Panda is also one of the rarest and is under immense threat in it\'s natural environment, primarily from habitat loss. The Giant Panda is unique among bears as they do not hibernate, have very small babies at birth and survive on a diet that is almost entirely vegetarian. Since the Giant Panda was first discovered by a French naturalist in 1869, it has become a global symbol for conservation with the World Wildlife Fund using it as their logo. The Chinese people also see the Giant Panda as a symbol of peace and numerous efforts have been made to try and protect the remaining populations in their native habitats.', 'giant_panda_bear.jpg','giant_panda_bear_location.jpg'),

('Sponge','Sponges are very slow-moving animals that are found across the sea floor. Although many sponges actually move less than a millimetre a day, some adult sponges are actually sessile, which means that they are fixed onto something and do not move at all.
Sponges are thought to have evolved around 500 million years ago, and today there are more than 5,000 known species of sponge with another 5,000 species thought to have not yet been discovered. Most sponges live in a salt water environment, attached to objects on the sea floor. Less than 200 sponge species inhabit freshwater habitats.', 'sponge.jpg','sponge_location.jpg'),

('Bear','Bears are large dog like mammals found all around the world. There are eight different species of bear that are found in a wide range of habitats in both the Northern and Southern Hemispheres, mainly the Americas, Europe and Asia.
Most bears are nocturnal, solitary animals only really congregating during the bears mating season. The mother bear will then raise her cubs until they too, are old enough to live on their own. Bears generally have an excellent sense of smell and are also fantastic at climbing trees, swimming and are able to run at speeds of up to 35 mph for short periods of time.', 'bear.jpg','bear_location.jpg'),

('Beaver','Beavers are most well known for their distinctive home-building that can be seen in rivers and streams. The beavers dam is built from twigs, sticks, leaves and mud and are surprisingly strong. Here the beavers can catch their food and swim in the water.
Beavers are nocturnal animals existing in the forests of Europe and North America (the Canadian beaver is the most common beaver). Beavers use their large, flat shaped tails, to help with dam building and it also allows the beavers to swim at speeds of up to 30 knots per hour.', 'beaver.jpg','beaver_location.jpg'),

('Dogs','Dogs are thought to have been first domesticated in East Asia thousands of years ago. People primarily used dogs for guarding the hunters and areas of land.
Todays domestic dog is actually a subspecies of the gray wolf, a type of dog that is feared by most humans. Many people today, in all countries around the world, keep dogs as household pets and many even regard their dog as a family member. There are currently around 800 different species of domestic dog worldwide. Included are mountain dogs such as Saint Bernards or Huskys and territorial guard dogs like the Neapolitan and Tibetan Mastiffs.', 'dog.jpg','dog_location.jpg'),

('Dogs','Killer Whales (orca) are found in all the worlds oceans both hot and cold from the freezing waters of the North and South poles to tropical seas. The killer whale is the biggest member of the dolphin family, and there are about 5 different species of killer whale in the oceans.
Killer whales hunt in groups called pods that normally contain from 6 to 40 killer whales. The killer whales hunt larger fish, seal and sea lion and often sea birds and mammals.', 'Killer_Whale.jpg','Killer_Whale_location.jpg'),

('Puffin','The Puffin is a small species of seabird that is closely related to other auks such as guillemots. There are four different species of Puffin that are found inhabiting the colder conditions of the northern Atlantic which are the Atlantic Puffin, the Tufted Puffin, the Horned Puffin and the Rhinoceros Auklet that despite it\'s name and differing appearance remains one of the four Puffin species in existence today. Best known for their brightly coloured, triangular beaks, Puffins are one of the most distinctive of all seabirds and although they are not considered to be an endangered species, Puffins are extinct from many areas where they would have once been found in abundance. Despite their penguin-like stance and appearance, Puffins are able to fly extremely well and have been known to reach speeds of more than 50mph for short periods of time.', 'puffin.jpg','puffin_location.jpg'),

('Squirrel','There are many different species of squirrel natively found in the Americas, Europe, Asia and Africa. Squirrels are small rodents generally between 10 cm and 20 cm tall, although some species of squirrel like marmots and prairie dogs around the size of a small beaver.
The red squirrel native to the United Kingdom is rapidly becoming extinct due to the rise in eastern grey squirrel numbers. In the UK grey squirrels are classed as vermin so it is illegal to release any into the wild as the grey squirrel destroys the habitats of the smaller native red squirrel.', 'squirrel.jpg','squirrel_location.jpg'),


('Magpie','The magpie is a small to medium sized bird that is found across the globe. The magpie is most closely related to the crow, but the magpie has highly distinguishable black and white feathers which make magpies easy to spot.
There are thought to be around 15 different species of magpie spread across Europe, Asia and parts of Australia and Africa. The magpie is generally around 50 cm long with a slightly larger wingspan, although the exact size of the magpie is dependent on the magpie species.', 'magpie.jpg','magpie_location.jpg'),


('Walrus','The Walrus is a large marine mammal that is found inhabiting the freezing cold and icy waters of the Arctic Circle. Thought to be most closely related to Fur Seals, Seals, Walruses are the second largest ocean-dwelling mammals that come ashore to breed after Elephant Seals and are highly distinctive amongst pinnipeds due to their sensitive whiskers and long tusks. There are two different species of Walrus that vary slightly in appearance but mainly in geographic location which are the Atlantic Walrus and the Pacific Walrus. However, it is widely debated as to whether or not there is actually a third species known as the Laptev Walrus that is found in the Laptev Sea, which many believe to simply be a population of Pacific Walruses that specifically inhabit the area. The Walrus is considered to be an increasingly vulnerable animal species although gathering data on these elusive creatures can be difficult so it is hard to determine exactly the current status of Walrus populations in the wild.', 'walrus.jpg','walrus_location.jpg'),

('Emperor Penguin','Emperor Penguin Classification and Evolution
The Emperor Penguin is found on and around the Antarctic continent and is not just the largest species of penguin in the world but also one of the most unique. Instead of breeding in the warmer summer months like other penguin species, Emperor Penguins lay and incubate their eggs during the coldest time of year in the coldest place on Earth. Emperor Penguins are flightless birds that have small, stiff wings that help them to fly through the water, rather than through the air. Despite having been first recorded by Captain Cook on his second voyage in the late 1700s, the first Emperor Penguin colony wasn\'t discovered until 1902 with their extreme southerly-dwelling nature leading to new colonies still being recorded as late as 1986. Due to the fact that Emperor Penguins breed on the ice, they are thought to be one of the only species of bird that could spend their whole life without actually walking on land.', 'emperor_penguin.jpg','emperor_penguin_location.jpg'),

('rhino','The rhinoceros is a large mammal native to Africa and Asia. There are five species of rhino found in the world with 3 out of the 5 species of rhino now considered to be critically endangered. The rhino is thought to be the second biggest land mammal in the world behind the African elephant. The five species of rhinoceros are the white rhino (which is the largest species of rhino) and the black rhino which are both native to Africa and are only really distinguished in size as they look fairly similar. The Indian rhino, the Sumatran rhino and the Javan rhino are all native to Asia and are much smaller in size than the white rhino and the black rhino of Africa.', 'rhino.jpg','rhino_location.jpg'),

('Sloth','Sloths are tree dwelling mammals that pass their time sleeping and eating. The sloth happily eats both plants and insects, and occasionally small reptiles and birds.
The sloth is indigenous to the jungles of central and south America, with the general opinion being that the sloth cannot survive outside of this specific habitat. The average sloth tends to be around 50 - 60cm long with a short tail of around 7cm in length. The body temperature of the sloth is usually around 30 to 34 degrees celsius (86 to 93 degrees fahrenheit). There are two main species of sloth, the two-toed sloth and the three-toed sloth.', 'sloth.jpg','sloth_location.jpg'),

('Gorilla','Gorillas are the biggest of the worlds primates and live in the forests in select parts of Africa. The gorilla population is sadly much lower than it used to be meaning that gorillas are an endangered species.
Gorillas are herbivores, eating vegetation, fruits, shoots, berries and leaves. An adult male gorilla is able to consume up to 27 kg of food everyday. Gorillas are thought to be the most closely related to chimps and humans. It is said that the DNA of gorillas is 98-99% identical to human DNA!!', 'gorilla.jpg','gorilla_location.jpg'),

('Polar Bear','The Polar Bear is a large species of bear that is found inhabiting the ice fields in the Arctic Ocean. It is the biggest species of bear in the world (with the exception of the Kodiak Brown Bears found in Alaska which can reach similar sizes) with males often weighing-in at around 600kg. Thought to be closely related to the Brown Bear, the Polar Bears\' name actually means "Sea Bear" as they are known to not just spend a great deal of time close to the coast, but are also strong and capable swimmers that have been spotted up to 100 miles from the closest ice or land. They are however being devastatingly affected by global warming as the ice that they rely so heavily on is disappearing fast and has led to the Polar Bear becoming a strong symbol of the effects of climate change. Polar Bear populations have also fallen across the Arctic Ocean due to hunting, pollution and drilling for oil and gas leading to them being as listed as a threatened species.', 'polar_bear.jpg','polar_bear_location.jpg');











































