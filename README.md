# Edge bundling visualization of Pokemon types
by Fredi
## Brief
Visualizes the relationship of types of pokemons. An edge between 2 types means that a pokemon has both types. An edge betweeen a type and NA means that the pokemon only has the one type.
## Live demo
https://frediwa.github.io/Pokemon-Type-Visualization/

# Report (English translation)

## Data
The data is courtesy of Kaggle. Originally I wanted to create a Sunburst viz, but I had trouble finding a hierarchical dataset. I found a Pokemon dataset and thought that I could turn it into something fun. 

I engineering the data a bit to make it easier to work with. I change the types from strings to numbers, among other things.
## The visualization
I looked at the data a bit and thought about what I could do with it. I quickly came up with the idea to visualize the relationship between a pokemon's 2 types. Next, I started looking at what type of dataviz I could use. I found something called a hierarchical edge bundling graph. Without a hierarchy in the dataset, I simply dropped it so I'm calling what's left an Edge Bundling Graph.
## Interractivity and animations
This type of graph isn't the best for interractivity. Apart from the fairly obvious, to show only edges for the type the mouse is over, I added a slider for filtering up to which generation (of pokemon) to display edges. This worked fairly well.

The dataviz isn't too good oin the animation front either. I thought about adding a fade in and out for the edges on the mouseover of types, but apparently that was too much for Chrome. Unfortunately no animations here, I simply couldn't find a good thing to animate.
## Development
The development felt like a roller coaster. The start was extremely slow and nothing seemed to work. I then got a donut graph, but struggled to get it right. The biggest problem was getting the curves right. They went to the right places, but were off relative to the donut.
## Self evaluation
The graph turned out great in my opinion. The graph shows that the distribution of pokemon types is fairly even. Fairy and Ice types are clearly the most scarce. Pokemon's have a primary and secondary type and ideally I would want to make this clear by having a gradient on the curve, going from for example to blue to red, for primary and secondary type respectively. However, this is apparently a very difficult to do. For what it is, I think the visualization works well (5/5).

# Original report (Swedish)
## Datan
Jag fick datan från Kaggle. Ursprungligen hade jag tänkt göra en Sunburst visualisering men hade svårigheter att hitta ett hierarkiskt dataset.  Sedan hittade jag ett Pokedex dataset och tänkte att det här kan man säkert göra något roligt av. 

Datan ändrade jag lite på så att det skulle vara lättare att jobba med. Jag bl.a. bytte typerna, som var strängar, till siffror.
 
## Visualiseringen 
Jag tittade lite på datan och funderade vad jag kunde göra av det. Då tänkte jag att man kunde säkert visualisera relationen mellan en Pokemons 2 typer. Medan jag tittade på olika visualiserings tekniker tittade jag också på en Hierarchic Edge Bundling graf som jag tyckte att var cool. Denna skulle ju vara perfekt för att visa förhållandet mellan typerna. Hierarki är inte relevant så detta är då bara en Edge Bundling graf.

## Interaktivitet och animationer
För interaktivitet var denna typ av visualisering kanske inte den bästa ideén. Uttöver det självklara, att visa bara kurvor av en typ på mouseover, tillsatt jag en slider för att välja från vilka generationer man vill se Pokemon. Detta tycker jag att fungerade bra.

Animationer blev det inte heller mycket av. Jag tänkte att jag kunde fade out och in kurvorna på mouseovern, men detta tyckte Chrome att var för tungt. Hela dokumentet började flicker. Tyvärr blev det inga animationer, jag hittade helt enkelt inte på vad jag kunde animera.

## Utvecklandet
Utvecklandet av Edge Bundling grafen känndes som en berg-och-dalbana. I början gick det ytters långsamt och inget ville fungera. Sedan kom man igång och fick en donut graph. Så tog det en stund för att inse hur man fick den på rätt plats. Mest problem hade jag mot slutet då jag inte fick kurvorna och gå till rätt ställen. Efter en lång stund kom jag på att de far visserligen till rätt ställen, men dessa rätta ställen var relativt till resten av grafen på fel ställe.

## Självutvärdering
Jag tycker att grafen lyckades ganska bra. Man ser bl.a. att distributionen mellan Pokemon typer är relativt jämn. Det finns klart minst av Fairy och Ice typer. Man ser också att de flesta Pokemon som är av Bug typen har den som primär typ. Tyvärr kan det vara lite svårt att skillja på olika typers färger. Helst skulle jag ha en gradient från t.ex. blå(typ 1) till röd (typ 2) men det är tydligen en extremt svettig operation. För det vad den är, anser jag att själva visualisering funkar bra (5/5 -Fredi) 
