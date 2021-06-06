# Edge bundling visualization of Pokemon types
by Fredi
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
